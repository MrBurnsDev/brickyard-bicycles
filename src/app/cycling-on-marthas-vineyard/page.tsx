import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cycling on Martha's Vineyard",
  description:
    "Discover cycling on Martha's Vineyard. Scenic roads, quiet back roads, and coastal routes for every type of rider.",
  openGraph: {
    title: "Cycling on Martha's Vineyard | Brickyard Bicycles",
    description:
      "The Vineyard is one of the best places to ride a bike on the East Coast. Quiet roads, ocean views, and a pace of life that rewards those who slow down.",
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
                The Vineyard is one of the best places to ride a bike on the East Coast. Quiet roads, ocean views, and a pace of life that rewards those who slow down.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Section: The Roads */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">The Roads</h2>
              <p className="editorial-text">
                Most of the island&apos;s main roads have bike lanes or wide shoulders. The roads between towns are rolling and scenic—rarely flat, never boring. Drivers here are used to cyclists and generally respectful.
              </p>
              <p className="editorial-text">
                For those seeking quiet, the back roads through the up-island towns of West Tisbury, Chilmark, and Aquinnah offer miles of peaceful riding past farms, forests, and ocean vistas.
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-[hsl(var(--accent))] pl-6 py-2 my-12">
              <p className="font-[var(--font-display)] text-2xl md:text-3xl uppercase tracking-tight text-foreground">
                &ldquo;The best rides are the ones where you lose track of time.&rdquo;
              </p>
            </blockquote>

            {/* Section: Routes to Know */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Routes to Know</h2>
              <p className="editorial-text">
                <strong className="text-foreground">The State Road Loop</strong> — A classic 30-mile circuit that touches nearly every town on the island. Rolling terrain with a few memorable climbs.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Beach Road to Edgartown</strong> — Flat and direct, this is the main route connecting Vineyard Haven and Oak Bluffs to Edgartown. Separated bike path for much of it.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Up-Island to Aquinnah</strong> — The scenic route west. Expect hills, ocean views, and a peaceful pace. The climb to the Aquinnah Cliffs is worth the effort.
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
              </ul>
            </div>

            <hr className="divider-rule" />

            {/* Closing */}
            <div className="space-y-4 pt-8">
              <p className="text-xl leading-relaxed text-muted-foreground">
                Whether you&apos;re here for a day or a season, cycling is the best way to experience the island. Come by the shop—we&apos;re happy to share our favorite routes and help you gear up for the ride.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
