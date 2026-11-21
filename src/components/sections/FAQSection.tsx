import React, { useState } from 'react';
import { Plus, Minus, PhoneCall } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What can I expect during my first therapy session?',
      a: 'The initial session is primarily focused on understanding your concerns, personal history, and the challenges you may currently be facing. It is also an opportunity for you to ask questions, discuss your expectations from therapy, and begin establishing a comfortable and collaborative therapeutic relationship.',
    },
    {
      q: 'Is therapy confidential?',
      a: 'Yes, completely. Confidentiality is a foundational pillar of ethical therapy. Everything discussed remains strictly private between you and Dr. Sheela Dang, in full accordance with professional psychological standards.',
    },
    {
      q: 'How do I know which therapy is right for me?',
      a: 'You do not need to diagnose yourself beforehand. During the initial consultation, Dr. Sheela Dang will assess your current situation and recommend the most effective, evidence-based approach tailored to your unique needs.',
    },
    {
      q: 'Can I book an appointment online?',
      a: 'Yes, you can easily book your appointment online through our website appointment form, or connect directly via WhatsApp and phone.',
    },
    {
      q: 'Do you offer couple and family therapy?',
      a: 'Yes, we provide specialized couples counseling, marital guidance, and supportive family therapy designed to improve communication, resolve conflicts, and rebuild trust.',
    },
    {
      q: 'Are sessions available in Hindi?',
      a: 'Yes, sessions are comfortably conducted in English, Hindi, and Gujarati, allowing you to express your thoughts and feelings in the language you feel most natural with.',
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#0B130E] text-white border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column matching reference */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-400 mb-2 block">
                FAQS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-white leading-tight mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            {/* Help inquiry snippet matching reference */}
            <div className="pt-6">
              <p className="text-xs sm:text-sm text-stone-300 mb-2">
                Still have you any question?
              </p>
              <a
                href="tel:9820453561"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-emerald-400 hover:text-emerald-300 transition"
              >
                <PhoneCall className="w-4 h-4" />
                <span>+91 9820453561</span>
              </a>
            </div>
          </div>

          {/* Right Column: Compact FAQ list with thin separators matching reference */}
          <div className="lg:col-span-7 divide-y divide-stone-800 border-y border-stone-800">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-4">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left py-1 text-stone-200 hover:text-white transition"
                  >
                    <span className="text-sm sm:text-base font-medium leading-snug">
                      {index + 1}. {faq.q}
                    </span>
                    <span className="text-stone-400 shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pb-2 text-xs sm:text-sm text-stone-300/80 font-light leading-relaxed animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
