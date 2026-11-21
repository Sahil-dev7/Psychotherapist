import React from 'react';
import { Logo } from '../common/Logo';
import { Phone, MessageSquare, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#070D09] text-stone-300">
      {/* Top Banner: Contact For The Consultation matching reference */}
      <div className="bg-[#FAF8F5] py-8 px-4 sm:px-6 lg:px-8 border-t border-stone-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-serif-heading text-stone-900">
              Contact For The Consultation
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919820453561"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#EB5742] hover:bg-[#d64733] shadow-md transition"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9820453561</span>
            </a>

            <a
              href="https://wa.me/919820453561"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#1B3224] hover:bg-[#13251a] shadow-md transition"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>+91 9820453561</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Block matching reference */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand & Reassurance */}
          <div className="lg:col-span-5">
            <div className="mb-5">
              <Logo size="md" variant="white" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold font-serif-heading text-white mb-2">
              We're Here When You're Ready.
            </h4>
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-sm">
              Providing compassionate, confidential and evidence-based psychological support for your healing journey.
            </p>
          </div>

          {/* Coordinates */}
          <div className="lg:col-span-4 space-y-3.5 text-xs sm:text-sm">
            <div>
              <span className="text-stone-500 uppercase tracking-wider text-[11px] font-semibold block mb-0.5">
                Phone Number
              </span>
              <a href="tel:9820453561" className="text-white hover:text-emerald-400 font-medium">
                9820453561
              </a>
            </div>

            <div>
              <span className="text-stone-500 uppercase tracking-wider text-[11px] font-semibold block mb-0.5">
                Email Address
              </span>
              <a href="mailto:info@sheeladang.com" className="text-white hover:text-rose-300 font-medium">
                info@sheeladang.com
              </a>
            </div>

            <div>
              <span className="text-stone-500 uppercase tracking-wider text-[11px] font-semibold block mb-0.5">
                Location
              </span>
              <p className="text-stone-300 font-light leading-snug">
                Sheela Dang Mental Health Care Centre, S.V. Road, Goregaon West, Mumbai 400104
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-3">
            <span className="text-stone-500 uppercase tracking-wider text-[11px] font-semibold block mb-3">
              Connect With Us
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/sheeladangofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-white hover:bg-white/10 transition text-xs font-semibold"
                title="Instagram"
              >
                IG
              </a>
              <a
                href="https://www.linkedin.com/in/sheela-dang-a71887227/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-white hover:bg-white/10 transition text-xs font-semibold"
                title="LinkedIn"
              >
                in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom minimal navigation matching reference */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
            <a href="#home" className="hover:text-stone-300 transition">Home</a>
            <a href="#about" className="hover:text-stone-300 transition">About</a>
            <a href="#support" className="hover:text-stone-300 transition">Services</a>
            <a href="#areas" className="hover:text-stone-300 transition">Therapy Areas</a>
            <a href="#gallery" className="hover:text-stone-300 transition">Gallery</a>
            <a href="#contact" className="hover:text-stone-300 transition">Contact</a>
          </div>

          <div>
            Copyright © 2026 All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
