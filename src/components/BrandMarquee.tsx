// Brand logos for the marquee section
// TODO: Replace placeholder links with actual brand URLs and add logo images to /public/brands/

const brands = [
  { name: "Specialized", url: "https://www.specialized.com", logo: "/brands/specialized.svg" },
  { name: "Trek", url: "https://www.trekbikes.com", logo: "/brands/trek.svg" },
  { name: "Cannondale", url: "https://www.cannondale.com", logo: "/brands/cannondale.svg" },
  { name: "Giant", url: "https://www.giant-bicycles.com", logo: "/brands/giant.svg" },
  { name: "Santa Cruz", url: "https://www.santacruzbicycles.com", logo: "/brands/santa-cruz.svg" },
  { name: "Cervélo", url: "https://www.cervelo.com", logo: "/brands/cervelo.svg" },
];

export default function BrandMarquee() {
  return (
    <section className="section-padding bg-white border-y border-stone-200">
      <div className="container-width">
        <h2 className="text-center text-sm font-semibold text-stone-500 uppercase tracking-wider mb-8">
          Brands We Carry
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-stone-600 transition-colors"
              aria-label={`Visit ${brand.name} website`}
            >
              {/* TODO: Replace with actual logo images once available */}
              {/* <Image src={brand.logo} alt={brand.name} width={120} height={40} className="opacity-60 hover:opacity-100 transition-opacity" /> */}
              <span className="text-lg font-medium">{brand.name}</span>
            </a>
          ))}
        </div>
        <p className="text-center text-sm text-stone-500 mt-8">
          Plus many more quality cycling brands
        </p>
      </div>
    </section>
  );
}
