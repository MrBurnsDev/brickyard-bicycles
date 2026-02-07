import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Brickyard Bicycles is an independent bike shop on Martha's Vineyard. Quality bicycles, professional service, and honest advice.",
  openGraph: {
    title: "About | Brickyard Bicycles",
    description:
      "An independent bike shop on Martha's Vineyard. We sell, service, and rent bicycles to locals and visitors alike.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-site">
          <h1 className="text-primary-foreground">About</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Text Content */}
            <div className="space-y-8 reading-width">
              <div className="space-y-6">
                <div className="divider-rule-accent" />
                <h2>A Bike Shop for the Island</h2>
              </div>

              <p className="editorial-text">
                Brickyard Bicycles is an independent bike shop on Martha&apos;s Vineyard. We sell, service, and rent bicycles to locals and visitors alike.
              </p>

              <p className="editorial-text">
                We believe in quality work, fair prices, and honest advice. Every bike that leaves our shop has been inspected and adjusted to ride safely. We stock parts and accessories we trust, from brands we believe in.
              </p>

              <p className="editorial-text">
                Whether you&apos;re looking for your first road bike, need your beach cruiser tuned up, or want advice on where to ride, we&apos;re here to help.
              </p>

              <hr className="divider-rule my-10" />

              <div className="space-y-4">
                <h3>Find Us</h3>
                <p className="text-lg text-muted-foreground">
                  We&apos;re located in the heart of Martha&apos;s Vineyard, open year-round for service and seasonally for full retail.
                </p>
                <p className="text-lg text-foreground">
                  Martha&apos;s Vineyard, MA
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="order-first lg:order-last">
              <div className="aspect-[4/5] bg-card overflow-hidden sticky top-8">
                <Image
                  src="/images/workshop.jpg"
                  alt="Brickyard Bicycles workshop"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
