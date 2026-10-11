export interface Plant {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: string;
  image: string;
  description: string;
  light: string;
  watering: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  petFriendly: boolean;
  size: string;
}
