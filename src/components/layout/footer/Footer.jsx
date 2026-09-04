import FooterTopCTA from './FooterTopCTA';
import FooterStats from './FooterStats';
import FooterMainGrid from './FooterMainGrid';
import FooterSeoLinks from './FooterSeoLinks';
import FooterBottomBar from './FooterBottomBar';

export default function Footer() {
  return (
    <footer className="w-full bg-[#000000] text-white border-t border-[#27272A]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <FooterTopCTA />
        <FooterStats />
        <FooterMainGrid />
        <FooterSeoLinks />
        <FooterBottomBar />
      </div>
    </footer>
  );
}