import { NextRequest, NextResponse } from "next/server";

// ── Simple in-memory rate limiter ──────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // max requests per window
const RATE_WINDOW = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT) return true;
  return false;
}

// ── Validation (mirrors client-side Zod schema) ────────────────────────────
function validateEnquiry(data: Record<string, unknown>): string | null {
  if (!data.name || typeof data.name !== "string" || data.name.length < 2)
    return "Name is required (min 2 characters)";
  if (
    !data.phone ||
    typeof data.phone !== "string" ||
    !/^(\+91[\s-]?)?[6-9]\d{9}$/.test(data.phone)
  )
    return "Valid 10-digit Indian mobile number is required";
  if (!data.eventType) return "Event type is required";
  if (!data.guestCount) return "Guest count is required";

  // Honeypot check
  if (data.honeypot && typeof data.honeypot === "string" && data.honeypot.length > 0)
    return "__honeypot__";

  return null;
}

// ── Handler ────────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  // Rate limit by IP
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  const validationError = validateEnquiry(body);

  // Honeypot triggered — silently succeed (don't reveal it's a trap)
  if (validationError === "__honeypot__") {
    return NextResponse.json({ success: true });
  }

  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  // ── Email the owner ────────────────────────────────────────────────────
  // Uncomment and configure when RESEND_API_KEY and OWNER_EMAIL are set:
  //
  // try {
  //   const { Resend } = await import("resend");
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //
  //   await resend.emails.send({
  //     from: "Luv Kush Vatika Website <noreply@lavkushvatika.com>",
  //     to: process.env.OWNER_EMAIL!,
  //     subject: `New Enquiry: ${body.eventType} — ${body.name}`,
  //     html: `
  //       <h2>New Enquiry from Website</h2>
  //       <table>
  //         <tr><td><strong>Name:</strong></td><td>${body.name}</td></tr>
  //         <tr><td><strong>Phone:</strong></td><td>${body.phone}</td></tr>
  //         <tr><td><strong>Email:</strong></td><td>${body.email || "—"}</td></tr>
  //         <tr><td><strong>Event Type:</strong></td><td>${body.eventType}</td></tr>
  //         <tr><td><strong>Date:</strong></td><td>${body.preferredDate || "—"}</td></tr>
  //         <tr><td><strong>Guests:</strong></td><td>${body.guestCount}</td></tr>
  //         <tr><td><strong>Space:</strong></td><td>${body.spaceOfInterest || "Any"}</td></tr>
  //         <tr><td><strong>Message:</strong></td><td>${body.message || "—"}</td></tr>
  //         <tr><td><strong>Source:</strong></td><td>${body.source || "website"}</td></tr>
  //       </table>
  //     `,
  //   });
  // } catch (emailError) {
  //   console.error("Failed to send email:", emailError);
  //   // Don't fail the request — log and continue
  // }

  // ── Optional: Google Sheet / CRM webhook ───────────────────────────────
  // if (process.env.GOOGLE_SHEET_WEBHOOK_URL) {
  //   await fetch(process.env.GOOGLE_SHEET_WEBHOOK_URL, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(body),
  //   }).catch(console.error);
  // }

  console.log("📩 New enquiry received:", {
    name: body.name,
    phone: body.phone,
    eventType: body.eventType,
    guestCount: body.guestCount,
    space: body.spaceOfInterest,
    source: body.source,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({
    success: true,
    message: "Enquiry received. We'll respond within 24 hours.",
  });
}
