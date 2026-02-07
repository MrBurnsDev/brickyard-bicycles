import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trails & Conservation on Martha's Vineyard",
  description:
    "Learn about the conservation organizations that steward trails and protected land on Martha's Vineyard, and how to explore responsibly.",
  openGraph: {
    title: "Trails & Conservation on Martha's Vineyard | Brickyard Bicycles",
    description:
      "Much of the Island's trail network exists because of long-term conservation efforts. Understand where trails come from and how to use them responsibly.",
  },
};

const organizations = [
  {
    name: "Sheriff's Meadow Foundation",
    url: "https://sheriffsmeadow.org",
    description:
      "Sheriff's Meadow Foundation is one of the Island's primary land conservation organizations, protecting thousands of acres across Martha's Vineyard. The foundation stewards a wide range of properties, with public access where appropriate and compatible with conservation goals.",
    note: "Sheriff's Meadow also created the TrailsMV app, a map-based tool that helps locate trails across Martha's Vineyard. It's a useful resource for understanding where trails exist, though access rules vary by property.",
    appUrl: "https://sheriffsmeadow.org/trailsmv-app/",
  },
  {
    name: "Martha's Vineyard Land Bank",
    url: "https://www.mvlandbank.com/",
    description:
      "The Martha's Vineyard Land Bank maintains an extensive network of protected lands and trails across the Island. Properties range from coastal preserves to wooded inland parcels, with access rules that vary by location. Many Land Bank properties offer trail connections between towns.",
  },
  {
    name: "The Trustees of Reservations",
    url: "https://thetrustees.org/",
    description:
      "The Trustees of Reservations is a statewide conservation organization that stewards several properties on Martha's Vineyard. Their work balances public access with long-term preservation goals, protecting landscapes that are significant both ecologically and historically.",
  },
  {
    name: "Vineyard Conservation Society",
    url: "https://vineyardconservation.org",
    description:
      "The Vineyard Conservation Society is an Island-based organization focused on conservation advocacy and education. They play a broad role in land protection efforts across Martha's Vineyard, working to preserve the Island's natural character for future generations.",
  },
  {
    name: "Mass Audubon – Felix Neck Wildlife Sanctuary",
    url: "https://www.massaudubon.org/places-to-explore/wildlife-sanctuaries/felix-neck",
    description:
      "Felix Neck Wildlife Sanctuary, managed by Mass Audubon, is dedicated to wildlife conservation and habitat protection. Public access centers on education and observation, with trail use policies designed to protect sensitive habitats. Visitors should check posted rules before exploring.",
  },
];

export default function TrailsConservationPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-site">
          <h1 className="text-primary-foreground">
            Trails &amp;
            <br />
            Conservation
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-spacing bg-background">
        <div className="container-site">
          <article className="reading-width space-y-12">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl leading-relaxed text-foreground">
                Much of the trail network on Martha&apos;s Vineyard exists because of decades of conservation work. The paths, preserves, and protected lands that make the Island so appealing to explore are the result of ongoing stewardship by organizations committed to balancing public access with habitat protection.
              </p>
              <p className="editorial-text">
                Trails here are shared spaces. Rules and access vary depending on the landowner, the sensitivity of the habitat, and the purpose of the property. Understanding this context helps riders make informed choices about where and how to explore.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Conservation Organizations */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl">Conservation Organizations on Martha&apos;s Vineyard</h2>
              <p className="editorial-text">
                The following organizations play key roles in land conservation and trail stewardship across the Island. Each operates independently, with its own properties, priorities, and access policies.
              </p>
            </div>

            <div className="space-y-12">
              {organizations.map((org) => (
                <div key={org.name} className="space-y-3">
                  <h3 className="text-xl md:text-2xl">
                    <a
                      href={org.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent transition-colors"
                    >
                      {org.name}
                    </a>
                  </h3>
                  <p className="editorial-text">{org.description}</p>
                  {org.note && (
                    <p className="editorial-text">
                      {org.note}{" "}
                      <a
                        href={org.appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Learn more about TrailsMV
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>

            <hr className="divider-rule" />

            {/* Trail Access & Use */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Trail Access &amp; Use</h2>
              <p className="editorial-text">
                Not all trails on Martha&apos;s Vineyard are designed for bicycles. Access varies by landowner, habitat sensitivity, and trail design. Some conserved lands prioritize wildlife protection and foot traffic, while others accommodate a wider range of uses.
              </p>
              <p className="editorial-text">
                Conditions and permissions can also change seasonally—what&apos;s open in summer may be closed during nesting season, and wet conditions can temporarily restrict access to protect trail surfaces. When in doubt, check with the managing organization or look for posted signage at trailheads.
              </p>
            </div>

            <hr className="divider-rule" />

            {/* Riding Responsibly */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl">Riding Responsibly on Conserved Land</h2>
              <p className="editorial-text">
                When exploring trails on conserved land, a few simple practices help protect the places we ride and maintain access for everyone.
              </p>
              <ul className="space-y-3">
                <li className="editorial-text">
                  <strong className="text-foreground">Follow posted signage and rules.</strong> Access policies exist for good reasons—respect them.
                </li>
                <li className="editorial-text">
                  <strong className="text-foreground">Yield to pedestrians and horses.</strong> Trails are shared spaces.
                </li>
                <li className="editorial-text">
                  <strong className="text-foreground">Avoid riding on muddy or soft trails.</strong> Wet conditions cause erosion and lasting damage.
                </li>
                <li className="editorial-text">
                  <strong className="text-foreground">Stay on established paths.</strong> Cutting new lines harms vegetation and habitat.
                </li>
                <li className="editorial-text">
                  <strong className="text-foreground">Choose routes appropriate for bicycles.</strong> Not every trail is meant for wheels.
                </li>
              </ul>
            </div>

            <hr className="divider-rule" />

            {/* Closing */}
            <div className="space-y-4 pt-4">
              <p className="text-xl leading-relaxed text-muted-foreground">
                The trails on Martha&apos;s Vineyard are here because people and organizations have worked to protect them. Riding with awareness and respect ensures they remain accessible for years to come.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
