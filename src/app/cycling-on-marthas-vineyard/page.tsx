import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cycling on Martha's Vineyard",
  description:
    "Discover cycling on Martha's Vineyard. Scenic roads, mixed terrain, bike trails, and everything you need to know about riding on the island.",
  keywords: [
    "cycling Martha's Vineyard",
    "bike trails Martha's Vineyard",
    "where to ride bikes Martha's Vineyard",
    "Martha's Vineyard bike routes",
    "cycling routes Martha's Vineyard",
    "biking Martha's Vineyard",
  ],
  openGraph: {
    title: "Cycling on Martha's Vineyard | Brickyard Bicycles",
    description:
      "Discover cycling on Martha's Vineyard. Scenic roads, mixed terrain, and everything you need to know about riding on the island.",
  },
};

export default function CyclingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="container-width px-4 md:px-8 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Cycling on Martha&apos;s Vineyard
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            The island offers some of the best cycling in New England,
            with quiet roads, stunning scenery, and terrain for every rider.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">
              Why Ride Here
            </h2>
            <p className="text-lg text-stone-600 mb-4">
              Martha&apos;s Vineyard is a cyclist&apos;s island. With limited
              car traffic on many roads, dedicated bike paths, and a compact
              geography that makes exploring by bike practical and enjoyable,
              it&apos;s no wonder cyclists have been coming here for generations.
            </p>
            <p className="text-lg text-stone-600 mb-4">
              The island is roughly 100 square miles, with six distinct towns
              connected by a network of roads that range from smooth pavement
              to packed dirt. You can ride from one end to the other in a few
              hours, or spend a week discovering hidden corners and favorite loops.
            </p>
            <p className="text-lg text-stone-600">
              Whether you&apos;re here for a weekend or the whole summer,
              whether you prefer road riding, gravel grinding, or casual
              cruising, Martha&apos;s Vineyard has something to offer.
            </p>
          </div>
        </div>
      </section>

      {/* Riding Conditions */}
      <section className="section-padding bg-stone-100">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">
            Riding Conditions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Roads
              </h3>
              <p className="text-stone-600 mb-4">
                The main roads connecting the island&apos;s towns are generally
                well-paved with varying shoulder widths. Traffic is heavier in
                the down-island towns (Vineyard Haven, Oak Bluffs, Edgartown)
                and lighter up-island (West Tisbury, Chilmark, Aquinnah).
              </p>
              <p className="text-stone-600">
                Summer weekends see the most traffic. Early morning rides
                are particularly rewarding, with empty roads and cooler
                temperatures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Mixed Terrain
              </h3>
              <p className="text-stone-600 mb-4">
                The Vineyard has excellent options for gravel and mixed-surface
                riding. Many of the island&apos;s most scenic routes include
                stretches of packed dirt, sand, or gravel.
              </p>
              <p className="text-stone-600">
                A gravel bike or sturdy road bike with wider tires opens up
                significantly more of the island. 32mm or wider tires are
                recommended if you plan to explore beyond the paved roads.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Bike Paths
              </h3>
              <p className="text-stone-600 mb-4">
                The island has a growing network of dedicated bike paths,
                including the popular path connecting Oak Bluffs to Edgartown.
                These paths are shared with pedestrians and are ideal for
                casual riding and families.
              </p>
              <p className="text-stone-600">
                The State Beach path along the shore is particularly scenic,
                offering views of Nantucket Sound and easy beach access.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">
                Terrain
              </h3>
              <p className="text-stone-600 mb-4">
                The island is hillier than many expect. The up-island towns
                have rolling terrain with some punchy climbs. The down-island
                areas are generally flatter but not entirely so.
              </p>
              <p className="text-stone-600">
                Total elevation gain on a full island loop can be 2,000 feet
                or more, depending on your route. The climbs are short but
                can be steep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trails */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">
            Trails & Off-Road
          </h2>
          <div className="max-w-3xl">
            <p className="text-lg text-stone-600 mb-6">
              While Martha&apos;s Vineyard isn&apos;t known for technical
              mountain biking, there are several land trust properties and
              conservation areas with trails suitable for off-road riding.
            </p>
            <p className="text-lg text-stone-600 mb-6">
              The Manuel F. Correllus State Forest in the center of the island
              has miles of fire roads and doubletrack. It&apos;s flat, sandy in
              places, and a good option for easy off-road riding.
            </p>
            <p className="text-lg text-stone-600 mb-6">
              Several land trust properties have trails open to bikes, though
              rules vary by property. Always check signage and respect any
              restrictions. Walking trails and hiking paths are generally
              not open to bikes.
            </p>
            <p className="text-lg text-stone-600">
              For the most current information on trails open to cycling,
              check with local land trusts or stop by the shop.
            </p>
          </div>
        </div>
      </section>

      {/* Seasonal */}
      <section className="section-padding bg-stone-100">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">
            Seasonal Riding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Spring</h3>
              <p className="text-stone-600">
                The island wakes up in April and May. Roads are quiet, weather
                is variable. Great time for longer rides before the summer
                crowds arrive.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Summer</h3>
              <p className="text-stone-600">
                Peak season. More traffic, but also the best weather. Early
                morning and evening rides are ideal. Ferry lines can be long,
                so plan ahead.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Fall</h3>
              <p className="text-stone-600">
                Many locals&apos; favorite season. Crowds thin out, weather
                stays warm through October, and the light is beautiful.
                Excellent cycling conditions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-stone-900 mb-2">Winter</h3>
              <p className="text-stone-600">
                The island is quiet but not closed. Dedicated year-round
                residents keep riding. Weather can be mild or harsh.
                Fewer services available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">
              Cycling Community
            </h2>
            <p className="text-lg text-stone-600 mb-4">
              The island has an active cycling community, from casual riders
              to serious racers. Group rides happen regularly during the
              season, and you&apos;ll often see familiar faces on the roads.
            </p>
            <p className="text-lg text-stone-600 mb-4">
              Local clubs and informal groups organize rides for various
              abilities. The community is welcoming to visitors and newcomers.
              Stop by the shop to learn about current group rides and meet
              other cyclists.
            </p>
            <p className="text-lg text-stone-600">
              Whether you&apos;re looking for a training partner, want to
              discover new routes, or just want to connect with other riders,
              the Vineyard cycling community is a great resource.
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
                Get Your Bike Ready
              </h2>
              <p className="text-stone-300 mb-6">
                Whether you need a tune-up before your trip or want to buy
                a bike that&apos;s right for island riding, we can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-6 py-3 rounded-md font-semibold hover:bg-stone-100 transition-colors"
                >
                  View Services
                </Link>
                {/* TODO: Replace with actual Google Maps link */}
                <a
                  href="https://maps.google.com/?q=Brickyard+Bicycles+Martha's+Vineyard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-stone-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-stone-800 transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
