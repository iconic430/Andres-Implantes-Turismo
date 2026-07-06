export interface Testimonial {
  id: string;
  patientName: string;
  origin: string;
  treatment: string;
  beforeImg: string;
  afterImg: string;
  rating: number;
  testimonial: string;
  timeTaken: string;
  savings: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface LaunchOffer {
  id: string;
  title: string;
  badge: string;
  description: string;
  benefits: string[];
  originalPrice?: string;
  offerPrice: string;
  validUntil: string;
}

export interface ScheduleDay {
  day: string;
  hours: string;
  closed: boolean;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  cityState: string;
  treatmentOfInterest: string;
  message: string;
  budgetRange: string;
  preferredContact: 'whatsapp' | 'email' | 'phone';
  smilePhoto: File | null;
}
