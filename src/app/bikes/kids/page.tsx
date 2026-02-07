import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kids Bikes on Martha's Vineyard",
  description:
    "Kids bikes on Martha's Vineyard should fit properly, be safe, and be simple to ride. Learn what to consider when choosing a bike for your child.",
  openGraph: {
    title: "Kids Bikes on Martha's Vineyard | Brickyard Bicycles",
    description:
      "Getting kids on bikes starts with the right fit. Learn what matters for children's bikes on the Vineyard.",
  },
};

export default function KidsBikesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-site">
          <h1 className="text-primary-foreground">
            Kids Bikes on
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
                A good kids bike is simple, fits properly, and builds confidence. Getting children on the right bike early shapes how they feel about cycling for years to come.
              </p>
              <p className="editorial-text">
                Martha&apos;s Vineyard is a wonderful place for kids to ride. The Island&apos;s bike paths are flat and accessible, neighborhoods are relatively quiet, and cycling is part of everyday life here. Whether it&apos;s a first balance bike or a geared bike for a growing rider, the right setup makes all the difference.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Where This Bike Works Best */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Where Kids Ride on the Vineyard</h2>
              <p className="editorial-text">
                The separated bike paths down-Island are ideal for family riding. The routes between Vineyard Haven, Oak Bluffs, and Edgartown are flat, paved, and wide enough for riders of different speeds to share safely. These paths let kids experience real cycling—moving through the landscape, stopping at beaches, getting somewhere under their own power.
              </p>
              <p className="editorial-text">
                Quiet neighborhood roads and driveways are where many kids learn to ride. Low traffic and familiar surroundings build confidence before venturing onto busier paths. Some conservation properties also have gentle trails suitable for older kids on appropriately equipped bikes.
              </p>
              <p className="editorial-text">
                Up-Island roads are less suitable for young riders due to narrower shoulders, hills, and more variable traffic. Family riding is generally more relaxed on the dedicated paths and quieter down-Island routes.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* What to Consider */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">What to Consider</h2>
              <p className="editorial-text">
                <strong className="text-foreground">Fit is everything.</strong> A bike that&apos;s too big is hard to control and undermines confidence. Kids should be able to touch the ground with their feet while seated, reach the handlebars comfortably, and operate the brakes easily. It&apos;s tempting to buy a bike to &ldquo;grow into,&rdquo; but an oversized bike is harder to learn on and less safe.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Weight matters for small riders.</strong> Heavy bikes are difficult for kids to maneuver, especially when starting, stopping, or navigating obstacles. Lighter bikes respond better and are less tiring to ride. This is one area where quality makes a noticeable difference.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Simplicity builds skills.</strong> Young riders don&apos;t need lots of gears or complicated features. Single-speed bikes or bikes with simple gearing are easier to operate and have fewer things to go wrong. As kids grow and their riding becomes more sophisticated, more complex bikes make sense.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Brakes must work reliably.</strong> Kids need brakes they can actually use. Hand brakes should be sized for small hands and positioned where they&apos;re easy to reach. Coaster brakes (pedal backward to stop) are common on smaller bikes and work fine, but the transition to hand brakes should happen before riders get too fast.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Durability handles the inevitable.</strong> Kids drop bikes, crash bikes, and leave bikes in the rain. A well-built bike withstands this treatment better and remains safe and functional longer. Cheap bikes often have components that wear out or break quickly.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Safety gear is non-negotiable.</strong> Helmets should be worn on every ride. A properly fitted helmet sits level on the head, covers the forehead, and stays in place. Lights and reflectors matter for visibility, especially as days get shorter.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* How Brickyard Supports */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">How Brickyard Bicycles Supports Young Riders</h2>
              <p className="editorial-text">
                Kids bikes need maintenance too. Brickyard Bicycles provides{" "}
                <Link href="/services" className="text-accent hover:underline">
                  service and repair
                </Link>{" "}
                for children&apos;s bikes—brake adjustments, tire changes, bent wheel repairs, and tune-ups to keep everything working safely.
              </p>
              <p className="editorial-text">
                We can help ensure a bike fits your child properly and make adjustments as they grow. Small changes to saddle height and handlebar position extend the useful life of a bike and keep it comfortable to ride.
              </p>
              <p className="editorial-text">
                We also carry helmets and{" "}
                <Link href="/bikes/accessories" className="text-accent hover:underline">
                  accessories
                </Link>{" "}
                for kids—lights, bells, and other gear that makes riding safer and more fun. If you have questions about what your child needs, we&apos;re happy to help.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Closing */}
            <div className="space-y-4">
              <p className="editorial-text">
                Getting kids on bikes opens up the Island for them. The right bike, properly fitted and maintained, makes cycling feel natural and fun.{" "}
                <Link href="/cycling-on-marthas-vineyard" className="text-accent hover:underline">
                  Learn more about family-friendly cycling on Martha&apos;s Vineyard
                </Link>{" "}
                or bring your child&apos;s bike by Brickyard Bicycles for a check-up.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
