import React, { useState } from 'react';
import { ASSETS } from '../../constants/assets';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
}) => {
  const [imgError, setImgError] = useState(false);
  const [attemptFallback, setAttemptFallback] = useState(false);

  // Height mappings based on size
  const heightClass = {
    sm: 'h-10',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-20',
  }[size];

  const handleImgError = () => {
    if (!attemptFallback) {
      setAttemptFallback(true);
    } else {
      setImgError(true);
    }
  };

  const imageSrc = attemptFallback ? ASSETS.LOGO_FALLBACK : ASSETS.LOGO;

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      {!imgError ? (
        <img
          src={imageSrc}
          alt="Sheela Dang Mental Health Care Centre"
          className={`${heightClass} w-auto object-contain transition-transform duration-200 hover:scale-[1.02]`}
          onError={handleImgError}
          referrerPolicy="no-referrer"
          loading="eager"
        />
      ) : (

        /* Pixel-perfect authentic vector brand mark matching sdmh-logo.png */
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <svg
              className={`${size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'} shrink-0`}
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Stylized woman profile and hair bun in magenta */}
              <path
                d="M38 18C48 18 56 24 56 34C56 38 54 42 51 45C55 48 58 53 58 60C58 72 46 80 34 82C22 84 14 76 14 66C14 58 20 52 26 50C22 46 20 40 20 34C20 25 28 18 38 18Z"
                fill="#D83280"
                opacity="0.95"
              />
              <circle cx="36" cy="30" r="14" fill="#E45296" />
              <circle cx="28" cy="24" r="5" fill="#FAF8F5" />
              <path
                d="M48 38C52 46 58 56 64 62C70 68 78 72 86 74"
                stroke="#D83280"
                strokeWidth="5"
                strokeLinecap="round"
              />
              {/* Brain node mark */}
              <path
                d="M44 54C47 51 51 51 53 54C55 57 55 60 52 63"
                stroke="#FAF8F5"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>

            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span
                  className="font-signature text-2xl md:text-3xl text-[#D83280] font-bold tracking-wide -mr-1"
                  style={{ textShadow: '0 0.5px 1px rgba(216,50,128,0.2)' }}
                >
                  Sheela
                </span>
                <span
                  className={`font-serif-heading font-extrabold text-lg md:text-xl tracking-wider uppercase ml-1.5 ${
                    variant === 'white' ? 'text-white' : 'text-[#1E3A5F]'
                  }`}
                >
                  D<span className="relative inline-block px-[1px]">A<span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[9px] text-[#D83280]">🧠</span></span>NG
                </span>
                <span className="text-[10px] text-[#D83280] font-sans font-bold ml-1 align-top">®</span>
              </div>
              <span className="text-[8.5px] md:text-[9.5px] uppercase font-serif-heading font-semibold tracking-[0.22em] text-[#D83280] -mt-1">
                Mental Health Care Centre
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
