import Link from "next/link";
import BrandMarquee from "@/components/BrandMarquee";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-stone-900 text-white">
        <div className="container-width px-4 md:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Brickyard Bicycles
            </h1>
            <p className="text-xl md:text-2xl text-stone-300 mb-4">
              Independent bike shop on Martha&apos;s Vineyard
            </p>
            <p className="text-lg text-stone-400 mb-10">
              Sales, service, and professional bicycle repairs
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* TODO: Replace with actual Google Maps link */}
              <a
                href="https://maps.google.com/?q=Brickyard+Bicycles+Martha's+Vineyard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-6 py-3 rounded-md font-semibold hover:bg-stone-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                Get Directions
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-stone-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-stone-800 transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sales */}
            <div className="bg-white p-8 rounded-lg border border-stone-200">
              <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-stone-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Bicycle Sales</h3>
              <p className="text-stone-600">
                Road bikes, gravel bikes, and performance machines from trusted brands.
                We help you find the right bike for your riding style.
              </p>
            </div>

            {/* Service */}
            <div className="bg-white p-8 rounded-lg border border-stone-200">
              <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-stone-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Service & Repairs</h3>
              <p className="text-stone-600">
                Professional tune-ups, maintenance, and repairs.
                From basic adjustments to complete overhauls, we keep your bike running smoothly.
              </p>
            </div>

            {/* Gear */}
            <div className="bg-white p-8 rounded-lg border border-stone-200">
              <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-stone-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Accessories & Gear</h3>
              <p className="text-stone-600">
                Helmets, lights, locks, apparel, and everything else you need.
                Quality gear for island riding.
              </p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-stone-700 font-medium hover:text-stone-900 transition-colors"
            >
              Learn more about our services
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-stone-100">
        <div className="container-width">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
            What We Sell
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Road Bikes</h3>
              <p className="text-stone-600">
                Built for speed and efficiency on pavement. From endurance frames to
                race-ready machines, we stock road bikes for every type of rider.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Gravel Bikes</h3>
              <p className="text-stone-600">
                Versatile bikes that handle mixed terrain with confidence.
                Perfect for exploring the variety of surfaces Martha&apos;s Vineyard offers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Performance Bikes</h3>
              <p className="text-stone-600">
                High-end components, lightweight frames, and precision engineering
                for serious cyclists who demand the best.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Accessories</h3>
              <p className="text-stone-600">
                Helmets, shoes, pedals, saddles, lights, tools, and more.
                Everything you need to ride safely and comfortably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <BrandMarquee />

      {/* Cycling on MV Teaser */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
              Cycling on Martha&apos;s Vineyard
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Martha&apos;s Vineyard offers some of the best cycling in New England.
              With quiet roads, scenic routes, and a mix of terrain from smooth pavement
              to challenging gravel, the island is a destination for cyclists of all levels.
              Whether you&apos;re here for a day or the whole season, we can help you
              make the most of your time on two wheels.
            </p>
            <Link
              href="/cycling-on-marthas-vineyard"
              className="inline-flex items-center text-stone-700 font-medium hover:text-stone-900 transition-colors"
            >
              Explore cycling on the Vineyard
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section-padding bg-stone-100">
        <div className="container-width">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Follow Along</h2>
            <div className="flex justify-center gap-6">
              {/* TODO: Replace with actual Instagram URL */}
              <a
                href="https://instagram.com/brickyardbicycles"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
                <span className="font-medium">Instagram</span>
              </a>
              {/* TODO: Replace with actual Facebook URL */}
              <a
                href="https://facebook.com/brickyardbicycles"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span className="font-medium">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
