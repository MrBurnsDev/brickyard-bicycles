import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Brickyard Bicycles is an independent bike shop on Martha's Vineyard. Quality bicycles, professional service, and a commitment to the cycling community.",
  openGraph: {
    title: "About | Brickyard Bicycles",
    description:
      "Independent bike shop on Martha's Vineyard. Quality bicycles, professional service, and a commitment to the cycling community.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="container-width px-4 md:px-8 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About Brickyard Bicycles
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            An independent bike shop serving Martha&apos;s Vineyard.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">
              Our Story
            </h2>
            {/* TODO: Replace with actual origin story when provided */}
            <p className="text-lg text-stone-600 mb-6">
              Brickyard Bicycles exists because Martha&apos;s Vineyard
              deserves a proper bike shop. Not a rental operation that happens
              to sell a few bikes. Not a seasonal pop-up. A real shop where
              cyclists can find quality equipment, get their bikes serviced
              properly, and talk to people who actually ride.
            </p>
            <p className="text-lg text-stone-600 mb-6">
              We focus on what we do well: selling good bikes from brands we
              believe in, and providing service that keeps those bikes running
              for years. We&apos;re not trying to be everything to everyone.
              If you&apos;re looking for beach cruiser rentals, there are plenty
              of options on the island. If you want a performance road bike,
              a capable gravel rig, or expert service on the bike you already
              own, that&apos;s what we&apos;re here for.
            </p>
            <p className="text-lg text-stone-600">
              We&apos;re independent and intend to stay that way. No corporate
              mandates, no pressure to push products we don&apos;t believe in.
              Just honest advice and quality work, bike by bike.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-stone-100">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">
            What We Believe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Quality Over Quantity
              </h3>
              <p className="text-stone-600">
                We&apos;d rather sell you one bike that fits perfectly and
                lasts for years than three bikes you&apos;ll replace in a
                season. We stock what we&apos;d ride ourselves.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Service Matters
              </h3>
              <p className="text-stone-600">
                A bike is only as good as its maintenance. We take service
                seriously because we know how much a well-tuned bike improves
                the riding experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Know the Product
              </h3>
              <p className="text-stone-600">
                We ride what we sell. We test gear on island roads and trails.
                When we recommend something, it&apos;s because we&apos;ve put
                miles on it ourselves.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Support the Community
              </h3>
              <p className="text-stone-600">
                The cycling community on Martha&apos;s Vineyard is part of
                what makes this island special. We&apos;re here to be a
                resource for that community, not just a store.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">
              Local & Independent
            </h2>
            <p className="text-lg text-stone-600 mb-6">
              Being on an island shapes how we do business. We can&apos;t
              always get parts overnight. We can&apos;t run out to a
              distributor when something&apos;s out of stock. So we plan
              ahead, stock smart, and build relationships with suppliers
              who understand our situation.
            </p>
            <p className="text-lg text-stone-600 mb-6">
              Being independent means we answer to our customers, not to
              corporate headquarters somewhere far away. If something
              isn&apos;t right, we fix it. If you have feedback, we
              listen. This is our shop and our community.
            </p>
            <p className="text-lg text-stone-600">
              Martha&apos;s Vineyard has a strong tradition of supporting
              local businesses. We&apos;re proud to be part of that tradition,
              and we work to earn that support every day.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-stone-100">
        <div className="container-width">
          <div className="bg-stone-900 text-white rounded-lg p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Come Say Hello
              </h2>
              <p className="text-stone-300 mb-6">
                Stop by the shop to see what we&apos;re about. Whether you
                need a bike, a repair, or just want to talk cycling,
                we&apos;re here.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* TODO: Replace with actual Google Maps link */}
                <a
                  href="https://maps.google.com/?q=Brickyard+Bicycles+Martha's+Vineyard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-6 py-3 rounded-md font-semibold hover:bg-stone-100 transition-colors"
                >
                  Get Directions
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border border-stone-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-stone-800 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
