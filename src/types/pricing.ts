export interface PricingFeature {
  label: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  billingNote: string;
  contentSummary: string;
  features: PricingFeature[];
  featured?: boolean;
  badge?: string;
}
