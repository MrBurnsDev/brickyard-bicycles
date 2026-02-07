import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cycling on Martha's Vineyard",
  description:
    "Cycling on Martha's Vineyard offers a wide range of riding experiences—from separated bike paths to quiet scenic roads. Ocean air, old farm lanes, and terrain that rewards slowing down.",
  openGraph: {
    title: "Cycling on Martha's Vineyard | Brickyard Bicycles",
    description:
      "There are few places where cycling feels as connected to the landscape as it does on Martha's Vineyard.",
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
                There are few places in the country where cycling feels as connected to the landscape as it does on Martha&apos;s Vineyard. Ocean air, quiet stretches of road, old farm lanes, and a pace of life that rewards slowing down and paying attention.
              </p>
              <p className="editorial-text">
                The Island offers a wide range of riding experiences—from separated bike paths down-Island to narrow, scenic roads up-Island where awareness and timing matter just as much as fitness.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Section: The Roads */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">The Roads</h2>
              <p className="editorial-text">
                Down-Island, many main routes are supported by bike paths or wider shoulders, and cycling is part of everyday transportation. These corridors make it easy to move between towns and are often the most comfortable option for casual riders and families.
              </p>
              <p className="editorial-text">
                Up-Island riding is different. Roads through West Tisbury, Chilmark, Aquinnah, and Menemsha are beautiful and quiet, but they are also narrow, with limited shoulders and fewer dedicated bike lanes. Traffic is generally light, especially early in the day, but riders should be attentive and comfortable sharing the road.
              </p>
              <p className="editorial-text">
                The terrain is rolling and varied—never flat, often rewarding—with long views across fields, stone walls, and the ocean. It&apos;s some of the most memorable riding on the Island, best enjoyed at a thoughtful pace.
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
                Cycling on the Vineyard isn&apos;t limited to paved roads. Old dirt roads, sandy stretches, and conservation trails open up even more of the Island for riders who are properly equipped.
              </p>
              <p className="editorial-text">
                Gravel and mountain bikes are especially well suited here, offering access to quieter routes and mixed terrain that many visitors never see. Conditions can change quickly, with sand and loose gravel appearing without warning, so tire choice and setup matter.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Section: Routes to Know */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Routes to Know</h2>
              <p className="editorial-text">
                <strong className="text-foreground">State Road Loop</strong> — A classic Island circuit touching multiple towns. Rolling terrain, a few sustained climbs, and plenty of opportunities to stop and explore.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Beach Road to Edgartown</strong> — A flatter, more direct ride with a separated bike path for much of the way. A popular and accessible route connecting Vineyard Haven, Oak Bluffs, and Edgartown along the water.
              </p>
              <p className="editorial-text">
                <strong className="text-foreground">Up-Island to Aquinnah</strong> — A scenic westbound ride with hills, open views, and long quiet stretches. Best ridden early in the day. The climb to the cliffs is demanding and well worth it.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Section: A Culture of Cycling */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">A Culture of Cycling</h2>
              <p className="editorial-text">
                Cycling is deeply woven into life on Martha&apos;s Vineyard. The Island&apos;s size makes it possible to get almost anywhere by bike, and there is an ongoing effort to improve safety and access while preserving the character that makes the Vineyard unique.
              </p>
              <p className="editorial-text">
                Local riders understand that conditions vary by town, road, and season. Riding here rewards awareness, patience, and respect for the shared space.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Section: A Few Local Tips */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">A Few Local Tips</h2>
              <ul className="space-y-3">
                <li className="editorial-text">
                  <strong className="text-foreground">Start early.</strong> Roads are quieter and cooler before 9am, especially in summer.
                </li>
                <li className="editorial-text">
                  <strong className="text-foreground">Plan water stops.</strong> Refilling up-Island can be limited.
                </li>
                <li className="editorial-text">
                  <strong className="text-foreground">Ride the conditions.</strong> Narrow roads and limited shoulders mean staying alert matters.
                </li>
                <li className="editorial-text">
                  <strong className="text-foreground">Watch the surface.</strong> Sand and gravel appear quickly, even on paved roads.
                </li>
                <li className="editorial-text">
                  <strong className="text-foreground">Get your bike dialed.</strong> Proper setup and maintenance make a real difference on Vineyard roads.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
