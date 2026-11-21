import React, { useState, useEffect } from 'react';
import { ShieldCheck, Award, Tv, Home, UserCheck, Sparkles } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackType?: 'therapist' | 'clinic' | 'certificate' | 'media' | 'generic';
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  badgeText?: string;
  secondarySrc?: string;
  objectPosition?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  secondarySrc,
  alt = 'Clinic Photograph',
  fallbackType = 'generic',
  fallbackTitle,
  fallbackSubtitle,
  badgeText,
  className = '',
  objectPosition = 'object-center',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [hasError, setHasError] = useState(false);
  const [attemptedSecondary, setAttemptedSecondary] = useState(false);

  // Check if a user uploaded custom dataUrl in localStorage for this asset
  useEffect(() => {
    if (src) {
      const stored = localStorage.getItem(`sdmh_asset_${src}`);
      if (stored) {
        setCurrentSrc(stored);
        setHasError(false);
        return;
      }
      setCurrentSrc(src);
      setHasError(false);
      setAttemptedSecondary(false);
    }
  }, [src]);

  const handleError = () => {
    if (secondarySrc && !attemptedSecondary) {
      setAttemptedSecondary(true);
      setCurrentSrc(secondarySrc);
    } else {
      setHasError(true);
    }
  };

  if (!hasError && currentSrc) {
    return (
      <img
        src={currentSrc}
        alt={alt}
        className={`${className} ${objectPosition} transition-opacity duration-300`}
        onError={handleError}
        referrerPolicy="no-referrer"
        loading={props.loading || 'lazy'}
        {...props}
      />
    );
  }

  // Neutral, elegant editorial placeholder per requirements:
  // "use a clean neutral placeholder rather than inventing a replacement person."
  return (
    <div
      className={`relative flex flex-col items-center justify-center p-6 text-center overflow-hidden bg-stone-900 border border-stone-800 text-stone-200 ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Subtle architectural ambient background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/90 to-stone-900/60 pointer-events-none" />

      {/* Decorative badge if provided */}
      {badgeText && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-amber-500/10 text-amber-300 border border-amber-500/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{badgeText}</span>
        </div>
      )}

      {/* Specific contextual graphics */}
      <div className="relative z-10 flex flex-col items-center max-w-sm">
        {fallbackType === 'therapist' && (
          <>
            <div className="w-20 h-20 mb-4 rounded-full bg-stone-800/80 border border-stone-700/60 flex items-center justify-center shadow-inner">
              <UserCheck className="w-10 h-10 text-rose-300/80" />
            </div>
            <span className="text-xs uppercase tracking-widest text-rose-300 font-semibold mb-1">
              Clinical Director
            </span>
            <h4 className="font-serif-heading text-xl md:text-2xl font-bold text-stone-100 mb-1">
              {fallbackTitle || 'Dr. Sheela Dang'}
            </h4>
            <p className="text-xs text-stone-400 font-sans leading-relaxed mb-3">
              {fallbackSubtitle || 'Founder & Director • 25+ Years Experience • REBT & CBT Specialist'}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-stone-800/60 border border-stone-700/40 text-[11px] text-stone-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Clinical Practice</span>
            </div>
          </>
        )}

        {fallbackType === 'certificate' && (
          <>
            <div className="w-16 h-16 mb-3 rounded-xl bg-stone-800/80 border border-amber-500/20 flex items-center justify-center">
              <Award className="w-8 h-8 text-amber-300" />
            </div>
            <h4 className="font-serif-heading text-lg md:text-xl font-bold text-stone-100 mb-1">
              {fallbackTitle || 'Clinical Accreditations Wall'}
            </h4>
            <p className="text-xs text-stone-400 font-sans leading-relaxed">
              {fallbackSubtitle || 'Albert Ellis Institute • Indian Hypnosis Association • CBT & Psychometrics'}
            </p>
          </>
        )}

        {fallbackType === 'media' && (
          <>
            <div className="w-16 h-16 mb-3 rounded-xl bg-stone-800/80 border border-sky-500/20 flex items-center justify-center">
              <Tv className="w-8 h-8 text-sky-300" />
            </div>
            <h4 className="font-serif-heading text-lg md:text-xl font-bold text-stone-100 mb-1">
              {fallbackTitle || 'Dr KKs MEDtalks'}
            </h4>
            <p className="text-xs text-stone-400 font-sans leading-relaxed">
              {fallbackSubtitle || 'With Dr. Sanjay Kalra & Dr. Sheela Dang • Episode 561 & 853'}
            </p>
          </>
        )}

        {fallbackType === 'clinic' && (
          <>
            <div className="w-16 h-16 mb-3 rounded-xl bg-stone-800/80 border border-emerald-500/20 flex items-center justify-center">
              <Home className="w-8 h-8 text-emerald-300" />
            </div>
            <h4 className="font-serif-heading text-lg md:text-xl font-bold text-stone-100 mb-1">
              {fallbackTitle || 'Therapy Consultation Suite'}
            </h4>
            <p className="text-xs text-stone-400 font-sans leading-relaxed">
              {fallbackSubtitle || 'Quiet, biophilic, confidential environment in Goregaon West, Mumbai'}
            </p>
          </>
        )}

        {fallbackType === 'generic' && (
          <>
            <div className="w-12 h-12 mb-3 rounded-full bg-stone-800 flex items-center justify-center text-stone-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-semibold text-stone-200 mb-1">
              {fallbackTitle || alt}
            </h4>
            <p className="text-xs text-stone-400">
              {fallbackSubtitle || 'Sheela Dang Mental Health Care Centre'}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
