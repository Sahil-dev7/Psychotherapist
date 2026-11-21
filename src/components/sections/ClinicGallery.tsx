import React from 'react';
import { ASSETS } from '../../constants/assets';

export const ClinicGallery: React.FC = () => {
  const images = [
    {
      src: ASSETS.PROFILE,
      fallback: ASSETS.PROFILE_FALLBACK,
      alt: 'Dr. Sheela Dang in clinic consultation space',
    },
    {
      src: ASSETS.CLINIC_01,
      fallback: ASSETS.CLINIC_01_FALLBACK,
      alt: 'Quiet private consultation suite with botanical aesthetic',
    },
    {
      src: ASSETS.CLINIC_02,
      fallback: ASSETS.CLINIC_02_FALLBACK,
      alt: 'Therapy room with comfortable couch and psychological reference charts',
    },
    {
      src: ASSETS.CLINIC_03,
      fallback: ASSETS.CERTIFICATES,
      alt: 'Clinical accreditations and tranquil therapy room',
    },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#070D09] text-white border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-white leading-tight mb-3">
            Gallery
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
            Take a look inside our warm and welcoming therapy space.
          </p>
        </div>

        {/* Gallery arrangement matching reference (4 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative h-60 sm:h-72 lg:h-80 rounded-2xl overflow-hidden bg-stone-900 border border-white/10 shadow-lg group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== img.fallback) {
                    target.src = img.fallback;
                  }
                }}
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
