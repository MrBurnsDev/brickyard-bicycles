import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bike Accessories on Martha's Vineyard",
  description:
    "Essential bike accessories for riding on Martha's Vineyard—helmets, lights, locks, bags, and gear that makes cycling safer and more practical.",
  openGraph: {
    title: "Bike Accessories | Brickyard Bicycles",
    description:
      "Helmets, lights, locks, and gear for safe, practical cycling on Martha's Vineyard.",
  },
};

export default function AccessoriesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-site">
          <h1 className="text-primary-foreground">
            Bike Accessories
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing bg-background">
        <div className="container-site">
          <article className="reading-width space-y-12">
            {/* Intro */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl leading-relaxed text-foreground">
                The right accessories make cycling safer, more comfortable, and more practical. Good gear solves real problems.
              </p>
              <p className="editorial-text">
                At Brickyard Bicycles, we carry accessories we trust and use ourselves. The focus is on quality, durability, and function—gear that works when you need it.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Helmets */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Helmets</h2>
              <p className="editorial-text">
                A helmet is the most important piece of safety equipment you can wear. Modern helmets are lighter and more comfortable than ever, with better ventilation and fit systems that adjust easily. A helmet that fits properly and feels comfortable is one you&apos;ll actually wear. We can help you find the right size and style for how you ride.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Lights */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Lights</h2>
              <p className="editorial-text">
                Lights serve two purposes: seeing and being seen. On Martha&apos;s Vineyard, where roads can be narrow and shoulders limited, visibility matters even during daytime. A good front light illuminates the road ahead at night; a rear light makes you visible to drivers from behind. Rechargeable lights are practical and cost-effective over time. We carry lights suitable for everything from bike path commuting to unlit up-Island roads.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Locks */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Locks</h2>
              <p className="editorial-text">
                A lock is insurance. Even on an island, bikes get stolen—especially during busy summer months. U-locks provide strong security in a compact package. Cable locks offer flexibility for securing wheels or multiple bikes but are easier to defeat. The best approach often combines both: a U-lock for the frame and a cable to secure the wheels. The right lock depends on where you ride, how long you leave your bike, and what level of risk you&apos;re comfortable with.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Bags & Racks */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Bags &amp; Racks</h2>
              <p className="editorial-text">
                Carrying things by bike requires the right setup. Racks bolt to the frame and support panniers or baskets for groceries, beach gear, or everyday errands. Frame bags and handlebar bags work for smaller loads without adding a rack. Saddlebags hold repair essentials—tube, levers, multi-tool—so you&apos;re prepared for trailside fixes. We can help figure out what carrying system makes sense for your bike and your needs.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Tools & Pumps */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Tools &amp; Pumps</h2>
              <p className="editorial-text">
                Basic tools let you handle common trailside repairs—flat tires, loose bolts, minor adjustments. A compact multi-tool, tire levers, and a spare tube fit in a small bag and can save a long walk home. A good floor pump at home keeps tires at proper pressure, which improves ride quality and reduces flats. Mini pumps or CO2 inflators work for emergency repairs on the road.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Closing */}
            <div className="space-y-4">
              <p className="editorial-text">
                Stop by{" "}
                <Link href="/services" className="text-accent hover:underline">
                  Brickyard Bicycles
                </Link>{" "}
                to see what we carry. We&apos;re happy to help you find the gear that fits your bike and your riding.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
