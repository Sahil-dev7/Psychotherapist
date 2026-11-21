import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, CheckCircle2 } from 'lucide-react';

interface AppointmentBookingProps {
  initialService?: string;
  initialFeeling?: string;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  initialService = 'Trauma Therapy',
  initialFeeling,
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    service: initialService,
    date: '',
    time: '11:00 AM - 12:00 PM',
    message: initialFeeling ? `Current emotional state: ${initialFeeling}` : '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Sync if initialService changes
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  React.useEffect(() => {
    if (initialFeeling) {
      setFormData((prev) => ({
        ...prev,
        message: `Current emotional state: ${initialFeeling}`,
      }));
    }
  }, [initialFeeling]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-[#1B3224] text-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* White Appointment Container matching reference */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* LEFT: Appointment Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center text-emerald-950">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-serif-heading text-emerald-900 mb-2">
                    Appointment Request Received
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-800 mb-6">
                    Thank you, {formData.firstName}. We have received your consultation details and will reach out promptly to confirm your session.
                  </p>
                  <a
                    href={`https://wa.me/919820453561?text=Hello%20Dr.%20Sheela%20Dang%20Centre,%20I%20have%20submitted%20an%20appointment%20request%20for%20${formData.firstName}%20${formData.lastName}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1C3325] text-white text-xs font-semibold"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>Confirm via WhatsApp</span>
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#EB5742]"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#EB5742]"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#EB5742]"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#EB5742]"
                      />
                    </div>
                  </div>

                  {/* Service & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#EB5742]"
                      >
                        <option value="Trauma Therapy">Trauma Therapy</option>
                        <option value="Grief Counseling">Grief Counseling</option>
                        <option value="PTSD Intervention">PTSD Intervention</option>
                        <option value="Individual Therapy">Individual Therapy</option>
                        <option value="Couple Therapy">Couple Therapy</option>
                        <option value="Child Therapy">Child Therapy</option>
                      </select>
                    </div>
                    <div>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#EB5742]"
                      />
                    </div>
                  </div>

                  {/* Preferred time */}
                  <div>
                    <input
                      type="text"
                      placeholder="Preferred time (e.g. 11:00 AM / Evening)"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#EB5742]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      rows={3}
                      placeholder="Message (optional details)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#EB5742]"
                    />
                  </div>

                  {/* Button: "Book an Appointment" matching reference */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#EB5742] hover:bg-[#d64733] shadow-md transition"
                    >
                      Book an Appointment
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT: Contact Information matching reference */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D83280] mb-2 block">
                  Appointment
                </span>
                <h3 className="text-3xl font-extrabold font-serif-heading text-stone-900 mb-3">
                  Make an appointment
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed mb-8">
                  Schedule your consultation with ease. Choose a date and time that works best for you.
                </p>

                {/* Contact information details */}
                <div className="space-y-5 text-xs sm:text-sm">
                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                        Customer Services
                      </span>
                      <a href="tel:+919820453561" className="font-bold text-stone-900 hover:text-emerald-700">
                        9820453561
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-rose-50 text-[#D83280] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                        Email Address
                      </span>
                      <a href="mailto:info@sheeladang.com" className="font-bold text-stone-900 hover:text-rose-700">
                        info@sheeladang.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                        Clinic Location
                      </span>
                      <p className="text-stone-700 leading-snug">
                        S.V. Road, Goregaon West,<br />Mumbai 400104
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="pt-6 border-t border-stone-200 mt-6">
                <span className="text-[11px] font-bold text-stone-600 uppercase tracking-wider block mb-3">
                  Direct Channels
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/919820453561"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="tel:+919820453561"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold hover:bg-stone-200 transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-stone-600" />
                    <span>Phone</span>
                  </a>

                  <a
                    href="#appointment"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold"
                  >
                    <span>Website Form</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
