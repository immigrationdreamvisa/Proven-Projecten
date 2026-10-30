export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'residential' | 'commercial' | 'both';
  imageUrl: string;
  scopeOfWork: string[];
  keyMaterials: string[];
  typicalDuration: string;
  idealFor: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  location: string;
  category:
    | 'Residential'
    | 'Commercial'
    | 'Complete Renovations'
    | 'Living Rooms'
    | 'Kitchens'
    | 'Bathrooms'
    | 'Exterior Design'
    | 'Extensions'
    | 'Interior Renovations'
    | 'Flooring & Finishing'
    | string;
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  galleryImages: string[];
  scopeOfWork: string[];
  completionYear: string;
  duration: string;
  keyFeatures: string[];
}

export interface ConsultationFormData {
  projectType: string;
  timeline: string;
  budget: string;
  projectDescription: string;
  propertyLocation: string;
  fullName: string;
  email: string;
  phone: string;
  preferredContactMethod: 'phone' | 'email' | 'whatsapp';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectInterest: string;
  message: string;
}
