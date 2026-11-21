import React, { useState, useEffect, useRef } from 'react';
import { ASSETS } from '../../constants/assets';
import { ArrowRight } from 'lucide-react';

interface SpecializationSectionProps {
  onOpenBooking?: () => void;
}

export const SpecializationSection: React.FC<SpecializationSectionProps> = ({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  // Viewport detection (20-30% threshold, triggers once)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasEntered) {
          setHasEntered(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasEntered]);

  return (
    <section
      ref={sectionRef}
      id="areas"
      className="py-20 lg:py-28 bg-[#FAF8F5] text-stone-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================== */}
        {/* TOP HEADER BLOCK                                            */}
        {/* ========================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div
            className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '0ms' }}
          >
            {/* Small label with overlapping circles emblem matching reference */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="relative flex items-center">
                <span className="w-3.5 h-3.5 rounded-full bg-[#E11D48] inline-block shadow-xs" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#F472B6]/70 inline-block -ml-1.5" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#D83280]">
                SPECIALIZATION
              </span>
            </div>

            {/* Large editorial heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif-heading text-[#122A1E] leading-tight tracking-tight">
              Three Major areas I work on
            </h2>
          </div>

          {/* Upper-right rounded coral/orange button: View All Case Study → */}
          <div
            className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#EB5742] hover:bg-[#D64733] shadow-md shadow-orange-900/15 active:scale-95 transition-all duration-200"
            >
              <span>View All Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================== */}
        {/* THREE LARGE VERTICAL CARDS                                 */}
        {/* ========================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* -------------------------------------------------------- */}
          {/* 1. LEFT CARD — TRAUMA (Dark Forest Green)                */}
          {/* -------------------------------------------------------- */}
          <div
            className={`group flex flex-col justify-between rounded-[2rem] bg-[#11271D] p-6 sm:p-7 shadow-xl hover:shadow-2xl border border-emerald-950/60 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.015] ${
              hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div>
              {/* Top Image Container */}
              <div className="relative h-56 sm:h-60 w-full rounded-2xl overflow-hidden bg-[#0A1811] shadow-inner">
                <img
                  src={ASSETS.CLINIC_02}
                  alt="Trauma Therapy"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== ASSETS.CLINIC_02_FALLBACK) {
                      target.src = ASSETS.CLINIC_02_FALLBACK;
                    }
                  }}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading text-white mt-6 mb-3">
                Trauma
              </h3>

              {/* Thin Divider Line */}
              <div className="w-full h-px bg-emerald-900/60 my-3" />

              {/* Existing Trauma Description */}
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed mb-6">
                Trauma is a deeply distressing experience that impacts emotional and physical health. Symptoms include anxiety, hypervigilance, avoidance, flashbacks, and physical issues like headaches or stomach pain.
              </p>
            </div>

            {/* Bottom Link: Learn more → */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D4F769] hover:text-[#E2FFA1] transition group/btn"
              >
                <span>Learn more</span>
                <span className="w-6 h-6 rounded-full bg-[#D4F769]/20 flex items-center justify-center text-[#D4F769] group-hover/btn:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* 2. CENTER CARD — GRIEF (Bright Lime / Highlighted Card)   */}
          {/* -------------------------------------------------------- */}
          <div
            className={`group flex flex-col justify-between rounded-[2rem] bg-[#D8F96C] p-6 sm:p-7 shadow-xl hover:shadow-2xl ring-1 ring-lime-400/40 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] ${
              hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div>
              {/* Top Heading: Grief */}
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading text-[#12281D] mb-3">
                Grief
              </h3>

              {/* Thin Divider Line */}
              <div className="w-full h-px bg-[#12281D]/15 my-3" />

              {/* Existing Grief Description */}
              <p className="text-xs sm:text-sm text-[#1B3626] font-light leading-relaxed mb-5">
                Grief is a personal emotional reaction to loss. It may cause sadness, sleep disturbance, fatigue, disorientation, and social withdrawal. Its intensity and duration vary widely from person to person.
              </p>

              {/* Learn more → link above bottom image */}
              <div className="mb-6">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#12281D] hover:text-black transition group/btn"
                >
                  <span>Learn more</span>
                  <span className="w-6 h-6 rounded-full bg-[#BFE944] flex items-center justify-center text-[#12281D] group-hover/btn:translate-x-1 transition-transform shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </div>

            {/* Bottom Image Container */}
            <div className="relative h-56 sm:h-60 w-full rounded-2xl overflow-hidden bg-[#CEEF5A] shadow-inner mt-auto">
              <img
                src={ASSETS.CLINIC_03}
                alt="Grief Counseling"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== ASSETS.CLINIC_01) {
                    target.src = ASSETS.CLINIC_01;
                  }
                }}
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* 3. RIGHT CARD — PTSD (Dark Forest Green)                 */}
          {/* -------------------------------------------------------- */}
          <div
            className={`group flex flex-col justify-between rounded-[2rem] bg-[#11271D] p-6 sm:p-7 shadow-xl hover:shadow-2xl border border-emerald-950/60 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.015] ${
              hasEntered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <div>
              {/* Top Image Container */}
              <div className="relative h-56 sm:h-60 w-full rounded-2xl overflow-hidden bg-[#0A1811] shadow-inner">
                <img
                  src={ASSETS.CLINIC_01}
                  alt="PTSD Intervention"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== ASSETS.CLINIC_01_FALLBACK) {
                      target.src = ASSETS.CLINIC_01_FALLBACK;
                    }
                  }}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-heading text-white mt-6 mb-3">
                PTSD
              </h3>

              {/* Thin Divider Line */}
              <div className="w-full h-px bg-emerald-900/60 my-3" />

              {/* Existing PTSD Description */}
              <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed mb-6">
                PTSD develops after trauma, affecting daily life with flashbacks, nightmares, avoidance, negative thoughts, and hyperarousal. It often requires comprehensive therapy to manage emotional and behavioral disruptions.
              </p>
            </div>

            {/* Bottom Link: Learn more → */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#D4F769] hover:text-[#E2FFA1] transition group/btn"
              >
                <span>Learn more</span>
                <span className="w-6 h-6 rounded-full bg-[#D4F769]/20 flex items-center justify-center text-[#D4F769] group-hover/btn:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
