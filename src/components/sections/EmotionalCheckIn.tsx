import React, { useState } from 'react';
import { ASSETS } from '../../constants/assets';

interface EmotionalCheckInProps {
  onProceedToBooking: (feeling: string) => void;
}

export const EmotionalCheckIn: React.FC<EmotionalCheckInProps> = ({ onProceedToBooking }) => {
  const [selectedFeeling, setSelectedFeeling] = useState('');
  const [imgError, setImgError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFeeling) {
      onProceedToBooking(selectedFeeling);
    }
  };

  return (
    <section id="feeling-today" className="py-20 lg:py-24 bg-[#FAF8F5] text-stone-900 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-14 items-center">
          {/* Left Column: Circular Therapist Photograph matching reference */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl bg-stone-200">
              {!imgError ? (
                <img
                  src={ASSETS.PROFILE}
                  alt="Dr. Sheela Dang"
                  className="w-full h-full object-cover object-top"
                  onError={() => {
                    const img = new Image();
                    img.src = ASSETS.PROFILE_FALLBACK;
                    img.onload = () => {
                      const el = document.getElementById('feeling-profile-img') as HTMLImageElement;
                      if (el) el.src = ASSETS.PROFILE_FALLBACK;
                    };
                    img.onerror = () => setImgError(true);
                  }}
                  id="feeling-profile-img"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-[#1C3325]/10 flex items-center justify-center text-stone-600 font-serif-heading font-bold text-xl">
                  Dr. Sheela Dang
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Feeling Today Form matching reference */}
          <div className="md:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif-heading text-stone-900 mb-3">
              How are you Feeling Today ?
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed mb-6 max-w-xl">
              "Your feelings matter. By sharing how you feel today, you help us understand your current state so we can guide you with the right support and care."
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <div>
                <label
                  htmlFor="feeling-select"
                  className="block text-xs font-semibold text-stone-700 mb-2"
                >
                  How are you feeling today? <span className="text-rose-500">*</span>
                </label>
                <select
                  id="feeling-select"
                  value={selectedFeeling}
                  onChange={(e) => setSelectedFeeling(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-stone-300 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#EB5742] focus:border-transparent transition"
                  required
                >
                  <option value="">Select</option>
                  <option value="Anxious">Anxious</option>
                  <option value="Stressed">Stressed</option>
                  <option value="Low">Low</option>
                  <option value="Overwhelmed">Overwhelmed</option>
                  <option value="Confused">Confused</option>
                  <option value="Relationship difficulties">Relationship difficulties</option>
                  <option value="I'm not sure">I'm not sure</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={!selectedFeeling}
                  className="px-8 py-3 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#EB5742] hover:bg-[#d64733] disabled:opacity-50 transition shadow-sm"
                >
                  Let's Talk
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
