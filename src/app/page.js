import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import MissionVision from '@/components/sections/MissionVision';
import FocusAreasSection from '@/components/sections/FocusAreasSection';
import InitiativesSection from '@/components/sections/InitiativesSection';
import ImpactSection from '@/components/sections/ImpactSection';
import EventsSection from '@/components/sections/EventsSection';

export const metadata = {
  title: 'Home | Bluebell Foundation',
  description: 'Making a difference, one life at a time. Join us in our mission to create positive change.',
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MissionVision />
      <FocusAreasSection />
      <InitiativesSection />
      <ImpactSection />
      <EventsSection />
    </main>
  );
}
