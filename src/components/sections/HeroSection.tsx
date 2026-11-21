import React from 'react';
import portrait from '../../../portrait.png';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  const services = [
    'Individual Counselling',
    'Couple Counselling',
    'Child Counselling',
    'Family Counselling',
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-[max(760px,100svh)] flex-col justify-between overflow-hidden bg-[#171c19] text-white lg:min-h-[max(680px,100svh)]"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,#353e35_4%,#707968_42%,#c0c0aa_100%)]" />
        <div className="absolute inset-y-[8%] left-[34%] right-[5%] overflow-hidden opacity-75 blur-[1px]">
          <div className="absolute inset-0 border-[10px] border-[#51584c]/55 bg-[linear-gradient(135deg,rgba(221,224,202,0.7),rgba(176,190,163,0.62)_48%,rgba(130,151,131,0.7))] shadow-[inset_0_0_70px_rgba(48,58,47,0.18)]">
            <div className="absolute inset-y-0 left-[34%] w-[8px] bg-[#555b4f]/50" />
            <div className="absolute inset-y-0 left-[68%] w-[8px] bg-[#555b4f]/50" />
            <div className="absolute inset-x-0 top-[56%] h-[8px] bg-[#555b4f]/50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_35%,rgba(245,239,210,0.42),transparent_52%)]" />
          </div>
          <div className="absolute bottom-[8%] left-[5%] h-[15%] w-[66%] rounded-t-[48%] bg-[#4d5549]/55 blur-md" />
          <div className="absolute bottom-[7%] left-[18%] h-[5%] w-[42%] rounded-full bg-[#9f9279]/45 blur-sm" />
          <div className="absolute bottom-[17%] right-[4%] h-[28%] w-[10%] rounded-t-full bg-[#485a46]/60 blur-md" />
          <div className="absolute bottom-[36%] right-[2%] h-[9%] w-[11%] -rotate-45 rounded-full bg-[#52644c]/65 blur-sm" />
          <div className="absolute bottom-[32%] right-[7%] h-[9%] w-[11%] rotate-45 rounded-full bg-[#69785d]/60 blur-sm" />
          <div className="absolute bottom-[27%] right-[1%] h-[8%] w-[10%] -rotate-45 rounded-full bg-[#596a50]/60 blur-sm" />
          <div className="absolute bottom-[8%] right-[4%] h-[9%] w-[12%] rounded-b-[45%] rounded-t-md bg-[#8e7962]/65 blur-sm" />
        </div>
        <div className="absolute left-[13%] top-[18%] hidden h-[25%] w-[13%] rounded-sm border-[6px] border-white/10 bg-[#ddd6c2]/20 shadow-lg backdrop-blur-sm sm:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#19211c]/98 via-[#19211c]/88 via-[68%] to-[#19211c]/35 lg:from-[#19211c]/95 lg:via-[#19211c]/78 lg:via-[48%] lg:to-[#19211c]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171c19]/75 via-transparent to-[#171c19]/20" />
      </div>

      <img
        src={portrait}
        alt="Dr. Sheela Dang"
        className="pointer-events-none absolute bottom-0 right-[-20%] z-[1] h-[36%] w-auto max-w-none object-contain object-bottom opacity-80 sm:right-[-14%] sm:h-[70%] sm:opacity-90 md:right-[-7%] md:h-[78%] lg:right-[-2%] lg:h-[100%] lg:opacity-100"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-start px-5 pb-6 pt-28 sm:px-8 sm:pb-12 lg:items-center lg:px-10 lg:pt-32">
        <div className="max-w-[540px]">
          <p className="mb-4 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e7d8b8] sm:text-xs">
            <span className="h-px w-7 bg-[#e7d8b8]" />
            Welcome to my profile
          </p>
          <h1 className="mb-5 max-w-[540px] font-serif-heading text-[2.15rem] font-medium leading-[1.04] tracking-[-0.025em] text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            You Don’t Have to Go Through This Alone.
          </h1>
          <p className="mb-6 max-w-[440px] text-[13px] font-light leading-relaxed text-stone-200 sm:mb-7 sm:text-base">
            Together, we’ll work through anxiety, stress, trauma, and life’s challenges — at your pace, on your terms.
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center gap-3 rounded-full border border-[#f28b70]/70 bg-[#df553f] px-6 py-3.5 text-xs font-semibold text-white shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-[#ca4935] hover:shadow-xl active:translate-y-0 sm:text-sm"
            >
              <span>Get Started Today</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <div className="flex items-center gap-2.5 text-xs text-stone-200">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <ShieldCheck className="h-4 w-4 text-[#d9c99f]" />
              </span>
              <span>Confidential, personalized care</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full border-t border-white/15 bg-[#131916]/45 px-5 py-4 backdrop-blur-md sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center justify-items-start gap-x-4 gap-y-3 text-[10px] font-medium tracking-wide text-stone-100 sm:flex sm:flex-wrap sm:justify-between sm:gap-x-8 sm:text-xs">
          {services.map((service) => (
            <div key={service} className="flex items-center gap-2">
              <span className="flex h-[15px] w-[15px] items-center justify-center rounded-full bg-white text-[#4c554d]">
                <Check className="h-2.5 w-2.5 stroke-[3]" />
              </span>
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
