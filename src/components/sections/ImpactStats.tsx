import React, { useState } from 'react';
import atmosphere from '../../../atmosphere.jpg';

export const ImpactStats: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const stats = [
    { value: '8+', label: 'Therapy Areas' },
    { value: '1:1', label: 'Personalized Care' },
    { value: '2', label: 'Languages' },
    { value: '100%', label: 'Confidentiality Focus' },
  ];

  return (
    <section id="support" className="py-20 lg:py-28 bg-[#1B3224] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block matching reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10 sm:mb-12">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-300/90 mb-2 block">
              What we do
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-white leading-tight">
              Empowering change through therapeutic support
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-emerald-100/80 font-light leading-relaxed">
              We provide a range of therapeutic services designed to empower individuals on their journey to mental wellness. Through personalized counseling.
            </p>
          </div>
        </div>

        {/* ONE Large Clinic Photograph with Statistics at the bottom matching reference */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#112217]">
          {/* Main Large Image */}
          <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] w-full">
            {!imgError ? (
              <img
                src={atmosphere}
                alt="Group photo at a college event"
                className="w-full h-full object-cover object-center"
                onError={() => setImgError(true)}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-[#14281C] flex items-center justify-center text-emerald-200/40 font-serif-heading text-2xl">
                Therapy Space & Clinic Atmosphere
              </div>
            )}

            {/* Dark gradient overlay over bottom of image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

            {/* Statistics placed at bottom of image matching reference */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-white tracking-tight leading-none mb-1">
                      {stat.value}
                    </span>
                    <span className="text-xs sm:text-sm text-emerald-200/80 font-light">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
