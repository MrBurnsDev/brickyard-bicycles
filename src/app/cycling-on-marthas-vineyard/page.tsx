import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cycling on Martha's Vineyard",
  description:
    "Martha's Vineyard is one of the best places to ride on the East Coast. Quiet roads, scenic trails, and a cycling culture unlike anywhere else.",
  openGraph: {
    title: "Cycling on Martha's Vineyard | Brickyard Bicycles",
    description:
      "Endless trails, bike paths, and quiet roads to explore. There's no bad ride on Martha's Vineyard.",
  },
};

export default function CyclingPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-site">
          <h1 className="text-primary-foreground">
            Cycling on
            <br />
            Martha&apos;s Vineyard
          </h1>
        </div>
      </section>

      {/* Editorial Content */}
      <section className="section-spacing bg-background">
        <div className="container-site">
          <article className="reading-width space-y-12">
            {/* Intro */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl leading-relaxed text-foreground">
                There are few places in the country better for cycling than Martha&apos;s Vineyard. Quiet roads, ocean views at every turn, and a pace of life that rewards slowing down.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Section: The Roads */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">The Roads</h2>
              <p className="editorial-text">
                Most of the Island&apos;s main roads have bike lanes or wide shoulders, and drivers are accustomed to sharing the road with cyclists. The terrain is rolling and varied—rarely flat, never boring.
              </p>
              <p className="editorial-text">
                For quieter riding, the back roads through West Tisbury, Chilmark, and Aquinnah offer miles of peaceful pavement past farms, forests, and ocean vistas. Up-island, you can ride for long stretches without seeing a car.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-[hsl(var(--accent))] pl-6 py-2 my-12">
              <p className="font-[var(--font-display)] text-2xl md:text-3xl uppercase tracking-tight text-foreground">
                &ldquo;There is no bad ride, no ugly view.&rdquo;
              </p>
            </blockquote>

            {/* Section: Beyond the Pavement */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Beyond the Pavement</h2>
              <p className="editorial-text">
                The Island isn&apos;t just paved roads. There are endless trails, old dirt roads, and bike paths winding through conservation land. Gravel bikes and mountain bikes open up even more terrain to explore.
              </p>
              <p className="editorial-text">
                Separated bike paths connect several towns, making it easy—and safe—to get around without a car. In summer, you can often get places faster by bike than by driving.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Section: Routes to Know */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Routes to Know</h2>
              <p className="editorial-text">
                <strong className="text-foreground">The State Road Loop</strong> — A classic circuit that touches nearly every town. Rolling terrain with a few memorable climbs and plenty of places to stop.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Beach Road to Edgartown</strong> — Flat and direct, with a separated bike path for much of the way. Connects Vineyard Haven and Oak Bluffs to Edgartown along the water.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Up-Island to Aquinnah</strong> — The scenic route west. Expect hills, ocean views, and a peaceful pace. The climb to the cliffs is worth every pedal stroke.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Section: Safe & Accessible */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">A Culture of Cycling</h2>
              <p className="editorial-text">
                Martha&apos;s Vineyard has one of the strongest cycling cultures on the East Coast. The Island is compact enough to explore entirely by bike, and there&apos;s a real commitment to making cycling safer and more accessible for everyone.
              </p>
              <p className="editorial-text">
                Local advocacy continues to expand bike infrastructure while preserving the character and beauty that makes this place special. It&apos;s a community that takes cycling seriously—without taking itself too seriously.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Section: Riding Tips */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">A Few Tips</h2>
              <ul className="space-y-3">
                <li className="editorial-text">
                  <strong className="text-foreground">Start early.</strong> Roads are quieter and cooler before 9am, especially in summer.
                </li>
                <li className="editorial-text">
                  <strong className="text-foreground">Bring water.</strong> There aren&apos;t many places to refill up-island.
                </li>
                <li className="editorial-text">
                  <strong className="text-foreground">Respect the pace.</strong> This isn&apos;t a race. Stop for coffee, take photos, enjoy the view.
                </li>
                <li className="editorial-text">
                  <strong className="text-foreground">Check your tires.</strong> Island roads are generally good, but sand and gravel appear without warning.
                </li>
                <li className="editorial-text">
                  <strong className="text-foreground">Get your bike dialed.</strong> Proper setup and maintenance make a real difference on these roads. Stop by the shop if you need a tune-up.
                </li>
              </ul>
            </div>

            <hr className="divider-rule" />

            {/* Closing */}
            <div className="space-y-4 pt-8">
              <p className="text-xl leading-relaxed text-muted-foreground">
                Whether you&apos;re here for a day or a season, cycling is the best way to experience the Island. Come by the shop—we&apos;re happy to share our favorite routes and make sure your bike is ready for the ride.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
