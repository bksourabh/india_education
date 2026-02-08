import HeroSection from '../components/home/HeroSection';
import SectionCard from '../components/home/SectionCard';
import Features from '../components/home/Features';
import { sections } from '../data';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {sections.map((section, index) => (
          <SectionCard key={section.id} section={section} index={index} />
        ))}
      </section>
      <Features />
    </div>
  );
}
