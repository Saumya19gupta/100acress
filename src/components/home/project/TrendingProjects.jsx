import Link from 'next/link';
import { ArrowRight, Flame } from 'lucide-react';
import ProjectCard from './ProjectCard';
import FeaturedBanner from './FeaturedBanner';
import { trendingProjects } from './projectsData';

export default function TrendingProjects({ title = "Trending Projects in Gurugram" }) {
  return (
    <section className="w-full bg-white py-14 sm:py-18 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-neutral-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#e11924] mb-1.5">
              <Flame className="w-3.5 h-3.5 fill-[#e11924]" />
              <span>High Demand Hub</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              {title}
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#e11924] hover:text-[#b80e18] group transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Master Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Projects Collection (Left Side: 8 or 9 Cols on desktop) */}
          <div className="lg:col-span-8 xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {trendingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Featured Sticky Showcase Billboard (Right Side) */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-6 h-full">
              <FeaturedBanner />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}