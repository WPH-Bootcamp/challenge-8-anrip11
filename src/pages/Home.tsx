import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { HeroSection } from '../components/sections/HeroSection';
import { CompanyLogosSection } from '../components/sections/CompanyLogosSection';
import { AboutSection } from '../components/sections/AboutSection';
import { OurProcessSection } from '../components/sections/OurProcessSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { BuiltIndustrySection } from '../components/sections/BuiltIndustrySection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { FaqSection } from '../components/sections/FaqSection';
import { ContactSection } from '../components/sections/ContactSection';
import { Footer } from '../components/layout/Footer';

export const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />
        <CompanyLogosSection />
        <AboutSection />
        <OurProcessSection />
        <ServicesSection />
        <BuiltIndustrySection />
        <ProjectsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
