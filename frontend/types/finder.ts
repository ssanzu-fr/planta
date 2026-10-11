import { Plant } from "./plant";

export interface FinderQuestion {
  id: string;
  title: string;
  subtitle: string;
  options: FinderOption[];
}

export interface FinderOption {
  id: string;
  label: string;
  description: string;
  icon: string;
}

export interface UserPlantProfile {
  location?: string;
  light?: string;
  wateringHabit?: string;
  experience?: string;
  pets?: string;
}

export interface PlantRecommendation {
  plant: Plant;
  matchScore: number; // 0 - 100%
  matchReasons: string[];
}
