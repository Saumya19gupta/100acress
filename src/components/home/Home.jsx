import HeroSection from './HeroSection';
import TrustedPartners from './TrustedPartners';
import ExploreOptions from './ExploreOptions';
// import Footer from '../layout/Footer';

import TrendingProjects from './project/TrendingProjects'

import PropertyCatalog from './properties/PropertyCatalog';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col justify-between overflow-x-hidden">
      {/* 1. Hero Banner + Dynamic 99acres-Style Search (Desktop & Mobile Modal) */}
      <section aria-label="Hero and Property Search" className="w-full">
        <HeroSection />
      </section>

      <section aria-label="ExploreOptions" className="w-full">
        <ExploreOptions />
      </section>

       <section aria-label="Trusted Industry Partners" className="w-full">
        <TrendingProjects />
      </section>

      {/* 2. Red Gradient Infinite Trusted Partners Slider */}
      <section aria-label="TrendingProjects" className="w-full">
        <TrustedPartners />
      </section>

       <section aria-label="PropertyCatalog" className="w-full">
        <PropertyCatalog />
      </section>

      {/* 3. Pure Dark Production-Ready Real Estate Footer */}
      {/* <Footer /> */}
    </div>
  );
}