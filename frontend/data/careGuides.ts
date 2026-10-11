export interface CareGuide {
  id: string;
  title: string;
  icon: string;
  description: string;
  tips: string[];
}

export const CARE_GUIDES: CareGuide[] = [
  {
    id: "watering",
    title: "Watering Your Plants",
    icon: "💧",
    description:
      "Most houseplants die from overwatering, not underwatering. The key is learning to read your plant and checking the soil before you water.",
    tips: [
      "Check soil moisture by sticking your finger 2-3cm into the soil",
      "Water thoroughly until it drains from the bottom, then empty the saucer",
      "Let the soil dry between waterings — soggy roots rot quickly",
      "Use room-temperature water to avoid shocking the roots",
      "Reduce watering frequency in winter when growth slows",
      "Yellowing lower leaves often mean overwatering; crispy edges mean underwatering",
    ],
  },
  {
    id: "light",
    title: "Understanding Light Needs",
    icon: "☀️",
    description:
      "Light is plant food. Too little and your plant stretches and weakens. Too much direct sun can scorch delicate leaves. Match your plant to your available light.",
    tips: [
      "Low light: few feet from a north-facing window or dim corner (Snake Plant, ZZ Plant)",
      "Medium light: bright room with filtered/indirect sun (Peace Lily, Pothos)",
      "Bright indirect: near east or west window without harsh rays (Monstera, Ferns)",
      "Direct sun: unobstructed south window, several hours daily (Succulents, Cacti)",
      "Rotate your plant every few weeks so all sides get equal light",
      "Pale, leggy growth means your plant needs more light",
    ],
  },
  {
    id: "soil",
    title: "Soil & Feeding",
    icon: "🌱",
    description:
      "Healthy roots need air pockets and drainage. The right soil mix and occasional feeding keep your plants thriving year-round.",
    tips: [
      "Use well-draining potting mix, not garden soil (too heavy for pots)",
      "Add perlite or orchid bark for extra drainage if needed",
      "Repot when roots circle the pot or growth slows (usually every 1-2 years)",
      "Feed during active growth (spring/summer) with diluted liquid fertilizer",
      "Skip fertilizer in fall and winter when plants rest",
      "Salt buildup (white crust on soil) means you're over-fertilizing — flush with water",
    ],
  },
  {
    id: "humidity",
    title: "Temperature & Humidity",
    icon: "🌡️",
    description:
      "Most tropical houseplants prefer stable warmth and moderate humidity. Dry indoor air is common in heated homes — simple fixes help.",
    tips: [
      "Keep plants away from cold drafts, air conditioners, and heating vents",
      "Ideal temperature range: 18-24°C for most houseplants",
      "Group plants together to naturally raise local humidity",
      "Place humidity-loving plants (ferns, calatheas) in bathrooms or near humidifiers",
      "Mist occasionally if you like, but it only helps briefly",
      "Brown leaf tips often signal low humidity or irregular watering",
    ],
  },
  {
    id: "problems",
    title: "Common Problems & Fixes",
    icon: "🩺",
    description:
      "Most plant problems are fixable once you spot the cause. Here are the most common issues and how to solve them quickly.",
    tips: [
      "Yellow leaves: usually overwatering or root rot — check soil and reduce watering",
      "Brown crispy tips: low humidity or underwatering — increase moisture",
      "Drooping leaves: thirsty plant or waterlogged roots — check soil first",
      "Pale, stretched growth: not enough light — move closer to a window",
      "Brown spots or mold: fungal infection from wet leaves — improve air circulation",
      "Tiny bugs (aphids, spider mites): wipe leaves with soapy water, isolate plant",
      "Leaf drop: sudden change in location, temperature, or watering routine",
    ],
  },
  {
    id: "basics",
    title: "Plant Care Basics",
    icon: "📋",
    description:
      "Simple habits that keep your plants healthy and help you catch problems before they become serious.",
    tips: [
      "Inspect your plants weekly — check leaves, stems, and soil",
      "Dust leaves gently with a damp cloth so they can breathe and photosynthesize",
      "Remove dead or yellowing leaves to keep energy focused on healthy growth",
      "Quarantine new plants for 2 weeks to avoid introducing pests",
      "Keep a simple care log if you tend to forget when you last watered",
      "Trust your instincts — you'll learn your plants' rhythms over time",
    ],
  },
];
