export interface Job {
  id: string;
  companyName: string;
  role: string;
  companyLogo: string;
  jobPost: string;
  rating: number;
  location: string;
  tags: string[];
  category: string;
  postTime: string;
  compensationDetails?: CompensationDetails;
}

export interface CompensationDetails {
  compensation: string;
  estimated?: boolean;
}
