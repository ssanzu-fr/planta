import { FinderQuestion } from "@/types/finder";

export const FINDER_QUESTIONS: FinderQuestion[] = [
  {
    id: "location",
    title: "Where will your new plant live?",
    subtitle: "Different spaces offer different humidity, airflow, and temperature.",
    options: [
      {
        id: "living-room",
        label: "Living Room",
        description: "Open space with good air circulation and general light",
        icon: "🛋️",
      },
      {
        id: "bedroom",
        label: "Bedroom",
        description: "Calm space, often with moderate or filtered light",
        icon: "🛏️",
      },
      {
        id: "desk",
        label: "Desk / Home Office",
        description: "Compact area, tabletop or shelf display",
        icon: "💻",
      },
      {
        id: "bathroom",
        label: "Bathroom",
        description: "High humidity, often lower or diffused lighting",
        icon: "🛁",
      },
      {
        id: "balcony",
        label: "Balcony / Patio",
        description: "Outdoor or semi-outdoor with direct sunshine & breezes",
        icon: "☀️",
      },
    ],
  },
  {
    id: "light",
    title: "How much natural sunlight reaches that spot?",
    subtitle: "Light is plant food — matching your light ensures healthy growth.",
    options: [
      {
        id: "low",
        label: "Low / Dim Light",
        description: "Few feet from a small window, or north-facing room",
        icon: "☁️",
      },
      {
        id: "medium",
        label: "Medium / Filtered Light",
        description: "Bright room but shielded from harsh direct sun rays",
        icon: "🌤️",
      },
      {
        id: "bright-indirect",
        label: "Bright Indirect Light",
        description: "Lots of daylight without direct rays hitting the leaves",
        icon: "☀️",
      },
      {
        id: "direct",
        label: "Direct Sunlight",
        description: "Sun rays directly hit the spot for several hours a day",
        icon: "🔥",
      },
    ],
  },
  {
    id: "wateringHabit",
    title: "How often are you likely to water?",
    subtitle: "Be honest! There is a perfect plant for every routine.",
    options: [
      {
        id: "forgetful",
        label: "Once Every 2–3 Weeks",
        description: "I tend to forget or travel often (drought-lovers)",
        icon: "⏳",
      },
      {
        id: "weekly",
        label: "About Once a Week",
        description: "I have a steady weekend watering routine",
        icon: "💧",
      },
      {
        id: "attentive",
        label: "Frequently / Daily check-in",
        description: "I love tending to my plants and checking on them daily",
        icon: "🌿",
      },
    ],
  },
  {
    id: "experience",
    title: "What is your plant experience level?",
    subtitle: "We'll suggest plants that match your comfort zone.",
    options: [
      {
        id: "beginner",
        label: "Complete Beginner",
        description: "Looking for something resilient and forgiving",
        icon: "🌱",
      },
      {
        id: "intermediate",
        label: "Some Experience",
        description: "I know the basics and want something with more character",
        icon: "🪴",
      },
      {
        id: "expert",
        label: "Confident Caretaker",
        description: "Ready for plants that need specific humidity and attention",
        icon: "🌳",
      },
    ],
  },
  {
    id: "pets",
    title: "Do you have pets in your home?",
    subtitle: "We will prioritize non-toxic plants for cats and dogs.",
    options: [
      {
        id: "yes",
        label: "Yes, I Have Pets",
        description: "I only want non-toxic, pet-safe plants",
        icon: "🐾",
      },
      {
        id: "no",
        label: "No Pets / Kept Out of Reach",
        description: "Pet safety is not a concern for this spot",
        icon: "🏡",
      },
    ],
  },
];
