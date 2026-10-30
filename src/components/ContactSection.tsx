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
} from 'lucide-react';
import { ContactFormData } from '../types.ts';
import { BlueprintGrid } from './motion/BlueprintElements.tsx';

export const ContactSection: React.FC = () => {
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
    <section id="contact" className="relative py-20 md:py-32 bg-[#F7F6F2] overflow-hidden">
      {/* Background CAD Blueprint Grid with subtle motion */}
      <BlueprintGrid opacity={0.04} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="w-8 h-[1px] bg-[#263D35]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#263D35]">
              Get in Touch
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252824] tracking-tight"
          >
            Connect with Our Team.
          </motion.h2>
          <p className="text-sm sm:text-base text-[#252824]/75 mt-3 font-light leading-relaxed">
            Whether you are planning a full home transformation, commercial hospitality fit-out, or have a
            general inquiry, we are ready to assist.
          </p>
        </div>

        {/* Split Layout: Left Contact Information & Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Official Company Details & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#FFFFFF] border border-[#E9E4DA] p-6 sm:p-8 space-y-6 shadow-md">
              <div>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-[#263D35] block mb-1">
                  Registered Entity
                </span>
                <h3 className="font-serif text-xl text-[#252824] font-semibold">
                  Proven Projecten B.V.
                </h3>
                <p className="text-xs text-[#252824]/60 font-mono mt-0.5">
                  KVK Number: 86893033
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9E4DA] space-y-4">
                {/* Office Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E9E4DA]/60 flex items-center justify-center text-[#263D35] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#263D35] block">
                      Office & Studio
                    </span>
                    <address className="not-italic text-xs text-[#252824] mt-0.5 leading-relaxed">
                      Jacob Obrechtstraat 69<br />
                      1071KJ Amsterdam<br />
                      The Netherlands
                    </address>
                  </div>
                </div>

                {/* Primary Contact Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1558C9]/10 flex items-center justify-center text-[#1558C9] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#1558C9] block">
                      Direct Mobile / WhatsApp
                    </span>
                    <a
                      href="tel: +31 6 54 39 82 45"
                      className="text-xs font-semibold text-[#111214] hover:text-[#1558C9] transition-colors mt-0.5 inline-block"
                    >
                      +31 6 54 39 82 45
                    </a>
                  </div>
                </div>




                {/* Email Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E9E4DA]/60 flex items-center justify-center text-[#263D35] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#263D35] block">
                      Email Inquiries
                    </span>
                    <a
                      href="mailto:info@proven-projecten.nl"
                      className="text-xs font-semibold text-[#252824] hover:text-[#263D35] transition-colors mt-0.5 inline-block"
                    >
                      info@proven-projecten.nl
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E9E4DA]/60 flex items-center justify-center text-[#263D35] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#263D35] block">
                      Office Hours
                    </span>
                    <p className="text-xs text-[#252824] mt-0.5 leading-relaxed">
                      Monday – Friday: 08:00 – 18:00<br />
                      Saturday: By appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Location Embed */}
            <div className="bg-[#FFFFFF] border border-[#E9E4DA] p-2 overflow-hidden shadow-sm">
              <div className="aspect-16/9 w-full bg-[#E9E4DA] relative">
                <iframe
                  title="Proven Projecten Location Map - Jacob Obrechtstraat 69 Amsterdam"
                  src="https://maps.google.com/maps?q=Jacob+Obrechtstraat+69,+1071KJ+Amsterdam,+Netherlands&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="px-3 py-2 flex items-center justify-between text-[11px] text-[#252824]/70">
                <span>Amsterdam Oud-Zuid / Museumkwartier</span>
                <a
                  href="https://maps.google.com/?q=Jacob+Obrechtstraat+69,+1071KJ+Amsterdam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#263D35] font-semibold hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form with Focus Animations (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#E9E4DA] p-6 sm:p-10 shadow-xl relative">
              <h3 className="font-serif text-2xl text-[#252824] mb-2">Send an Inquiry</h3>
              <p className="text-xs text-[#252824]/70 mb-6 font-light">
                Fill in the form below and an engineer or project manager will respond promptly.
              </p>

              {submitted ? (
                <div className="py-8 text-center animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#263D35]/10 text-[#263D35] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl text-[#252824] mb-1">Inquiry Sent Successfully</h4>
                  <p className="text-xs text-[#252824]/75 max-w-sm mx-auto leading-relaxed mb-4">
                    Thank you, {formData.name}. We have logged your request under reference{' '}
                    <strong className="font-mono text-[#263D35]">{inquiryRef}</strong>. Our team will
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
                    className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#263D35] border border-[#263D35] hover:bg-[#F7F6F2] cursor-pointer"
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
                    <div className="relative group">
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#252824] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Willem van der Meer"
                        className="w-full px-3.5 py-3 text-xs bg-[#F7F6F2] border border-[#E9E4DA] focus:border-[#263D35] focus:ring-1 focus:ring-[#263D35]/30 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="relative group">
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#252824] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="willem@example.com"
                        className="w-full px-3.5 py-3 text-xs bg-[#F7F6F2] border border-[#E9E4DA] focus:border-[#263D35] focus:ring-1 focus:ring-[#263D35]/30 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative group">
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#252824] mb-1.5">
                        Telephone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+31 6 1234 5678"
                        className="w-full px-3.5 py-3 text-xs bg-[#F7F6F2] border border-[#E9E4DA] focus:border-[#263D35] focus:ring-1 focus:ring-[#263D35]/30 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="relative group">
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#252824] mb-1.5">
                        Project Interest
                      </label>
                      <select
                        value={formData.projectInterest}
                        onChange={(e) =>
                          setFormData({ ...formData, projectInterest: e.target.value })
                        }
                        className="w-full px-3.5 py-3 text-xs bg-[#F7F6F2] border border-[#E9E4DA] focus:border-[#263D35] focus:ring-1 focus:ring-[#263D35]/30 focus:outline-none transition-all"
                      >
                        <option value="Residential Renovation">Residential Renovation</option>
                        <option value="Commercial & Hospitality">Commercial & Hospitality</option>
                        <option value="Kitchen Renovation">Kitchen Renovation</option>
                        <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                        <option value="Home Extension">Home Extension & Roof Works</option>
                        <option value="Carpentry & Joinery">Carpentry & Woodwork</option>
                        <option value="Property Maintenance">Property Maintenance</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative group">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#252824] mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about your property, timeline, or specific questions..."
                      className="w-full p-3 text-xs bg-[#F7F6F2] border border-[#E9E4DA] focus:border-[#263D35] focus:ring-1 focus:ring-[#263D35]/30 focus:outline-none transition-all"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F7F6F2] bg-[#263D35] hover:bg-[#1a2b25] transition-all cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
