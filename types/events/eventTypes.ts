export interface EventDate {
  year: number;
  month: number;
}

export interface EventType {
  id: string;
  title: string;
  description?: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

