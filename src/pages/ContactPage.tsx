import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  MessageCircle,
} from 'lucide-react';
import { imageMapping } from '../data/imageMapping.ts';
import { ArchitecturalImage } from '../components/ArchitecturalImage.tsx';
import { BlueprintGrid } from '../components/motion/BlueprintElements.tsx';
import { ContactFormData } from '../types.ts';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectInterest: 'Residential Renovation',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryRef, setInquiryRef] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit inquiry.');
      }

      setInquiryRef(result.referenceNumber || 'INQ-CONFIRMED');
      setSubmitted(true);
    } catch (err: any) {
      console.error('Contact submit error:', err);
      setErrorMessage(err.message || 'Unable to submit your message. Please call us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <section className="relative pt-12 pb-24 bg-[#F7F7F5] border-b border-[#030407]/10 overflow-hidden">
        <BlueprintGrid opacity={0.03} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >


            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem] text-[#030407] tracking-[-0.025em] font-bold leading-[1.05]"
            >
              Connect with Our <span className="text-[#1558C9]">Engineering Office.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-xl text-[#66686D] mt-6 font-light leading-relaxed max-w-2xl"
            >
              We welcome inquiries for luxury residential renovations, commercial hospitality fit-outs,
              and structural property expansions. Meet our team at Jacob Obrechtstraat in Amsterdam Oud-Zuid.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative aspect-16/9 sm:aspect-21/9 overflow-hidden shadow-2xl border border-[#030407]/10 group"
          >
            <motion.div
              animate={{ scale: [1, 1.05] }}
              transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="w-full h-full"
            >
              <img
                src={imageMapping.contactStreetscape.url}
                alt={imageMapping.contactStreetscape.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#030407]/90 backdrop-blur-xs text-white p-4 text-xs max-w-md border-l-2 border-[#D4FF24]">
              <span className="font-mono text-[#D4FF24] block text-[10px] uppercase tracking-wider mb-1 font-bold">
                JACOB OBRECHTSTRAAT · AMSTERDAM OUD-ZUID
              </span>
              <span className="font-light leading-relaxed">
                Centrally located near the Museumkwartier for convenient on-site consultations across the Randstad.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Split Layout: Details & Form */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#030407]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Official Contact Credentials & Map (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#F7F7F5] border border-[#030407]/10 p-6 sm:p-8 space-y-6 shadow-sm">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#1558C9] block mb-1">
                    Registered Construction Entity
                  </span>
                  <h2 className="font-serif text-xl text-[#030407] font-bold">
                    Proven Projecten B.V.
                  </h2>
                  <p className="text-xs text-[#66686D] font-mono mt-0.5">
                    Chamber of Commerce (KVK): 86893033
                  </p>
                </div>

                <div className="pt-4 border-t border-[#030407]/10 space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1558C9]/10 flex items-center justify-center text-[#1558C9] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-bold text-[#1558C9] block">
                        Office Location
                      </span>
                      <address className="not-italic text-xs text-[#111214] mt-0.5 leading-relaxed">
                        Jacob Obrechtstraat 69<br />
                        1071KJ Amsterdam<br />
                        The Netherlands
                      </address>
                    </div>
                  </div>

                  {/* Contact Page Primary Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1558C9]/10 flex items-center justify-center text-[#1558C9] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-bold text-[#1558C9] block">
                        Direct Mobile / WhatsApp
                      </span>
                      <a
                        href="tel:+31654398245"
                        className="text-xs font-semibold text-[#111214] hover:text-[#1558C9] transition-colors mt-0.5 inline-block"
                      >
                        +31 6 54 39 82 45
                      </a>
                    </div>
                  </div>



                  {/* WhatsApp Direct Chat */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1558C9]/10 flex items-center justify-center text-[#1558C9] shrink-0 mt-0.5">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-bold text-[#1558C9] block">
                        Instant WhatsApp Chat
                      </span>
                      <a
                        href="https://wa.me/+31654398245"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#1558C9] hover:underline mt-0.5 inline-block"
                      >
                        Start WhatsApp conversation →
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1558C9]/10 flex items-center justify-center text-[#1558C9] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-bold text-[#1558C9] block">
                        Email Desk
                      </span>
                      <a
                        href="mailto:info@proven-projecten.nl"
                        className="text-xs font-semibold text-[#111214] hover:text-[#1558C9] transition-colors mt-0.5 inline-block"
                      >
                        info@proven-projecten.nl
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1558C9]/10 flex items-center justify-center text-[#1558C9] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-bold text-[#1558C9] block">
                        Working Hours
                      </span>
                      <p className="text-xs text-[#111214] mt-0.5 leading-relaxed">
                        Monday – Friday: 08:00 – 18:00<br />
                        Saturday: By appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Photo Preview */}
              <div className="relative aspect-16/10 overflow-hidden border border-[#030407]/10 shadow-md">
                <ArchitecturalImage
                  src={imageMapping.contactConsultation.url}
                  alt={imageMapping.contactConsultation.alt}
                  fallbackTitle="Consultation Desk"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/75 text-white p-2 text-[10px] font-mono">
                  Personalized Architectural Consultations
                </div>
              </div>

              {/* Google Maps Location */}
              <div className="bg-[#FFFFFF] border border-[#030407]/10 p-2 shadow-xs">
                <div className="aspect-16/9 w-full bg-[#F7F7F5] relative">
                  <iframe
                    title="Proven Projecten Location Map - Jacob Obrechtstraat 69 Amsterdam"
                    src="https://maps.google.com/maps?q=Jacob+Obrechtstraat+69,+1071KJ+Amsterdam,+Netherlands&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="px-3 py-2 flex items-center justify-between text-[11px] text-[#66686D]">
                  <span>Amsterdam Oud-Zuid</span>
                  <a
                    href="https://maps.google.com/?q=Jacob+Obrechtstraat+69,+1071KJ+Amsterdam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1558C9] font-bold hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#FFFFFF] border border-[#030407]/10 p-6 sm:p-10 shadow-xl">
                <h3 className="font-serif text-2xl text-[#030407] font-bold mb-2">Send an Inquiry</h3>
                <p className="text-xs text-[#66686D] mb-6 font-light">
                  Fill in the form below and an engineer or project manager will respond promptly.
                </p>

                {submitted ? (
                  <div className="py-8 text-center animate-in fade-in duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#1558C9]/10 text-[#1558C9] flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-xl text-[#030407] font-bold mb-1">Inquiry Sent Successfully</h4>
                    <p className="text-xs text-[#66686D] max-w-sm mx-auto leading-relaxed mb-4">
                      Thank you, {formData.name}. We have logged your request under reference{' '}
                      <strong className="font-mono text-[#1558C9]">{inquiryRef}</strong>. Our team will
                      contact you at {formData.email}.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          projectInterest: 'Residential Renovation',
                          message: '',
                        });
                      }}
                      className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#030407] border border-[#030407] hover:bg-[#F7F7F5] cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#111214] mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Willem van der Meer"
                          className="w-full px-3.5 py-3 text-xs bg-[#F7F7F5] border border-[#030407]/15 focus:border-[#1558C9] focus:outline-none transition-colors text-[#111214]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#111214] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="willem@example.com"
                          className="w-full px-3.5 py-3 text-xs bg-[#F7F7F5] border border-[#030407]/15 focus:border-[#1558C9] focus:outline-none transition-colors text-[#111214]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#111214] mb-1.5">
                          Telephone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+31 6 1234 5678"
                          className="w-full px-3.5 py-3 text-xs bg-[#F7F7F5] border border-[#030407]/15 focus:border-[#1558C9] focus:outline-none transition-colors text-[#111214]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider font-semibold text-[#111214] mb-1.5">
                          Project Interest
                        </label>
                        <select
                          value={formData.projectInterest}
                          onChange={(e) =>
                            setFormData({ ...formData, projectInterest: e.target.value })
                          }
                          className="w-full px-3.5 py-3 text-xs bg-[#F7F7F5] border border-[#030407]/15 focus:border-[#1558C9] focus:outline-none transition-colors text-[#111214]"
                        >
                          <option value="Residential Renovation">Residential Renovation</option>
                          <option value="Commercial & Hospitality">Commercial & Hospitality</option>
                          <option value="Complete Renovation">Complete Renovation</option>
                          <option value="Property Maintenance">Property Maintenance</option>
                          <option value="Home Extension">Home Extension & Roof Works</option>
                          <option value="Interior Design">Interior Design & Joinery</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#111214] mb-1.5">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please share details about your property, timeline, or specific questions..."
                        className="w-full p-3 text-xs bg-[#F7F7F5] border border-[#030407]/15 focus:border-[#1558C9] focus:outline-none transition-colors text-[#111214]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all cursor-pointer shadow-md rounded-xs disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Sending Message...</span>
                      ) : (
                        <>
                          <span>Send Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
