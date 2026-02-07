interface LocalBusinessSchema {
  name: string;
  description: string;
  url: string;
  // TODO: Add actual address when provided
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  // TODO: Add actual coordinates when provided
  geo?: {
    latitude: number;
    longitude: number;
  };
  // TODO: Add actual phone when provided
  telephone?: string;
  image?: string;
  priceRange?: string;
  sameAs?: string[];
}

export default function JsonLd() {
  const businessData: LocalBusinessSchema = {
    name: "Brickyard Bicycles",
    description: "Independent bike shop on Martha's Vineyard offering bicycle sales, service, and professional repairs. Specializing in road, gravel, and performance bikes.",
    url: "https://brickyardbicycles.com", // TODO: Replace with actual domain
    sameAs: [
      "https://www.instagram.com/brickyardbicycles/",
      "https://www.facebook.com/BrickyardBicycles/",
    ],
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessData.url,
    name: businessData.name,
    description: businessData.description,
    url: businessData.url,
    ...(businessData.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: businessData.address.streetAddress,
        addressLocality: businessData.address.addressLocality,
        addressRegion: businessData.address.addressRegion,
        postalCode: businessData.address.postalCode,
        addressCountry: businessData.address.addressCountry,
      },
    }),
    ...(businessData.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: businessData.geo.latitude,
        longitude: businessData.geo.longitude,
      },
    }),
    ...(businessData.telephone && { telephone: businessData.telephone }),
    ...(businessData.sameAs && { sameAs: businessData.sameAs }),
    // Additional SEO-friendly properties
    areaServed: {
      "@type": "Place",
      name: "Martha's Vineyard, Massachusetts",
    },
    serviceType: [
      "Bicycle Sales",
      "Bicycle Repair",
      "Bicycle Service",
      "Bicycle Tune-up",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
