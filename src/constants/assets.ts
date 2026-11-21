/**
 * Centralized Asset Paths for Sheela Dang Mental Health Care Centre
 * Matching exact prompt specifications:
 * - logo: assets/logo.png
 * - hero: assets/sheela-hero.jpg
 * - profile: assets/sheela-profile.png
 * - clinic: assets/clinic-01.png, assets/clinic-02.png, assets/clinic-03.png
 * - certificates: assets/certificates.png
 * - media: assets/media-feature.png
 */

export const ASSETS = {
  LOGO: '/assets/logo.png',
  LOGO_FALLBACK: '/images/sdmh-logo.png',

  HERO: '/assets/sheela-hero.jpg',
  HERO_FALLBACK: '/images/sheela-hero.jpg',

  PROFILE: '/assets/sheela-profile.png',
  PROFILE_FALLBACK: '/images/sheela-profile.jpg',

  CLINIC_01: '/assets/clinic-01.png',
  CLINIC_01_FALLBACK: '/images/clinic-01.jpg',

  CLINIC_02: '/assets/clinic-02.png',
  CLINIC_02_FALLBACK: '/images/clinic-02.jpg',

  CLINIC_03: '/assets/clinic-03.png',
  CLINIC_03_FALLBACK: '/images/clinic-03.jpg',

  CERTIFICATES: '/assets/certificates.png',
  CERTIFICATES_FALLBACK: '/images/certificates.jpg',

  MEDIA: '/assets/media-feature.png',
  MEDIA_FALLBACK: '/images/media-feature.jpg',
} as const;
