import { Plant } from "@/types/plant";
import { UserPlantProfile, PlantRecommendation } from "@/types/finder";

/**
 * Rule-based recommendation engine
 * Scores plants 0-100 based on how well they match the user's profile
 * Returns top matches with transparent reasoning
 */
export function getPlantRecommendations(
  profile: UserPlantProfile,
  plants: Plant[]
): PlantRecommendation[] {
  const recommendations: PlantRecommendation[] = plants.map((plant) => {
    let score = 0;
    const reasons: string[] = [];
    const maxScore = 100;

    // Light matching (30 points)
    if (profile.light) {
      const lightScore = scoreLightMatch(profile.light, plant.light);
      score += lightScore;
      if (lightScore >= 25) {
        reasons.push("Perfect light conditions");
      } else if (lightScore >= 15) {
        reasons.push("Can adapt to your lighting");
      }
    }

    // Watering habit matching (25 points)
    if (profile.wateringHabit) {
      const waterScore = scoreWateringMatch(profile.wateringHabit, plant.watering);
      score += waterScore;
      if (waterScore >= 20) {
        reasons.push("Fits your watering routine");
      }
    }

    // Experience level matching (20 points)
    if (profile.experience) {
      const expScore = scoreExperienceMatch(profile.experience, plant.difficulty);
      score += expScore;
      if (expScore >= 15) {
        reasons.push(`Great for ${profile.experience === "beginner" ? "beginners" : "your skill level"}`);
      }
    }

    // Pet safety (25 points - critical filter)
    if (profile.pets === "yes") {
      if (plant.petFriendly) {
        score += 25;
        reasons.push("Safe for cats & dogs");
      } else {
        score -= 50; // Heavy penalty for non-pet-safe plants when pets present
        reasons.push("⚠️ Not pet-safe");
      }
    } else {
      score += 10; // Small bonus for flexibility
    }

    // Location bonuses (bonus points, not core)
    if (profile.location === "bathroom" && plant.name.toLowerCase().includes("fern")) {
      score += 5;
      reasons.push("Loves bathroom humidity");
    }
    if (profile.location === "desk" && plant.size === "Small") {
      score += 5;
      reasons.push("Compact size for desks");
    }

    // Normalize score to 0-100
    const normalizedScore = Math.max(0, Math.min(100, score));

    return {
      plant,
      matchScore: normalizedScore,
      matchReasons: reasons,
    };
  });

  // Sort by score descending, return top recommendations
  return recommendations
    .sort((a, b) => b.matchScore - a.matchScore)
    .filter((rec) => rec.matchScore > 30); // Only show reasonable matches
}

function scoreLightMatch(userLight: string, plantLight: string): number {
  const plantLightLower = plantLight.toLowerCase();

  if (userLight === "low") {
    if (plantLightLower.includes("low")) return 30;
    if (plantLightLower.includes("medium")) return 20;
    return 5;
  }

  if (userLight === "medium") {
    if (plantLightLower.includes("medium") || plantLightLower.includes("indirect")) return 30;
    if (plantLightLower.includes("low") || plantLightLower.includes("bright")) return 20;
    return 10;
  }

  if (userLight === "bright-indirect") {
    if (plantLightLower.includes("bright") && plantLightLower.includes("indirect")) return 30;
    if (plantLightLower.includes("indirect")) return 25;
    if (plantLightLower.includes("bright")) return 20;
    return 10;
  }

  if (userLight === "direct") {
    if (plantLightLower.includes("direct")) return 30;
    if (plantLightLower.includes("bright")) return 20;
    return 5;
  }

  return 15; // Default neutral score
}

function scoreWateringMatch(userHabit: string, plantWatering: string): number {
  const wateringLower = plantWatering.toLowerCase();

  if (userHabit === "forgetful") {
    // Looking for drought-tolerant plants
    if (
      wateringLower.includes("2-3 weeks") ||
      wateringLower.includes("3-4 weeks") ||
      wateringLower.includes("every 2-3 weeks")
    ) {
      return 25;
    }
    if (wateringLower.includes("dry")) return 20;
    return 5;
  }

  if (userHabit === "weekly") {
    // Moderate watering schedule
    if (wateringLower.includes("week") || wateringLower.includes("1-2 weeks")) {
      return 25;
    }
    return 15;
  }

  if (userHabit === "attentive") {
    // Frequent attention, can handle thirsty plants
    if (wateringLower.includes("moist") || wateringLower.includes("frequently")) {
      return 25;
    }
    return 20; // Most plants work for attentive caretakers
  }

  return 15; // Default
}

function scoreExperienceMatch(userExp: string, plantDifficulty: string): number {
  if (userExp === "beginner") {
    if (plantDifficulty === "Beginner") return 20;
    if (plantDifficulty === "Intermediate") return 10;
    return 5;
  }

  if (userExp === "intermediate") {
    if (plantDifficulty === "Intermediate") return 20;
    if (plantDifficulty === "Beginner") return 18;
    return 15;
  }

  if (userExp === "expert") {
    // Experts can handle anything, slight preference for challenge
    if (plantDifficulty === "Intermediate" || plantDifficulty === "Advanced") return 20;
    return 18;
  }

  return 15; // Default
}
