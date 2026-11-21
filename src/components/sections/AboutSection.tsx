import React, { useState, useEffect, useRef } from 'react';
import { Baby, Brain, HeartHandshake, Instagram, Maximize2, Minimize2, Sparkles, User, Users } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reelStageRef = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [floatingActive, setFloatingActive] = useState(false);
  const [isReelFullscreen, setIsReelFullscreen] = useState(false);

  // Viewport detection (20-30% threshold, triggers once)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasEntered) {
          setHasEntered(true);
          // Activate continuous floating after entrance animation finishes (~1.2s)
          setTimeout(() => {
            setFloatingActive(true);
          }, 1200);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasEntered]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsReelFullscreen(document.fullscreenElement === reelStageRef.current);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleReelFullscreen = async () => {
    const stage = reelStageRef.current;
    if (!stage) return;

    try {
      if (document.fullscreenElement === stage) {
        await document.exitFullscreen();
      } else {
        await stage.requestFullscreen();
      }
    } catch (error) {
      console.error('Unable to resize the Instagram reel view.', error);
      window.open('https://www.instagram.com/reel/DXckco0CIWu/', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 lg:py-28 bg-[#FAF8F5] text-stone-900 overflow-hidden"
    >
      {/* Dynamic Keyframes for Entrance and Floating Animations */}
      <style>{`
        @keyframes float-top-left {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
        }
        @keyframes float-top-right {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(1deg); }
        }
        @keyframes float-bottom-left {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(5px) rotate(0.8deg); }
        }
        @keyframes float-bottom-right {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(-0.8deg); }
        }

        .animate-float-tl {
          animation: float-top-left 5.2s ease-in-out infinite;
        }
        .animate-float-tr {
          animation: float-top-right 4.6s ease-in-out infinite;
        }
        .animate-float-bl {
          animation: float-bottom-left 5.8s ease-in-out infinite;
        }
        .animate-float-br {
          animation: float-bottom-right 4.9s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float-tl,
          .animate-float-tr,
          .animate-float-bl,
          .animate-float-br {
            animation: none !important;
          }
        }
      `}</style>

      {/* Soft ambient background shapes matching reference */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-pink-100/40 via-purple-100/30 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-gradient-to-bl from-purple-200/30 via-pink-100/20 to-transparent blur-3xl pointer-events-none" />

      {/* Decorative leaf / botanical subtle silhouettes on edges matching reference */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-96 opacity-[0.06] pointer-events-none select-none hidden xl:block">
        <svg viewBox="0 0 200 400" fill="currentColor" className="w-full h-full text-stone-900">
          <path d="M0 200 C50 150 100 200 150 100 C120 180 80 220 0 200 Z" />
          <path d="M0 280 C60 220 120 280 180 180 C140 260 80 300 0 280 Z" />
          <path d="M0 340 C40 300 100 320 140 240 C100 320 60 360 0 340 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================== */}
        {/* TOP HEADER BLOCK                                            */}
        {/* ========================================================== */}
        <div className="text-center max-w-4xl mx-auto mb-14 lg:mb-16">
          {/* WHO WE ARE Label with subtle pink accent lines */}
          <div className="mb-4 inline-flex items-center justify-center gap-2.5 rounded-full border border-pink-100 bg-white/80 px-4 py-2 shadow-sm">
            <Brain className="h-4 w-4 text-[#D83280]" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D83280] sm:text-xs">
              WHO WE ARE
            </span>
          </div>

          {/* Large Centered Editorial Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif-heading text-[#111827] leading-[1.12] mb-5">
            LEARN ABOUT OUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D83280] via-[#C026D3] to-[#A855F7]">
              PROFESSIONAL
            </span> <br />
            PSYCHOLOGICAL THERAPY
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            At Sheela Dang Mental Health Care Centre, we provide a safe, confidential and compassionate space where individuals, couples, children and families can seek support.
          </p>
        </div>

        {/* ========================================================== */}
        {/* MAIN COMPOSITION (DESKTOP: CENTER PORTRAIT + 4 CARDS)       */}
        {/* ========================================================== */}
        <div className="relative max-w-6xl mx-auto">
          {/* Subtle Background Dotted Pattern & Organic Curves from Reference */}
          {/* Left Dot Grid */}
          <div className="absolute left-2 lg:left-6 top-1/4 w-28 h-28 hidden md:grid grid-cols-6 gap-2 opacity-25 pointer-events-none select-none">
            {[...Array(36)].map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#C026D3]" />
            ))}
          </div>

          {/* Right Dot Grid (Lime/Green Dots from Reference) */}
          <div className="absolute right-4 lg:right-10 bottom-1/4 w-28 h-28 hidden md:grid grid-cols-6 gap-2 opacity-35 pointer-events-none select-none">
            {[...Array(36)].map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            ))}
          </div>

          {/* Subtle Organic Wave Curve Doodles from Reference */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block opacity-45"
            viewBox="0 0 1000 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Soft purple looping curve on left */}
            <path
              d="M120 480 C 80 430, 160 380, 240 400 C 320 420, 360 380, 390 320"
              stroke="#A855F7"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            {/* Soft green looping curve with heart loop on right */}
            <path
              d="M620 320 C 660 360, 710 330, 750 360 C 780 380, 800 420, 860 410"
              stroke="#059669"
              strokeWidth="2"
            />
            <path
              d="M740 335 C 740 320, 755 310, 765 320 C 775 310, 790 320, 790 335 C 790 355, 765 375, 765 375 C 765 375, 740 355, 740 335 Z"
              stroke="#059669"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          {/* Layout Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center justify-center relative z-10 py-6 sm:py-10">

            {/* ====================================================== */}
            {/* LEFT COLUMN: 2 FLOATING SERVICE CARDS                  */}
            {/* ====================================================== */}
            <div className="lg:col-span-4 flex flex-col space-y-6 sm:space-y-8 lg:pr-4 order-2 lg:order-1">
              {/* 1. TOP-LEFT CARD: Individual Therapy */}
              <div
                className={`relative group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  hasEntered
                    ? 'opacity-100 translate-y-0 translate-x-0'
                    : 'opacity-0 translate-y-6 translate-x-4'
                } ${floatingActive ? 'animate-float-tl' : ''}`}
                style={{ transitionDelay: '150ms' }}
              >
                {/* Decorative purple sparkle rays above card */}
                <div className="absolute -top-5 left-10 text-[#C026D3] opacity-80 pointer-events-none select-none">
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="currentColor">
                    <line x1="12" y1="2" x2="12" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="5" y1="6" x2="9" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="19" y1="6" x2="15" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_12px_30px_-5px_rgba(0,0,0,0.06),0_4px_10px_-4px_rgba(0,0,0,0.02)] border border-stone-100/90 hover:scale-[1.02] hover:shadow-[0_20px_35px_-5px_rgba(0,0,0,0.1)] transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    {/* Pink/Magenta Circle Icon matching reference */}
                    <div className="w-12 h-12 rounded-2xl bg-[#FDF2F8] text-[#D83280] flex items-center justify-center shrink-0 border border-pink-100">
                      <User className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold font-serif-heading text-[#111827] mb-1">
                        Individual Therapy
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed font-light">
                        Mental help for personal growth and emotional well-being.
                      </p>
                    </div>
                  </div>
                  {/* Pink Accent Line */}
                  <div className="mt-4 w-12 h-1 bg-[#F472B6] rounded-full" />
                </div>
              </div>

              {/* 3. BOTTOM-LEFT CARD: Child Therapy */}
              <div
                className={`relative group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  hasEntered
                    ? 'opacity-100 translate-y-0 translate-x-0'
                    : 'opacity-0 translate-y-6 translate-x-4'
                } ${floatingActive ? 'animate-float-bl' : ''}`}
                style={{ transitionDelay: '450ms' }}
              >
                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_12px_30px_-5px_rgba(0,0,0,0.06),0_4px_10px_-4px_rgba(0,0,0,0.02)] border border-stone-100/90 hover:scale-[1.02] hover:shadow-[0_20px_35px_-5px_rgba(0,0,0,0.1)] transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    {/* Green Circle Icon matching reference */}
                    <div className="w-12 h-12 rounded-2xl bg-[#ECFDF5] text-[#059669] flex items-center justify-center shrink-0 border border-emerald-100">
                      <Baby className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold font-serif-heading text-[#111827] mb-1">
                        Child Therapy
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed font-light">
                        Compassionate developmental and behavioral guidance.
                      </p>
                    </div>
                  </div>
                  {/* Green Accent Line */}
                  <div className="mt-4 w-12 h-1 bg-[#10B981] rounded-full" />
                </div>
              </div>
            </div>

            {/* ====================================================== */}
            {/* CENTER: INLINE INSTAGRAM REEL                          */}
            {/* ====================================================== */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center my-6 lg:my-0 order-1 lg:order-2">
              <div
                className={`relative transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  hasEntered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6'
                }`}
                style={{ transitionDelay: '0ms' }}
              >
                <div
                  ref={reelStageRef}
                  className={`${
                    isReelFullscreen
                      ? 'fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4'
                      : 'relative z-10'
                  }`}
                >
                  <div
                    className={`group relative overflow-hidden border border-stone-200 bg-black ${
                      isReelFullscreen
                        ? 'aspect-[0.68] max-h-[82svh] w-[min(90vw,420px)] rounded-2xl shadow-xl'
                        : 'aspect-[0.68] w-[min(84vw,320px)] rounded-2xl shadow-sm'
                    }`}
                  >
                    <iframe
                      src="https://www.instagram.com/reel/DXckco0CIWu/embed"
                      title="Instagram reel by Sheela Dang"
                      className="absolute -top-[65px] left-1/2 h-[648px] w-full max-w-none -translate-x-1/2 scale-[1.2] origin-top border-0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="eager"
                      referrerPolicy="strict-origin-when-cross-origin"
                      scrolling="no"
                    />
                    <button
                      type="button"
                      onClick={toggleReelFullscreen}
                      aria-label={isReelFullscreen ? 'Exit expanded reel view' : 'Expand reel view'}
                      title={isReelFullscreen ? 'Exit expanded reel view' : 'Expand reel view'}
                      className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/65 text-white opacity-80 shadow-sm transition-all group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {isReelFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

              </div>

              <a
                href="https://www.instagram.com/reel/DXckco0CIWu/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Instagram className="h-4 w-4" />
                View on Instagram
              </a>
            </div>

            {/* ====================================================== */}
            {/* RIGHT COLUMN: 2 FLOATING SERVICE CARDS                 */}
            {/* ====================================================== */}
            <div className="lg:col-span-4 flex flex-col space-y-6 sm:space-y-8 lg:pl-4 order-3">
              {/* 2. TOP-RIGHT CARD: Couple Therapy */}
              <div
                className={`relative group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  hasEntered
                    ? 'opacity-100 translate-y-0 translate-x-0'
                    : 'opacity-0 translate-y-6 -translate-x-4'
                } ${floatingActive ? 'animate-float-tr' : ''}`}
                style={{ transitionDelay: '300ms' }}
              >
                {/* Decorative purple sparkle rays above card */}
                <div className="absolute -top-5 right-10 text-[#C026D3] opacity-80 pointer-events-none select-none">
                  <svg width="24" height="18" viewBox="0 0 24 18" fill="currentColor">
                    <line x1="12" y1="2" x2="12" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="5" y1="6" x2="9" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <line x1="19" y1="6" x2="15" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_12px_30px_-5px_rgba(0,0,0,0.06),0_4px_10px_-4px_rgba(0,0,0,0.02)] border border-stone-100/90 hover:scale-[1.02] hover:shadow-[0_20px_35px_-5px_rgba(0,0,0,0.1)] transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    {/* Purple Circle Icon matching reference */}
                    <div className="w-12 h-12 rounded-2xl bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center shrink-0 border border-purple-100">
                      <HeartHandshake className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold font-serif-heading text-[#111827] mb-1">
                        Couple Therapy
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed font-light">
                        Professional guidance and conflict resolution for couples.
                      </p>
                    </div>
                  </div>
                  {/* Purple Accent Line */}
                  <div className="mt-4 w-12 h-1 bg-[#A855F7] rounded-full" />
                </div>
              </div>

              {/* 4. BOTTOM-RIGHT CARD: Trauma & Emotional Support */}
              <div
                className={`relative group transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  hasEntered
                    ? 'opacity-100 translate-y-0 translate-x-0'
                    : 'opacity-0 translate-y-6 -translate-x-4'
                } ${floatingActive ? 'animate-float-br' : ''}`}
                style={{ transitionDelay: '600ms' }}
              >
                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-[0_12px_30px_-5px_rgba(0,0,0,0.06),0_4px_10px_-4px_rgba(0,0,0,0.02)] border border-stone-100/90 hover:scale-[1.02] hover:shadow-[0_20px_35px_-5px_rgba(0,0,0,0.1)] transition-transform duration-300">
                  <div className="flex items-start gap-4">
                    {/* Peach / Orange Circle Icon matching reference */}
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center shrink-0 border border-orange-100">
                      <Sparkles className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold font-serif-heading text-[#111827] mb-1">
                        Trauma & Emotional Support
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed font-light">
                        Evidence-based healing for deep-rooted distress.
                      </p>
                    </div>
                  </div>
                  {/* Peach Accent Line */}
                  <div className="mt-4 w-12 h-1 bg-[#FB923C] rounded-full" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
