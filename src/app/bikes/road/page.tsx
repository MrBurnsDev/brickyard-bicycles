import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Road Bikes on Martha's Vineyard",
  description:
    "Road bikes on Martha's Vineyard offer efficient, fast riding on paved surfaces. Learn where to ride, what to consider, and how Brickyard Bicycles can help.",
  openGraph: {
    title: "Road Bikes on Martha's Vineyard | Brickyard Bicycles",
    description:
      "Road bikes are built for speed and efficiency on pavement. Discover how they fit into cycling on Martha's Vineyard.",
  },
};

export default function RoadBikesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-site">
          <h1 className="text-primary-foreground">
            Road Bikes on
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
                Road bikes are designed for one thing: efficient travel on paved surfaces. Lightweight frames, narrow tires, and drop handlebars put the rider in an aerodynamic position built for speed and distance.
              </p>
              <p className="editorial-text">
                On Martha&apos;s Vineyard, road bikes open up the Island&apos;s network of paved roads and bike paths. Whether you&apos;re looking to cover ground quickly, get a serious workout, or explore the scenic routes that connect the Island&apos;s towns, a road bike rewards riders who want to move.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Where This Bike Works Best */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Where Road Bikes Work Best on the Vineyard</h2>
              <p className="editorial-text">
                Down-Island, road bikes thrive on the separated bike paths connecting Vineyard Haven, Oak Bluffs, and Edgartown. These routes are flat to gently rolling, well-maintained, and ideal for longer rides without the stress of traffic.
              </p>
              <p className="editorial-text">
                Up-Island riding offers more challenge and solitude. Roads through West Tisbury, Chilmark, and out to Aquinnah feature longer climbs, rolling terrain, and quieter conditions—especially early in the day. These roads are narrower with limited shoulders, so awareness matters. The payoff is some of the most scenic riding on the East Coast: stone walls, open fields, and ocean views.
              </p>
              <p className="editorial-text">
                Road bikes are less suited to the Island&apos;s dirt roads and sandy trails. Narrow tires and rigid geometry don&apos;t handle loose surfaces well. For mixed terrain, a{" "}
                <Link href="/bikes/gravel" className="text-accent hover:underline">
                  gravel bike
                </Link>{" "}
                may be a better choice.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* What to Consider */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">What to Consider</h2>
              <p className="editorial-text">
                <strong className="text-foreground">Fit matters most.</strong> Road bikes position the rider forward and low, which is efficient but can be uncomfortable if the bike doesn&apos;t fit properly. A good fit reduces strain on the back, neck, and hands—especially on longer rides.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Tire width is worth thinking about.</strong> Traditional road bikes use tires in the 23–25mm range, but many modern frames accept 28–32mm tires. Wider tires offer more comfort and grip without sacrificing much speed, which can be valuable on Vineyard roads where pavement quality varies.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Gearing depends on your goals.</strong> The Island isn&apos;t mountainous, but the climbs up-Island are steady and can be demanding. A compact or sub-compact crankset paired with a wide-range cassette makes those climbs more manageable, especially if you&apos;re carrying anything or riding in wind.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Maintenance keeps you rolling.</strong> Road bikes benefit from regular attention to brakes, shifting, and tire pressure. Clean drivetrains last longer and shift better. On an island with salt air and sandy roads, keeping up with maintenance prevents small issues from becoming bigger problems.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* How Brickyard Supports */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">How Brickyard Bicycles Supports Road Riders</h2>
              <p className="editorial-text">
                Whether you bought your road bike online, brought it from the mainland, or have been riding it for years, Brickyard Bicycles is here to help keep it running right.
              </p>
              <p className="editorial-text">
                We offer complete{" "}
                <Link href="/services" className="text-accent hover:underline">
                  repair and maintenance services
                </Link>
                —from basic tune-ups to full drivetrain overhauls. If your bike doesn&apos;t feel quite right, we can help diagnose fit issues and make adjustments. We also provide guidance on tire choice, gearing, and component upgrades that make sense for how you ride.
              </p>
              <p className="editorial-text">
                For riders looking to build something custom or spec a performance-oriented bike, we offer consultation and build support. The same service-first approach applies: helping you find the right setup, dialed in properly, and supported for the long run.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Closing */}
            <div className="space-y-4">
              <p className="editorial-text">
                Road cycling on Martha&apos;s Vineyard is rewarding riding. The combination of scenic routes, manageable distances, and varied terrain makes it a great place to put in miles.{" "}
                <Link href="/cycling-on-marthas-vineyard" className="text-accent hover:underline">
                  Learn more about cycling on the Vineyard
                </Link>{" "}
                or stop by the shop to talk through what you need.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
