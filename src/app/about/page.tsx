import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Brickyard Bicycles is a service-driven bike shop on Martha's Vineyard. Decades of mechanical experience, honest advice, and a deep love for cycling.",
  openGraph: {
    title: "About | Brickyard Bicycles",
    description:
      "A bike shop built on decades of hands-on experience and a lifelong connection to cycling.",
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
                <h2>In the Blood</h2>
              </div>

              <p className="editorial-text">
                Some people find bikes later in life. For us, it started early—learning to work a wrench before learning to drive, growing up in a family bike shop, absorbing everything there was to know about what makes a bicycle tick.
              </p>

              <p className="editorial-text">
                That foundation led to decades in the industry: working with manufacturers, managing shops, and eventually landing on Martha&apos;s Vineyard. After years of working at established Island bike shops, Brickyard Bicycles became the natural next step—a chance to build something focused on what matters most.
              </p>

              <hr className="divider-rule my-10" />

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl">Service First</h2>
              </div>

              <p className="editorial-text">
                The bike industry has changed. More people are buying online, and that&apos;s fine—we&apos;re not here to fight it. What hasn&apos;t changed is that bikes need maintenance, repairs, and someone who knows what they&apos;re doing to keep them running right.
              </p>

              <p className="editorial-text">
                That&apos;s where we come in. Brickyard Bicycles is built around service. We fix what&apos;s broken, tune what needs tuning, and help riders get the most out of their bikes—no matter where they bought them.
              </p>

              <p className="editorial-text">
                We offer both in-shop and mobile service, because not everyone can make it to us. Wherever you are on the Island, we&apos;ll bring the tools and the expertise.
              </p>

              <hr className="divider-rule my-10" />

              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl">Why Here</h2>
              </div>

              <p className="editorial-text">
                Martha&apos;s Vineyard is a special place to be in the bike business—and to be a cyclist. The trails, the back roads, the community of riders who care about this Island and how we get around it.
              </p>

              <p className="editorial-text">
                We&apos;re involved in local efforts to make cycling safer and more accessible, while respecting what makes this place beautiful. It&apos;s the kind of work that only makes sense when you love where you live.
              </p>

              <hr className="divider-rule my-10" />

              <div className="space-y-4">
                <h3>Find Us</h3>
                <p className="text-lg text-muted-foreground">
                  We&apos;re in Tisbury, ready for service year-round. Stop by, or let us come to you.
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
