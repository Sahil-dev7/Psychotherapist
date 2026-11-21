import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ImpactStats } from './components/sections/ImpactStats';
import { SpecializationSection } from './components/sections/SpecializationSection';
import { TherapyProcess } from './components/sections/TherapyProcess';
import { EmotionalCheckIn } from './components/sections/EmotionalCheckIn';
import { FAQSection } from './components/sections/FAQSection';
import { ClinicGallery } from './components/sections/ClinicGallery';
import { AppointmentBooking } from './components/sections/AppointmentBooking';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { Footer } from './components/layout/Footer';

export default function App() {
  const [selectedFeeling, setSelectedFeeling] = useState<string | undefined>();

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFeelingSelected = (feeling: string) => {
    setSelectedFeeling(feeling);
    scrollToAppointment();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 antialiased font-sans selection:bg-rose-200 selection:text-stone-900">
      {/* 1. NAVBAR */}
      <Navbar onOpenBooking={scrollToAppointment} />

      {/* MAIN SECTIONS IN STRICT REFERENCE ORDER */}
      <main className="flex-1">
        {/* 2. HERO */}
        <HeroSection onOpenBooking={scrollToAppointment} />

        {/* 3. ABOUT / PROFESSIONAL PSYCHOLOGICAL THERAPY */}
        <AboutSection />

        {/* 4. GREEN THERAPEUTIC SUPPORT SECTION */}
        <ImpactStats />

        {/* 5. THREE MAJOR AREAS */}
        <SpecializationSection onOpenBooking={scrollToAppointment} />

        {/* 6. THERAPY PROCESS */}
        <TherapyProcess />

        {/* 7. FEELING TODAY */}
        <EmotionalCheckIn onProceedToBooking={handleFeelingSelected} />

        {/* 8. FAQ */}
        <FAQSection />

        {/* 9. GALLERY */}
        <ClinicGallery />

        {/* 10. APPOINTMENT */}
        <AppointmentBooking initialFeeling={selectedFeeling} />

        {/* 11. TESTIMONIALS / DOCTORS SAY ABOUT ME */}
        <TestimonialsSection />
      </main>

      {/* 12. CONTACT / FOOTER */}
      <Footer />
    </div>
  );
}
