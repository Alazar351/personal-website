export type ProjectDetail = {
  _id: string;
  _createdAt: Date;
  name: string;
  currentSlug: string;
  image: any;
  alt: string;
  secondAlt: string;
  url: string;
  tags: string[];
  cardDescription: string;
  description: string;
  timeline: string;
  role: string;
  background: string;
  conclusion: string;
  goals: {
    title: string;
    description: string;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  secondaryImage: any;
  tools: string[];
  testimonial?: {
    name: string;
    position: string;
    comment: string;
  };
  testimonialImage?: any;
  testimonialAlt?: string;
};

export type projectCard = {
  name: string;
  currentSlug: string;
  cardDescription: string;
  image: any;
  alt: string;
};
