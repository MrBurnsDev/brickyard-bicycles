import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Repairs",
    description: "From flat tires to complete rebuilds. Decades of hands-on experience behind every fix.",
  },
  {
    title: "Tune-Ups",
    description: "Keep your bike running right with proper maintenance and pre-ride safety checks.",
  },
  {
    title: "Mobile Service",
    description: "Can't come to us? We'll come to you. On-site repairs across the Island.",
  },
  {
    title: "All Bikes Welcome",
    description: "We service what you ride—no matter where you bought it.",
  },
];

const bikeTypes = [
  { name: "Road", href: "/bikes/road" },
  { name: "Gravel", href: "/bikes/gravel" },
  { name: "Mountain", href: "/bikes/mountain" },
  { name: "Hybrid", href: "/bikes/hybrid" },
  { name: "Kids", href: "/bikes/kids" },
  { name: "Accessories", href: "/bikes/accessories" },
];

const brands = ["Specialized", "Trek", "Cannondale", "Santa Cruz", "Salsa", "All-City"];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-cycling.jpg"
            alt="Cycling on Martha's Vineyard"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="container-site relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-primary-foreground mb-6">
              Brickyard
              <br />
              Bicycles
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-xl leading-relaxed">
              Service-driven bike shop on Martha&apos;s Vineyard
            </p>
            <p className="text-lg text-primary-foreground/70 mb-10 max-w-lg leading-relaxed">
              Professional bicycle repair and maintenance backed by decades of mechanical experience.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              {/* TODO: Replace with actual Google Maps link */}
              <a
                href="https://maps.google.com/?q=Brickyard+Bicycles+Martha's+Vineyard"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-hero"
              >
                Get Directions
              </a>
              <Link
                href="/services"
                className="btn btn-link text-lg text-primary-foreground"
              >
                View Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-spacing bg-background">
        <div className="container-site">
          <div className="mb-12 md:mb-16">
            <div className="divider-rule-accent mb-6" />
            <h2>What We Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {services.map((service) => (
              <article key={service.title} className="space-y-3">
                <h3 className="text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/services" className="btn btn-outline">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Bike Types */}
      <section className="py-16 md:py-20 bg-card border-y border-border">
        <div className="container-site">
          <h3 className="text-muted-foreground mb-8">Bike Types</h3>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {bikeTypes.map((type) => (
              <Link
                key={type.name}
                href={type.href}
                className="font-[var(--font-display)] text-2xl md:text-3xl uppercase tracking-tight text-foreground hover:text-accent transition-colors"
              >
                {type.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container-site">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-12">
            {brands.map((brand) => (
              <span
                key={brand}
                className="font-[var(--font-display)] text-lg md:text-xl uppercase tracking-widest text-primary-foreground/60"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Local Riding Teaser */}
      <section className="section-spacing bg-background">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <div className="divider-rule-accent" />
              <h2>Cycling on the Vineyard</h2>
              <p className="editorial-text max-w-lg">
                Endless trails, quiet back roads, and scenic routes in every direction.
                There&apos;s a reason this Island draws cyclists from everywhere—and
                there&apos;s no bad ride to be found.
              </p>
              <Link href="/cycling-on-marthas-vineyard" className="btn btn-outline">
                Explore Routes
              </Link>
            </div>
            <div className="aspect-square bg-card overflow-hidden">
              <Image
                src="/images/workshop.jpg"
                alt="Inside the Brickyard workshop"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
