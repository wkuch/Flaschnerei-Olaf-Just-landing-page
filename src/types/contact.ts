export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export interface ContactFormSubmissionData extends ContactFormData {
  access_key: string;
  subject?: string;
}

export type ServiceType = 
  | "Sonstiges"
  | "Regenrinnen & Fallrohre"
  | "Gauben & Dacharbeiten"
  | "Mauerabdeckungen"
  | "Fenstersimse"
  | "Reparaturen & Wartung"
  | "Sonderanfertigungen"
  | "Beratung";

export interface FormSubmissionResult {
  success: boolean;
  message: string;
}