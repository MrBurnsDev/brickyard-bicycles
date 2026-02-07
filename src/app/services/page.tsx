import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bicycle Repair & Services",
  description:
    "Professional bicycle repair and service on Martha's Vineyard. Tune-ups, maintenance, wheel building, and complete overhauls for road, gravel, and performance bikes.",
  keywords: [
    "bicycle repair Martha's Vineyard",
    "bike tune-up Martha's Vineyard",
    "bike service Martha's Vineyard",
    "road bike repair",
    "gravel bike service",
  ],
  openGraph: {
    title: "Bicycle Repair & Services | Brickyard Bicycles",
    description:
      "Professional bicycle repair and service on Martha's Vineyard. Tune-ups, maintenance, and complete overhauls.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-stone-900 text-white">
        <div className="container-width px-4 md:px-8 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Services
          </h1>
          <p className="text-xl text-stone-300 max-w-2xl">
            Professional bicycle repair and service on Martha&apos;s Vineyard.
            We keep your bike running at its best.
          </p>
        </div>
      </section>

      {/* Repair Services */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">
            Bicycle Repair
          </h2>
          <div className="prose prose-stone max-w-none">
            <p className="text-lg text-stone-600 mb-6">
              From flat fixes to complete rebuilds, we handle all types of bicycle repair.
              Our workshop is equipped to service everything from daily commuters to
              high-end performance machines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-stone-900 mb-3">
                Drivetrain Service
              </h3>
              <p className="text-stone-600">
                Chain, cassette, and chainring replacement. Derailleur adjustment and
                replacement. Shifter service and cable replacement. We work with all
                groupset levels from Shimano, SRAM, and Campagnolo.
              </p>
            </div>
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-stone-900 mb-3">
                Brake Service
              </h3>
              <p className="text-stone-600">
                Disc brake bleeds, pad replacement, and rotor service. Rim brake
                adjustment and pad replacement. Hydraulic and mechanical brake systems.
              </p>
            </div>
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-stone-900 mb-3">
                Wheel Service
              </h3>
              <p className="text-stone-600">
                Wheel truing, spoke replacement, and hub service. Tubeless setup and
                tire installation. We also build custom wheels.
              </p>
            </div>
            <div className="bg-stone-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-stone-900 mb-3">
                Suspension Service
              </h3>
              <p className="text-stone-600">
                Fork and shock service. Air spring maintenance and damper service.
                We work with Fox, RockShox, and other major suspension brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tune-ups */}
      <section className="section-padding bg-stone-100">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">
            Tune-ups & Maintenance
          </h2>
          <div className="prose prose-stone max-w-none">
            <p className="text-lg text-stone-600 mb-6">
              Regular maintenance keeps your bike safe, reliable, and enjoyable to ride.
              We offer tune-up packages for every level of service, from quick adjustments
              to comprehensive overhauls.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <h3 className="text-lg font-semibold text-stone-900 mb-3">
                Basic Tune-up
              </h3>
              <p className="text-stone-600">
                Safety check, brake and shifting adjustments, tire inflation,
                and lubrication. Good for bikes that see regular use and
                are generally well-maintained.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <h3 className="text-lg font-semibold text-stone-900 mb-3">
                Standard Tune-up
              </h3>
              <p className="text-stone-600">
                Everything in the basic tune-up plus wheel truing, headset
                and bottom bracket check, cable tension adjustment, and
                detailed cleaning. Ideal for seasonal maintenance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-stone-200">
              <h3 className="text-lg font-semibold text-stone-900 mb-3">
                Complete Overhaul
              </h3>
              <p className="text-stone-600">
                Full bike teardown, deep cleaning, bearing service or replacement,
                cable and housing replacement, and complete reassembly.
                Recommended for bikes that haven&apos;t been serviced in a while.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bikes We Service */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">
            Bikes We Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-stone-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">Road Bikes</h3>
                <p className="text-sm text-stone-600">All disciplines: racing, endurance, touring</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-stone-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">Gravel Bikes</h3>
                <p className="text-sm text-stone-600">Adventure and mixed-terrain builds</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-stone-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">Mountain Bikes</h3>
                <p className="text-sm text-stone-600">Hardtails and full-suspension</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-stone-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">Cyclocross</h3>
                <p className="text-sm text-stone-600">Race-ready CX bikes</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-stone-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">Commuter Bikes</h3>
                <p className="text-sm text-stone-600">City and hybrid bikes</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-stone-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-stone-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900">E-Bikes</h3>
                <p className="text-sm text-stone-600">Electric-assist bicycles</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Note */}
      <section className="section-padding bg-stone-100">
        <div className="container-width">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">
              Seasonal Considerations
            </h2>
            <p className="text-lg text-stone-600 mb-4">
              Martha&apos;s Vineyard sees distinct cycling seasons. Spring is
              the busiest time for service as riders prepare for the season ahead.
              Summer brings visitors who need quick repairs and adjustments.
              Fall is ideal for preventive maintenance before storage.
            </p>
            <p className="text-lg text-stone-600">
              If you&apos;re planning a trip to the island and want your bike
              ready to ride, consider having it serviced before you arrive.
              We can also help with bike shipping and assembly if needed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-width">
          <div className="bg-stone-900 text-white rounded-lg p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to ride?
              </h2>
              <p className="text-stone-300 mb-6">
                Stop by the shop or check out what the island has to offer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* TODO: Replace with actual Google Maps link */}
                <a
                  href="https://maps.google.com/?q=Brickyard+Bicycles+Martha's+Vineyard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-6 py-3 rounded-md font-semibold hover:bg-stone-100 transition-colors"
                >
                  Get Directions
                </a>
                <Link
                  href="/cycling-on-marthas-vineyard"
                  className="inline-flex items-center justify-center gap-2 border border-stone-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-stone-800 transition-colors"
                >
                  Explore Cycling on the Vineyard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
