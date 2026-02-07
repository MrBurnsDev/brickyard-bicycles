import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hybrid Bikes on Martha's Vineyard",
  description:
    "Hybrid bikes on Martha's Vineyard offer comfort and versatility for bike paths, town riding, and casual exploration. Learn what makes them a popular choice.",
  openGraph: {
    title: "Hybrid Bikes on Martha's Vineyard | Brickyard Bicycles",
    description:
      "Hybrid bikes combine comfort and practicality for everyday Island riding. Discover why they're well-suited to Martha's Vineyard.",
  },
};

export default function HybridBikesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-site">
          <h1 className="text-primary-foreground">
            Hybrid Bikes on
            <br />
            Martha&apos;s Vineyard
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
                Hybrid bikes blend the comfort of a cruiser with the efficiency of a road bike. Flat handlebars, an upright riding position, and medium-width tires make them approachable and versatile.
              </p>
              <p className="editorial-text">
                On Martha&apos;s Vineyard, hybrid bikes are one of the most practical choices for everyday riding. They handle the Island&apos;s bike paths easily, work well for errands around town, and are comfortable enough for longer explorations without demanding an aggressive riding position. For residents and visitors alike, hybrids offer a straightforward way to get around.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Where This Bike Works Best */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Where Hybrid Bikes Work Best on the Vineyard</h2>
              <p className="editorial-text">
                Hybrid bikes are ideal for the Island&apos;s network of paved bike paths. The routes connecting Vineyard Haven, Oak Bluffs, and Edgartown are flat to gently rolling, well-maintained, and perfect for comfortable cruising. These paths see a mix of riders at different speeds, and hybrids fit right in.
              </p>
              <p className="editorial-text">
                In town, hybrids excel. The upright position provides good visibility in traffic, and the manageable geometry makes stopping and starting easy. Whether you&apos;re riding to the beach, the grocery store, or meeting friends for coffee, a hybrid handles casual trips without fuss.
              </p>
              <p className="editorial-text">
                Hybrid bikes can also handle light gravel and packed dirt roads, though they&apos;re not designed for technical trails or deep sand. For riders who want to explore some unpaved routes without committing to a dedicated{" "}
                <Link href="/bikes/gravel" className="text-accent hover:underline">
                  gravel bike
                </Link>
                , many hybrids offer enough tire clearance to handle mellow off-pavement riding.
              </p>
              <p className="editorial-text">
                Up-Island roads are accessible on a hybrid, though the riding is slower and more demanding than on a road bike. The upright position creates more wind resistance, and wider tires roll a bit slower. For longer, hillier rides, some riders prefer something more performance-oriented. But for moderate distances at a comfortable pace, hybrids work fine.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* What to Consider */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">What to Consider</h2>
              <p className="editorial-text">
                <strong className="text-foreground">Comfort is the priority.</strong> Hybrid bikes are designed to feel good from the first ride, with a natural riding position that doesn&apos;t strain the back, neck, or wrists. For casual riders who don&apos;t want to adapt to an aggressive bike fit, this matters.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Tire width affects capability.</strong> Hybrids typically come with tires in the 32–42mm range. Wider tires handle bumps and light gravel better; narrower tires roll faster on pavement. Some frames accept wider tires for more versatility, which is worth considering if you might venture off-pavement.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Gearing should match your terrain.</strong> Most hybrids come with gearing that handles flat to moderately hilly terrain. If you plan to ride up-Island regularly or carry cargo, make sure the bike has low enough gears for the climbs.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Accessories add utility.</strong> Hybrids are often designed with practical features in mind—mounts for racks, fenders, and lights. A well-equipped hybrid becomes transportation, not just recreation. Consider what you&apos;ll carry and how you&apos;ll use the bike when setting it up.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Maintenance keeps things reliable.</strong> Hybrids are generally low-maintenance bikes, but they still need attention. Regular brake and shifting adjustments, tire inflation, and chain lubrication keep the bike safe and pleasant to ride.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* How Brickyard Supports */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">How Brickyard Bicycles Supports Hybrid Riders</h2>
              <p className="editorial-text">
                Hybrid bikes are workhorses, and we keep them working. Brickyard Bicycles offers complete{" "}
                <Link href="/services" className="text-accent hover:underline">
                  service and maintenance
                </Link>{" "}
                for hybrids of all kinds—tune-ups, brake adjustments, tire replacement, and everything in between.
              </p>
              <p className="editorial-text">
                If your hybrid doesn&apos;t feel quite right, we can help. Small adjustments to saddle height, handlebar position, and brake lever reach can make a significant difference in comfort. We can also advise on upgrades that make sense—better tires, a more comfortable saddle, or adding racks and fenders for daily utility.
              </p>
              <p className="editorial-text">
                We service bikes regardless of where they were purchased. Whether your hybrid is brand new, a hand-me-down, or something you bought online, we&apos;re here to help keep it running right.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Closing */}
            <div className="space-y-4">
              <p className="editorial-text">
                Hybrid bikes are a sensible choice for Island life—comfortable, capable, and practical for the way most people actually ride.{" "}
                <Link href="/cycling-on-marthas-vineyard" className="text-accent hover:underline">
                  Learn more about cycling on Martha&apos;s Vineyard
                </Link>{" "}
                or stop by Brickyard Bicycles to get your hybrid set up the way you need it.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
