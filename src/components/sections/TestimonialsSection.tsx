import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 'doc-1',
      name: 'Dr Supriya Naik',
      title: 'Consulting Physician',
      quote:
        "I've known Sheela Dang for the past 15 years and I've seen her work with my patients. Besides being an excellent professional, she's a very warm and caring person. She has taken the effort of accompanying some of her patients to my clinic when she felt it necessary. Highly recommended and completely trustworthy.",
      rating: 5,
    },
    {
      id: 'doc-2',
      name: 'Dr. Dhruv Thakkar',
      title: 'Psychiatrist (Gold Medalist)',
      quote:
        'As a psychiatrist, I’ve had the opportunity to refer several clients to Sheela over the years—especially those dealing with deep-rooted trauma, grief, and PTSD. Her therapeutic presence is both grounded and compassionate, and her clinical intuition is remarkable. Patients consistently report feeling genuinely understood, supported, and empowered in their healing journeys.',
      rating: 5,
    },
    {
      id: 'doc-3',
      name: 'Dr Kiran Naik',
      title: 'Consulting Medical Practitioner',
      quote:
        "I know Dr Sheela Dang for a long time, and I can confidently say that she's one of the most dedicated and professionally committed person. She cares for her patients genuinely and does her utmost to help them. I wish more power to her, so her patients get the solace they seek.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#09110C] text-white border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-serif-heading text-white leading-tight">
            What Doctors Say About Me
          </h2>
        </div>

        {/* THREE Testimonial Cards matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((doc) => (
            <div
              key={doc.id}
              className="flex flex-col justify-between rounded-2xl bg-[#111C15]/70 border border-stone-800 p-7 backdrop-blur-sm"
            >
              <div>
                {/* Doctor Name */}
                <h4 className="text-lg font-bold font-serif-heading text-white mb-1">
                  {doc.name}
                </h4>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(doc.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed italic mb-6">
                  "{doc.quote}"
                </p>
              </div>

              {/* Title */}
              <div className="pt-4 border-t border-stone-800/80 text-xs text-emerald-300/80 font-medium">
                {doc.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
