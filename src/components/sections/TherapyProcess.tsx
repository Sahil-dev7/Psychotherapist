import React, { useState, useEffect, useRef } from 'react';
import { MessagesSquare, FileSearch, Sparkles, HeartHandshake } from 'lucide-react';

export const TherapyProcess: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  
  // Progression steps state:
  // 0: Initial
  // 1: Step 01 active (0–700ms)
  // 2: Line 1 progressing (700–1200ms)
  // 3: Step 02 active (1200–1900ms)
  // 4: Line 2 progressing (1900–2400ms)
  // 5: Step 03 active (2400–3100ms)
  // 6: Line 3 progressing (3100–3600ms)
  // 7: Step 04 active (3600–4300ms)
  const [phase, setPhase] = useState(0);

  // Viewport trigger (20–30% threshold, triggers once)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationStarted) {
          setAnimationStarted(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animationStarted]);

  // Sequential progression timer matching specifications
  useEffect(() => {
    if (!animationStarted) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setPhase(7);
      return;
    }

    const t1 = setTimeout(() => setPhase(1), 100);
    const t2 = setTimeout(() => setPhase(2), 700);
    const t3 = setTimeout(() => setPhase(3), 1200);
    const t4 = setTimeout(() => setPhase(4), 1900);
    const t5 = setTimeout(() => setPhase(5), 2400);
    const t6 = setTimeout(() => setPhase(6), 3100);
    const t7 = setTimeout(() => setPhase(7), 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
      clearTimeout(t7);
    };
  }, [animationStarted]);

  // Percentage of progress line based on phase
  const getLineProgress = () => {
    if (phase >= 7) return 100;
    if (phase === 6) return 90;
    if (phase === 5) return 66.6;
    if (phase === 4) return 55;
    if (phase === 3) return 33.3;
    if (phase === 2) return 20;
    return 0;
  };

  const steps = [
    {
      id: 'step-01',
      num: '01',
      title: 'Initial Consultation\n& History Taking',
      description:
        'We take time to understand your concerns, background and personal history in a safe and supportive space.',
      side: 'left',
      accentColor: '#EB5742', // Coral/orange
      badgeColor: 'text-[#EB5742]',
      dotBg: 'bg-[#EB5742]',
      dotRing: 'ring-4 ring-rose-200/60',
      iconBg: 'bg-[#EB5742]',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 9h.01" />
          <path d="M12 9h.01" />
          <path d="M16 9h.01" />
        </svg>
      ),
      revealPhase: 1,
    },
    {
      id: 'step-02',
      num: '02',
      title: 'Understanding Your\nConcerns & Assessment',
      description:
        'We explore your concerns in detail and assess your unique needs to create a clear path forward.',
      side: 'right',
      accentColor: '#284433', // Dark forest green
      badgeColor: 'text-[#1C3325]',
      dotBg: 'bg-[#1C3325]',
      dotRing: 'ring-4 ring-emerald-200/60',
      iconBg: 'bg-[#3E5C48]',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <circle cx="11" cy="14" r="3" />
          <line x1="13.5" y1="16.5" x2="16" y2="19" />
        </svg>
      ),
      revealPhase: 3,
    },
    {
      id: 'step-03',
      num: '03',
      title: 'Personalized Therapy\n& Treatment Approach',
      description:
        'We create a tailored therapy plan using evidence-based approaches to help you achieve meaningful change.',
      side: 'left',
      accentColor: '#EB5742',
      badgeColor: 'text-[#EB5742]',
      dotBg: 'bg-[#EB5742]',
      dotRing: 'ring-4 ring-rose-200/60',
      iconBg: 'bg-[#EB5742]',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
          <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
          <path d="M12 8v4" />
          <path d="M10 10l4-2" />
          <path d="M10 14h4" />
        </svg>
      ),
      revealPhase: 5,
    },
    {
      id: 'step-04',
      num: '04',
      title: 'Ongoing Support',
      description:
        'We continue to support you with regular sessions, guidance and tools to help you maintain progress beyond therapy.',
      side: 'right',
      accentColor: '#284433',
      badgeColor: 'text-[#1C3325]',
      dotBg: 'bg-[#1C3325]',
      dotRing: 'ring-4 ring-emerald-200/60',
      iconBg: 'bg-[#284433]',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          <path d="M2 13h4" />
          <path d="M18 13h4" />
        </svg>
      ),
      revealPhase: 7,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-16 sm:py-24 lg:py-28 bg-[#09100C] text-stone-900 relative overflow-hidden"
    >
      {/* Outer subtle dark ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-950/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-stone-900/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================== */}
        {/* LARGE CENTERED ROUNDED CREAM CONTAINER MATCHING REFERENCE   */}
        {/* ========================================================== */}
        <div className="rounded-[2.5rem] sm:rounded-[3.5rem] bg-[#F8F6F1] border border-stone-200/70 p-6 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Header Block inside Container matching reference */}
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            {/* HOW IT WORKS Label */}
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#059669] mb-3 block">
              HOW IT WORKS
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif-heading text-[#111827] leading-[1.12] mb-4">
              Guiding You Our Therapy Process
            </h2>

            {/* Supporting sentence */}
            <p className="text-xs sm:text-sm md:text-base text-stone-600 font-light leading-relaxed">
              A simple and compassionate process designed to understand your needs and support you at every step of your journey.
            </p>
          </div>

          {/* ========================================================== */}
          {/* VERTICAL ALTERNATING TIMELINE (DESKTOP: CENTER LINE)        */}
          {/* ========================================================== */}
          <div className="relative">
            
            {/* Desktop Central Vertical Timeline Track */}
            <div className="hidden lg:block absolute left-1/2 top-12 bottom-12 -translate-x-1/2 w-0.5 z-0">
              {/* Subtle background dashed track */}
              <div className="w-full h-full border-l-2 border-dashed border-stone-300" />
              {/* Progressive active line bar growing downward */}
              <div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#EB5742] via-[#284433] to-[#EB5742] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  height: `${getLineProgress()}%`,
                }}
              />
            </div>

            {/* Step Rows */}
            <div className="space-y-12 sm:space-y-16 lg:space-y-20 relative z-10">
              {steps.map((step) => {
                const isRevealed = phase >= step.revealPhase;
                const isLeft = step.side === 'left';

                return (
                  <div key={step.id} className="relative">
                    {/* -------------------------------------------------- */}
                    {/* DESKTOP ALTERNATING ROW                           */}
                    {/* -------------------------------------------------- */}
                    <div className="hidden lg:grid grid-cols-12 items-center gap-4">
                      
                      {/* Left Side Slot */}
                      <div className="col-span-5 flex justify-end">
                        {isLeft ? (
                          /* LEFT CARD (Step 01 / Step 03) */
                          <div
                            className={`w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-lg hover:-translate-y-1 ${
                              isRevealed
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 -translate-x-[35px]'
                            }`}
                          >
                            <div className="flex items-start gap-5">
                              {/* Left Icon Container */}
                              <div
                                className={`w-16 h-16 rounded-2xl ${step.iconBg} flex items-center justify-center shrink-0 shadow-md shadow-orange-900/10`}
                              >
                                {step.icon}
                              </div>
                              {/* Title & Description */}
                              <div className="flex-1">
                                <h4 className="text-lg font-bold font-serif-heading text-[#111827] leading-snug whitespace-pre-line">
                                  {step.title}
                                </h4>
                                <p className="text-xs text-stone-500 font-light leading-relaxed mt-2.5">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>

                      {/* Center Timeline Axis Slot (Col 6 & 7 span 2) */}
                      <div className="col-span-2 flex items-center justify-center relative">
                        {/* Number Badge + Timeline Marker */}
                        <div
                          className={`flex items-center gap-3 transition-all duration-500 ${
                            isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
                          }`}
                        >
                          {/* If left card: Number badge sits to the left of marker */}
                          {isLeft && (
                            <div className="w-12 h-12 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center font-serif-heading font-extrabold text-base tracking-wider z-20">
                              <span className={step.badgeColor}>{step.num}</span>
                            </div>
                          )}

                          {/* Central Dot Marker on the dashed line */}
                          <div
                            className={`w-4 h-4 rounded-full ${step.dotBg} ${
                              isRevealed ? step.dotRing : ''
                            } z-20 transition-all duration-500`}
                          />

                          {/* If right card: Number badge sits to the right of marker */}
                          {!isLeft && (
                            <div className="w-12 h-12 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center font-serif-heading font-extrabold text-base tracking-wider z-20">
                              <span className={step.badgeColor}>{step.num}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Right Side Slot */}
                      <div className="col-span-5 flex justify-start">
                        {!isLeft ? (
                          /* RIGHT CARD (Step 02 / Step 04) */
                          <div
                            className={`w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-lg hover:-translate-y-1 ${
                              isRevealed
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-[35px]'
                            }`}
                          >
                            <div className="flex items-start gap-5">
                              {/* Title & Description */}
                              <div className="flex-1">
                                <h4 className="text-lg font-bold font-serif-heading text-[#111827] leading-snug whitespace-pre-line">
                                  {step.title}
                                </h4>
                                <p className="text-xs text-stone-500 font-light leading-relaxed mt-2.5">
                                  {step.description}
                                </p>
                              </div>
                              {/* Right Icon Container */}
                              <div
                                className={`w-16 h-16 rounded-2xl ${step.iconBg} flex items-center justify-center shrink-0 shadow-md`}
                              >
                                {step.icon}
                              </div>
                            </div>
                          </div>
                        ) : null}
                      </div>

                    </div>

                    {/* -------------------------------------------------- */}
                    {/* MOBILE & TABLET STACKED TIMELINE                   */}
                    {/* -------------------------------------------------- */}
                    <div className="lg:hidden flex items-start gap-4 sm:gap-6 relative">
                      {/* Vertical line running on mobile */}
                      <div className="flex flex-col items-center shrink-0 relative pt-1">
                        {/* Number Badge */}
                        <div
                          className={`w-11 h-11 rounded-full bg-white border border-stone-200 shadow-md flex items-center justify-center font-serif-heading font-extrabold text-sm z-10 transition-all duration-500 ${
                            isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                          }`}
                        >
                          <span className={step.badgeColor}>{step.num}</span>
                        </div>
                        {/* Dot marker */}
                        <div
                          className={`w-3.5 h-3.5 rounded-full ${step.dotBg} mt-2 z-10 transition-all duration-500 ${
                            isRevealed ? step.dotRing : ''
                          }`}
                        />
                      </div>

                      {/* Card on Mobile */}
                      <div
                        className={`flex-1 bg-white rounded-3xl p-5 sm:p-6 border border-stone-200/80 shadow-[0_6px_20px_rgb(0,0,0,0.03)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isRevealed
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-6'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-xl ${step.iconBg} flex items-center justify-center shrink-0 shadow-xs`}
                          >
                            {step.icon}
                          </div>
                          <div>
                            <h4 className="text-base font-bold font-serif-heading text-[#111827] leading-snug whitespace-pre-line">
                              {step.title}
                            </h4>
                            <p className="text-xs text-stone-500 font-light leading-relaxed mt-2">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
