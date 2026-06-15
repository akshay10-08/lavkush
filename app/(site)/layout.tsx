import { SiteShell } from "@/components/SiteShell";
import { VENUE, CONTACT, LOCATION, SEO } from "@/lib/constants";

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EventVenue"],
  name: VENUE.name,
  alternateName: VENUE.nameAlt,
  description: SEO.defaultDescription,
  url: SEO.url,
  telephone: CONTACT.phoneDisplay,
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Resort Road",
    addressLocality: "New Kanpur City",
    addressRegion: "Uttar Pradesh",
    postalCode: LOCATION.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.52,
    longitude: 80.25,
  },
  sameAs: [CONTACT.instagram, CONTACT.youtube],
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Multiple Lush Green Lawns" },
    { "@type": "LocationFeatureSpecification", name: "Grand Banquet Hall (AC)" },
    { "@type": "LocationFeatureSpecification", name: "Swimming Pool" },
    { "@type": "LocationFeatureSpecification", name: "In-house Catering" },
    { "@type": "LocationFeatureSpecification", name: "Guest Rooms & Cottages" },
    { "@type": "LocationFeatureSpecification", name: "Wheelchair Accessible" },
    { "@type": "LocationFeatureSpecification", name: "Valet Parking" },
    { "@type": "LocationFeatureSpecification", name: "Power Backup" },
  ],
  image: "/og-image.jpg",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "23:00",
  },
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteShell>{children}</SiteShell>
    </>
  );
}
