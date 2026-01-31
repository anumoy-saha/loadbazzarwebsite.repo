
export enum UserRole {
  AGENT = 'AGENT',
  TRANSPORTER = 'TRANSPORTER',
  TRUCK_OWNER = 'TRUCK_OWNER',
  NONE = 'NONE'
}

export interface StatItem {
  icon: string;
  number: string;
  label: string;
  color: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  items: string[];
  color: string;
}

export interface ProductItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}
