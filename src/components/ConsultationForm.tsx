import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Euro,
  Home,
  MapPin,
  Mail,
  User,
  Phone as PhoneIcon,
  Sparkles,
  AlertCircle,
  FileText,
} from 'lucide-react';
import { ConsultationFormData } from '../types.ts';

interface ConsultationFormProps {
  initialProjectType?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

const PROJECT_TYPES = [
  'Full House Renovation',
  'Bathroom',
  'Kitchen',
  'Basement',
  'Commercial Fit-out',
  'Home Extension',
  'Other',
];

const TIMELINES = [
  'As Soon As Possible',
  'During This Month',
  'During This Year',
  'After One Year',
  'Not Sure Yet',
];

const BUDGETS = [
  '€10,000–€25,000',
  '€25,000–€50,000',
  '€50,000–€100,000',
  '€100,000–€200,000',
  '€200,000+',
  'Not Sure — Need Advice',
];

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialProjectType,
  isModal = false,
  onCloseModal,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const [formData, setFormData] = useState<ConsultationFormData>({
    projectType: initialProjectType || 'Full House Renovation',
    timeline: 'During This Month',
    budget: '€50,000–€100,000',
    projectDescription: '',
    propertyLocation: 'Amsterdam, The Netherlands',
    fullName: '',
    email: '',
    phone: '',
    preferredContactMethod: 'phone',
  });

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedReference, setSubmittedReference] = useState<string | null>(null);

  const validateStep = (step: number): boolean => {
    setErrorMessage('');
    if (step === 1 && !formData.projectType) {
      setErrorMessage('Please select a project type.');
      return false;
    }
    if (step === 2 && !formData.timeline) {
      setErrorMessage('Please select your preferred timeline.');
      return false;
    }
    if (step === 3 && !formData.budget) {
      setErrorMessage('Please choose an estimated budget range.');
      return false;
    }
    if (step === 4) {
      if (!formData.propertyLocation.trim()) {
        setErrorMessage('Please enter the city or neighborhood of your property.');
        return false;
      }
    }
    if (step === 5) {
      if (!formData.fullName.trim()) {
        setErrorMessage('Please enter your full name.');
        return false;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setErrorMessage('Please enter a valid email address.');
        return false;
      }
      if (!formData.phone.trim() || formData.phone.length < 8) {
        setErrorMessage('Please enter a valid telephone number.');
        return false;
      }
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrevious = () => {
    setErrorMessage('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(5)) return;

    setSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit consultation request.');
      }

      setSubmittedReference(result.referenceNumber || 'PP-2026-CONFIRMED');
    } catch (err: any) {
      console.error('Error submitting consultation:', err);
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedReference(null);
    setCurrentStep(1);
    setFormData({
      projectType: 'Full House Renovation',
      timeline: 'During This Month',
      budget: '€50,000–€100,000',
      projectDescription: '',
      propertyLocation: 'Amsterdam, The Netherlands',
      fullName: '',
      email: '',
      phone: '',
      preferredContactMethod: 'phone',
    });
  };

  return (
    <div className={`w-full ${isModal ? '' : 'py-20 md:py-28 bg-[#F7F7F5]'}`}>
      <div className={`max-w-4xl mx-auto ${isModal ? 'p-0' : 'px-4 sm:px-6 lg:px-8'}`}>
        {/* Form Container Card */}
        <div className="bg-[#FFFFFF] border border-[#030407]/10 shadow-xl p-6 sm:p-10">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-[#1558C9]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#1558C9]">
                Tailored Quotation & Planning
              </span>
              <span className="w-6 h-[1px] bg-[#1558C9]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#030407] font-bold tracking-tight">
              Let's Bring Your Project to Life.
            </h2>
            <p className="text-xs sm:text-sm text-[#66686D] mt-2 font-light">
              Complete this 5-step consultation questionnaire to receive an itemized initial estimate and
              expert guidance from our Amsterdam renovation team.
            </p>
          </div>

          {/* Success Confirmation State */}
          {submittedReference ? (
            <div className="text-center py-10 px-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#1558C9]/10 text-[#1558C9] flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs uppercase tracking-widest font-bold text-[#1558C9]">
                Consultation Request Received
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#030407] font-bold mt-2 mb-3">
                Thank You, {formData.fullName}.
              </h3>

              <div className="inline-block p-4 bg-[#F7F7F5] border border-[#030407]/10 my-4 text-left text-xs space-y-1.5 max-w-md w-full">
                <div className="flex justify-between border-b border-[#030407]/10 pb-1">
                  <span className="text-[#66686D]">Reference Code:</span>
                  <span className="font-mono font-bold text-[#1558C9]">{submittedReference}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#66686D]">Project Type:</span>
                  <span className="font-medium text-[#111214]">{formData.projectType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#66686D]">Estimated Budget:</span>
                  <span className="font-medium text-[#111214]">{formData.budget}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#66686D]">Location:</span>
                  <span className="font-medium text-[#111214]">{formData.propertyLocation}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#66686D] max-w-md mx-auto leading-relaxed mt-2 mb-6">
                Our senior project director will review your specifications and contact you via{' '}
                <strong className="text-[#1558C9]">{formData.preferredContactMethod}</strong> ({formData.phone}) within 24 business hours to schedule an initial site survey.
              </p>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#111214] border border-[#030407]/15 hover:bg-[#F7F7F5] transition-colors cursor-pointer"
                >
                  Submit Another Project
                </button>
                {isModal && onCloseModal && (
                  <button
                    onClick={onCloseModal}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#030407] hover:bg-[#1558C9] transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div>
              {/* Step Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-xs font-semibold text-[#111214] mb-2">
                  <span className="uppercase tracking-wider text-[#1558C9]">
                    Step {currentStep} of {totalSteps}:{' '}
                    {currentStep === 1 && 'Project Type'}
                    {currentStep === 2 && 'Timeline'}
                    {currentStep === 3 && 'Budget Framework'}
                    {currentStep === 4 && 'Property Details'}
                    {currentStep === 5 && 'Your Contact Details'}
                  </span>
                  <span className="tabular-nums font-mono text-[#1558C9]">
                    {Math.round((currentStep / totalSteps) * 100)}%
                  </span>
                </div>
                <div className="w-full h-1.5 bg-[#030407]/10">
                  <div
                    className="h-full bg-[#1558C9] transition-all duration-300 ease-out"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              {/* Error Message Box */}
              {errorMessage && (
                <div className="mb-6 p-3 bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Step 1: Project Type */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#111214] mb-3">
                    What type of renovation or construction work are you planning?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {PROJECT_TYPES.map((type) => {
                      const isSelected = formData.projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, projectType: type })}
                          className={`p-4 text-left border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'border-[#1558C9] bg-[#1558C9]/5 ring-1 ring-[#1558C9]'
                              : 'border-[#030407]/10 bg-[#F7F7F5]/50 hover:bg-[#F7F7F5] text-[#111214]'
                          }`}
                        >
                          <span className="text-xs font-medium text-[#111214]">{type}</span>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                              isSelected
                                ? 'border-[#1558C9] bg-[#1558C9] text-white'
                                : 'border-[#66686D]/40'
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2: Project Timeline */}
              {currentStep === 2 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#111214] mb-3">
                    When would you like the construction or renovation to begin?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {TIMELINES.map((time) => {
                      const isSelected = formData.timeline === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeline: time })}
                          className={`p-4 text-left border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'border-[#1558C9] bg-[#1558C9]/5 ring-1 ring-[#1558C9]'
                              : 'border-[#030407]/10 bg-[#F7F7F5]/50 hover:bg-[#F7F7F5] text-[#111214]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#1558C9]" />
                            <span className="text-xs font-medium text-[#111214]">{time}</span>
                          </div>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                              isSelected
                                ? 'border-[#1558C9] bg-[#1558C9] text-white'
                                : 'border-[#66686D]/40'
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3: Budget Framework */}
              {currentStep === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#111214] mb-3">
                    What is your approximate budget framework for this project?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BUDGETS.map((b) => {
                      const isSelected = formData.budget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`p-4 text-left border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'border-[#1558C9] bg-[#1558C9]/5 ring-1 ring-[#1558C9]'
                              : 'border-[#030407]/10 bg-[#F7F7F5]/50 hover:bg-[#F7F7F5] text-[#111214]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Euro className="w-4 h-4 text-[#1558C9]" />
                            <span className="text-xs font-medium text-[#111214] tabular-nums">{b}</span>
                          </div>
                          <span
                            className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                              isSelected
                                ? 'border-[#1558C9] bg-[#1558C9] text-white'
                                : 'border-[#66686D]/40'
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 bg-white rounded-full" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 4: Additional Details */}
              {currentStep === 4 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#111214] mb-1.5">
                      Property Location (City / Neighborhood) *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#1558C9] absolute left-3 top-3.5" />
                      <input
                        type="text"
                        value={formData.propertyLocation}
                        onChange={(e) =>
                          setFormData({ ...formData, propertyLocation: e.target.value })
                        }
                        placeholder="e.g. Amsterdam Oud-Zuid, Keizersgracht, Zaandam"
                        className="w-full pl-10 pr-4 py-3 text-xs bg-[#F7F7F5] border border-[#030407]/15 focus:border-[#1558C9] focus:outline-none transition-colors text-[#111214]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#111214] mb-1.5">
                      Project Description & Key Requirements
                    </label>
                    <div className="relative">
                      <textarea
                        rows={4}
                        value={formData.projectDescription}
                        onChange={(e) =>
                          setFormData({ ...formData, projectDescription: e.target.value })
                        }
                        placeholder="Tell us about the property (year of construction, square meters, desired aesthetic, structural modifications, or specific ideas)..."
                        className="w-full p-3 text-xs bg-[#F7F7F5] border border-[#030407]/15 focus:border-[#1558C9] focus:outline-none transition-colors text-[#111214]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Contact Details */}
              {currentStep === 5 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#111214] mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#1558C9] absolute left-3 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Jan van Dijk"
                          className="w-full pl-10 pr-4 py-3 text-xs bg-[#F7F7F5] border border-[#030407]/15 focus:border-[#1558C9] focus:outline-none transition-colors text-[#111214]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#111214] mb-1.5">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#1558C9] absolute left-3 top-3.5" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jan@example.nl"
                          className="w-full pl-10 pr-4 py-3 text-xs bg-[#F7F7F5] border border-[#030407]/15 focus:border-[#1558C9] focus:outline-none transition-colors text-[#111214]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#111214] mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <PhoneIcon className="w-4 h-4 text-[#1558C9] absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+31 6 1234 5678"
                        className="w-full pl-10 pr-4 py-3 text-xs bg-[#F7F7F5] border border-[#030407]/15 focus:border-[#1558C9] focus:outline-none transition-colors text-[#111214]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#111214] mb-1.5">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      {(['phone', 'email', 'whatsapp'] as const).map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer text-xs">
                          <input
                            type="radio"
                            name="contactMethod"
                            checked={formData.preferredContactMethod === method}
                            onChange={() =>
                              setFormData({ ...formData, preferredContactMethod: method })
                            }
                            className="accent-[#1558C9]"
                          />
                          <span className="capitalize text-[#111214]">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-[#030407]/10 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevious}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#111214] hover:bg-black/5 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <span />
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-1.5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#030407] hover:bg-[#1558C9] transition-colors cursor-pointer"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider bg-[#D4FF24] text-[#030407] hover:bg-[#bceb16] transition-all cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <span>Request My Free Consultation</span>
                        <Sparkles className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
