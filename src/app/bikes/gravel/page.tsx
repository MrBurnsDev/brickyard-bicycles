import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gravel Bikes on Martha's Vineyard",
  description:
    "Gravel bikes on Martha's Vineyard handle mixed terrain—paved roads, dirt paths, and conservation trails. Learn where to ride and what to consider.",
  openGraph: {
    title: "Gravel Bikes on Martha's Vineyard | Brickyard Bicycles",
    description:
      "Gravel bikes open up the Vineyard's dirt roads and conservation land. Discover why they're well-suited to Island riding.",
  },
};

export default function GravelBikesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-site">
          <h1 className="text-primary-foreground">
            Gravel Bikes on
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
                Gravel bikes sit between road bikes and mountain bikes—fast enough on pavement, capable enough on dirt. They&apos;re designed for riders who don&apos;t want to be limited by surface type.
              </p>
              <p className="editorial-text">
                On Martha&apos;s Vineyard, gravel bikes make particular sense. The Island is laced with dirt roads, old farm lanes, and conservation trails that connect to the paved network. A gravel bike lets you link these routes together, exploring parts of the Vineyard that road bikes can&apos;t reach and covering ground more efficiently than a mountain bike.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Where This Bike Works Best */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Where Gravel Bikes Work Best on the Vineyard</h2>
              <p className="editorial-text">
                Gravel bikes excel on the Island&apos;s unpaved roads and mixed-surface routes. Up-Island, dirt roads wind through West Tisbury, Chilmark, and the areas surrounding Menemsha. These roads see less traffic and offer a quieter, more immersive riding experience—though conditions vary with weather and season.
              </p>
              <p className="editorial-text">
                Conservation land across the Island provides additional riding opportunities. Properties managed by organizations like the Land Bank and Sheriff&apos;s Meadow Foundation include trails that gravel bikes can handle well, where permitted. Access rules vary by property, so it&apos;s worth checking before you ride.{" "}
                <Link href="/trails-conservation" className="text-accent hover:underline">
                  Learn more about trails and conservation on Martha&apos;s Vineyard
                </Link>.
              </p>
              <p className="editorial-text">
                The beauty of a gravel bike is versatility. You can ride the paved bike paths down-Island, turn onto a dirt road, cut through conservation land, and connect back to pavement—all on the same bike. This flexibility opens up routes that would otherwise require multiple bikes or a lot of walking.
              </p>
              <p className="editorial-text">
                Sand is the limiting factor. Some trails and roads on the Vineyard have deep, loose sand that challenges even wide gravel tires. When conditions turn sandy, a{" "}
                <Link href="/bikes/mountain" className="text-accent hover:underline">
                  mountain bike
                </Link>{" "}
                with wider tires may be the better tool.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* What to Consider */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">What to Consider</h2>
              <p className="editorial-text">
                <strong className="text-foreground">Tire choice shapes the ride.</strong> Gravel bikes typically run tires between 35mm and 50mm wide. Narrower tires roll faster on pavement and hardpack; wider tires provide more traction and comfort on loose surfaces. Many riders keep two sets of tires and swap based on the season or the ride they&apos;re planning.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Tire pressure matters as much as tire width.</strong> Lower pressures improve grip and comfort on rough surfaces but increase the risk of pinch flats and rim damage. Tubeless setups are popular for gravel riding because they allow lower pressures with less risk.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Gearing should account for varied terrain.</strong> Gravel rides often mix flat sections with punchy climbs, sometimes while carrying gear. A wide gear range—especially lower gears than a typical road bike—makes these transitions more manageable.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Fit balances efficiency and control.</strong> Gravel bikes are generally more upright than road bikes, which improves visibility and handling on rough surfaces. But fit still matters for comfort over distance. A bike that fits well lets you ride longer with less fatigue.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Durability and maintenance matter.</strong> Gravel riding is harder on components than road riding. Dust, sand, and moisture accelerate wear on drivetrains and brake pads. Regular cleaning and timely replacement of wear items keeps the bike performing well.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* How Brickyard Supports */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">How Brickyard Bicycles Supports Gravel Riders</h2>
              <p className="editorial-text">
                Gravel bikes benefit from setup that&apos;s tailored to local conditions. At Brickyard Bicycles, we help riders dial in tire choice, pressure, and gearing based on how and where they plan to ride on the Vineyard.
              </p>
              <p className="editorial-text">
                Our{" "}
                <Link href="/services" className="text-accent hover:underline">
                  service and repair work
                </Link>{" "}
                addresses the specific demands of gravel riding: drivetrain cleaning and replacement, tubeless setup and maintenance, brake service, and wheel truing. We know how Island conditions affect bikes, and we maintain them accordingly.
              </p>
              <p className="editorial-text">
                For riders building a gravel bike from scratch or upgrading an existing one, we offer guidance on component selection and help with the build process. Whether you&apos;re looking for a do-everything adventure bike or a race-ready gravel machine, we can help you spec and set up something that works.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Closing */}
            <div className="space-y-4">
              <p className="editorial-text">
                Gravel bikes unlock a different side of Martha&apos;s Vineyard—quieter roads, hidden trails, and the freedom to go wherever the route takes you.{" "}
                <Link href="/cycling-on-marthas-vineyard" className="text-accent hover:underline">
                  Explore more about cycling on the Vineyard
                </Link>{" "}
                or stop by Brickyard Bicycles to talk about what setup makes sense for you.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
