import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional bicycle repair and service on Martha's Vineyard. Expert tune-ups, maintenance, and repairs—we service all bikes, no matter where you bought them.",
  openGraph: {
    title: "Services | Brickyard Bicycles",
    description:
      "Professional bicycle repair and service on Martha's Vineyard. Decades of mechanical experience behind every repair.",
  },
};

const serviceCategories = [
  {
    title: "Repairs",
    description:
      "We fix what's broken and catch what's about to break. With decades of hands-on mechanical experience, we handle everything from simple fixes to complex rebuilds. Your bike is in good hands.",
    items: [
      "Flat tire repair & tube replacement",
      "Brake adjustment & pad replacement",
      "Derailleur tuning & cable replacement",
      "Wheel truing & spoke replacement",
      "Bottom bracket & headset service",
      "Full drivetrain overhaul",
    ],
  },
  {
    title: "Tune-Ups",
    description:
      "Regular maintenance keeps your bike safe and performing its best. We offer service packages matched to how you ride—from quick safety checks to complete teardowns.",
    items: [
      "Safety check — brakes, tires, quick releases",
      "Basic tune — plus shifting adjustment",
      "Standard tune — plus chain, cables, contact points",
      "Complete overhaul — full teardown and rebuild",
    ],
  },
  {
    title: "Mobile Service",
    description:
      "Can't make it to the shop? We bring the tools to you. Our mobile service covers the Island, so you can get professional repairs wherever you are.",
    items: [
      "On-site repairs at your location",
      "Fleet and rental maintenance",
      "Event support",
      "Seasonal tune-ups at home",
    ],
  },
  {
    title: "All Bikes Welcome",
    description:
      "We service what you ride. It doesn't matter where you bought your bike—online, off-Island, or from a friend. If it has two wheels and pedals, we'll keep it running right.",
    items: [
      "Road bikes",
      "Gravel & adventure bikes",
      "Mountain bikes",
      "Hybrid & commuter bikes",
      "Kids' bikes",
      "E-bikes",
    ],
  },
  {
    title: "Custom & High-End Bicycles",
    description:
      "For riders looking for something more tailored, we offer guidance on custom and performance-focused builds. The same service-first approach applies here—helping you find the right bike, set up properly, and supported for the long run.",
    items: [
      "Custom bike consultation and build guidance",
      "Fit-focused setup and component selection",
      "Performance road and gravel builds",
      "Long-term service and support after the sale",
    ],
  },
  {
    title: "Accessories & Gear",
    description:
      "We carry the gear you need to ride safely and comfortably. Helmets, lights, locks, and more—all products we trust and use ourselves.",
    items: [
      "Helmets",
      "Lights & reflectors",
      "Locks",
      "Bags & racks",
      "Clothing & gloves",
      "Tools & pumps",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-site">
          <h1 className="text-primary-foreground">Services</h1>
          <p className="text-xl text-primary-foreground/80 mt-4 max-w-xl">
            Service is what we do best. Decades of mechanical experience, applied to keeping your bike on the road.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing bg-background">
        <div className="container-site">
          <div className="space-y-20 md:space-y-28">
            {serviceCategories.map((category, index) => (
              <article
                key={category.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
              >
                {/* Title & Description */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-[var(--font-display)] text-sm text-muted-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-3xl md:text-4xl">{category.title}</h2>
                  </div>
                  <p className="editorial-text">{category.description}</p>
                </div>

                {/* Items List */}
                <div className="lg:col-span-7">
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="text-lg text-foreground border-b border-border pb-3"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-16 md:py-20 bg-card border-t border-border">
        <div className="container-site">
          <div className="reading-width mx-auto text-center space-y-4">
            <h3>Questions?</h3>
            <p className="editorial-text">
              Stop by the shop or reach out. We&apos;re happy to talk through what your bike needs—no pressure, just honest advice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
