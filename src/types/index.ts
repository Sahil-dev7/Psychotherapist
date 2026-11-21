export interface SpecializationArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  symptoms: string[];
  treatmentModalities: string[];
  caseStudySnippet: {
    clientProfile: string;
    presentingProblem: string;
    clinicalIntervention: string;
    measuredOutcome: string;
  };
  duration: string;
}

export interface DoctorEndorsement {
  id: string;
  name: string;
  title: string;
  affiliation?: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  institution: string;
  field: string;
  year?: string;
  level: string;
  description: string;
}

export interface MediaFeatureItem {
  id: string;
  episodeNumber: string;
  title: string;
  broadcastDate: string;
  hostCoSpeaker: string;
  hostCredentials: string;
  organization: string;
  partners: string[];
  description: string;
  keyInsights: string[];
}

export interface ClinicRoom {
  id: string;
  name: string;
  assetKey: string;
  altText: string;
  features: string[];
  description: string;
}

export interface AppointmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceCategory: string;
  consultationMode: 'in-person' | 'online-video';
  preferredDate: string;
  preferredTimeSlot: string;
  notes: string;
}
