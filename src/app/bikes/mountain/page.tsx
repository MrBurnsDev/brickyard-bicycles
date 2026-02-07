import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mountain Bikes on Martha's Vineyard",
  description:
    "Mountain bikes on Martha's Vineyard provide access to trails and conservation land. Learn where to ride responsibly and what to consider.",
  openGraph: {
    title: "Mountain Bikes on Martha's Vineyard | Brickyard Bicycles",
    description:
      "Mountain bikes handle the Island's trails and sandy terrain. Understand where they fit and how to ride responsibly.",
  },
};

export default function MountainBikesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-site">
          <h1 className="text-primary-foreground">
            Mountain Bikes on
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
                Mountain bikes are built for off-road terrain—wide tires, suspension, and geometry designed to handle roots, rocks, sand, and everything in between.
              </p>
              <p className="editorial-text">
                On Martha&apos;s Vineyard, mountain bikes open up riding opportunities that other bikes can&apos;t handle. The Island&apos;s trails, conservation properties, and sandy back roads reward the traction and stability that mountain bikes provide. While the Vineyard isn&apos;t known for big elevation, it offers technical variety and a chance to explore beyond the pavement.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Where This Bike Works Best */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Where Mountain Bikes Work Best on the Vineyard</h2>
              <p className="editorial-text">
                Mountain bikes shine on the Island&apos;s trail systems and conservation properties. Land Bank properties, Sheriff&apos;s Meadow preserves, and other protected areas include trails that range from smooth doubletrack to rooted singletrack. Conditions vary—some trails are firm and fast, others are sandy and slow.
              </p>
              <p className="editorial-text">
                Access rules are important to understand. Not all trails on Martha&apos;s Vineyard allow bicycles, and policies vary by property and season. Some areas restrict bikes to protect sensitive habitat or during wet conditions when trails are vulnerable to damage. Always check posted signage and respect closures.{" "}
                <Link href="/trails-conservation" className="text-accent hover:underline">
                  Learn more about trails and conservation access
                </Link>.
              </p>
              <p className="editorial-text">
                Beyond dedicated trails, mountain bikes handle the Island&apos;s sandier dirt roads and fire roads better than gravel or road bikes. When surfaces turn loose and unpredictable, wider tires and lower gearing make the difference between riding and walking.
              </p>
              <p className="editorial-text">
                Mountain bikes are less efficient on pavement, so getting to the trails can feel slow. Many riders drive to trailheads or combine short road sections with longer off-road routes.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* What to Consider */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">What to Consider</h2>
              <p className="editorial-text">
                <strong className="text-foreground">Hardtail or full suspension depends on the terrain.</strong> Hardtail mountain bikes (front suspension only) are lighter, simpler, and often sufficient for the Vineyard&apos;s relatively moderate trails. Full-suspension bikes add comfort and control on rougher terrain but come with more weight and maintenance. For most Island riding, a capable hardtail works well.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Tire width and tread pattern matter.</strong> Wider tires (2.3&quot; and up) provide better flotation in sand and more traction on loose surfaces. Tread pattern affects grip—more aggressive tread helps in mud and loose conditions but rolls slower on hardpack. Tubeless setups allow lower pressures, which improves traction without risking flats.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Gearing should favor climbing.</strong> Even without big mountains, loaded sandy climbs and technical sections demand low gears. Modern 1x drivetrains with wide-range cassettes provide plenty of range while keeping things simple.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Fit affects control and confidence.</strong> Mountain bike fit is different from road fit—you need room to move on the bike, shift your weight, and stay balanced over rough terrain. A bike that fits well handles better and feels more secure.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Maintenance is ongoing.</strong> Off-road riding is hard on bikes. Suspension needs service, drivetrains wear faster, and brake pads get used up. Sand in particular accelerates wear on chains and cassettes. Regular cleaning and maintenance keeps things working safely.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* How Brickyard Supports */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">How Brickyard Bicycles Supports Mountain Bikers</h2>
              <p className="editorial-text">
                Mountain bikes need regular attention to stay safe and capable. At Brickyard Bicycles, we provide complete{" "}
                <Link href="/services" className="text-accent hover:underline">
                  service and repair
                </Link>{" "}
                for mountain bikes of all types—suspension service, drivetrain work, brake bleeding, wheel truing, and tubeless setup.
              </p>
              <p className="editorial-text">
                We understand how Vineyard conditions affect mountain bikes and can help you choose tires, adjust setup, and maintain your bike for local trails. If something isn&apos;t working right, we&apos;ll diagnose the issue and fix it properly.
              </p>
              <p className="editorial-text">
                For riders building or upgrading a mountain bike, we offer guidance on component selection and help with builds. We can advise on what makes sense for the type of riding you&apos;re doing and the conditions you&apos;ll encounter on the Island.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Closing */}
            <div className="space-y-4">
              <p className="editorial-text">
                Mountain biking on Martha&apos;s Vineyard is about exploring—trails through the woods, sandy fire roads, and conservation land that few visitors ever see. Riding responsibly protects access for everyone.{" "}
                <Link href="/cycling-on-marthas-vineyard" className="text-accent hover:underline">
                  Read more about cycling on the Vineyard
                </Link>{" "}
                or visit Brickyard Bicycles to talk about your setup.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
