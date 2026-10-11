"use client";

import { useState } from "react";
import Link from "next/link";
import { FINDER_QUESTIONS } from "@/data/finderQuestions";
import { UserPlantProfile, PlantRecommendation } from "@/types/finder";
import { Plant } from "@/types/plant";
import { getPlantRecommendations } from "@/lib/recommendation";
import PlantCard from "./PlantCard";

interface PlantFinderFlowProps {
  plants: Plant[];
}

export default function PlantFinderFlow({ plants }: PlantFinderFlowProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [profile, setProfile] = useState<UserPlantProfile>({});
  const [recommendations, setRecommendations] = useState<PlantRecommendation[] | null>(null);

  const totalSteps = FINDER_QUESTIONS.length;
  const currentQuestion = FINDER_QUESTIONS[currentStep];
  const isLastStep = currentStep === totalSteps - 1;
  const progressPercent = ((currentStep + 1) / totalSteps) * 100;

  const handleOptionSelect = (optionId: string) => {
    const questionId = currentQuestion.id;
    setProfile((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleNext = () => {
    if (isLastStep) {
      // Generate recommendations
      const results = getPlantRecommendations(profile, plants);
      setRecommendations(results);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setProfile({});
    setRecommendations(null);
  };

  const currentAnswer = profile[currentQuestion?.id as keyof UserPlantProfile];
  const canProceed = currentAnswer !== undefined;

  // Results view
  if (recommendations) {
    return (
      <div className="mx-auto max-w-5xl">
        {/* Results Header */}
        <div className="mb-10 text-center">
          <div className="mb-4 text-5xl">🌿</div>
          <h2 className="text-3xl font-semibold text-stone-900 md:text-4xl">
            Your Perfect Plant Matches
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Based on your profile, here are {recommendations.length} plants we recommend for you.
          </p>
        </div>

        {/* Recommendations Grid */}
        <div className="space-y-6">
          {recommendations.map((rec, index) => (
            <div
              key={rec.plant.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="grid gap-6 p-6 md:grid-cols-[200px_1fr] md:items-center">
                {/* Plant Image */}
                <Link href={`/shop/${rec.plant.slug}`}>
                  <img
                    src={rec.plant.image}
                    alt={rec.plant.name}
                    className="h-48 w-full rounded-2xl object-cover transition hover:opacity-90 md:h-full"
                  />
                </Link>

                {/* Plant Info */}
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-2xl font-bold text-green-700">
                      #{index + 1}
                    </span>
                    <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                      {rec.matchScore}% Match
                    </div>
                  </div>

                  <Link href={`/shop/${rec.plant.slug}`}>
                    <h3 className="text-2xl font-semibold text-stone-900 transition hover:text-green-800">
                      {rec.plant.name}
                    </h3>
                  </Link>

                  <p className="mt-2 text-sm leading-6 text-stone-600">
                    {rec.plant.description}
                  </p>

                  {/* Match Reasons */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {rec.matchReasons.map((reason, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700"
                      >
                        {reason}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                      href={`/shop/${rec.plant.slug}`}
                      className="rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-green-800"
                    >
                      View Details
                    </Link>
                    <Link
                      href="/plant-care"
                      className="rounded-full border border-stone-300 bg-white px-5 py-2 text-sm font-medium transition hover:border-stone-900"
                    >
                      Learn Care
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <button
            onClick={handleRestart}
            className="rounded-full border border-stone-300 bg-white px-7 py-3 font-medium transition hover:border-stone-900"
          >
            Retake Quiz
          </button>
          <Link
            href="/shop"
            className="text-sm font-medium text-green-800 hover:underline"
          >
            Browse All Plants →
          </Link>
        </div>
      </div>
    );
  }

  // Questionnaire view
  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-stone-600">
          <span>
            Question {currentStep + 1} of {totalSteps}
          </span>
          <span>{Math.round(progressPercent)}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-stone-200">
          <div
            className="h-full rounded-full bg-green-700 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-2xl font-semibold leading-tight text-stone-900 md:text-3xl">
          {currentQuestion.title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          {currentQuestion.subtitle}
        </p>

        {/* Options */}
        <div className="mt-8 space-y-3">
          {currentQuestion.options.map((option) => {
            const isSelected = currentAnswer === option.id;
            return (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                className={`w-full rounded-2xl border-2 p-5 text-left transition ${
                  isSelected
                    ? "border-green-700 bg-green-50"
                    : "border-stone-200 bg-white hover:border-stone-300"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{option.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-stone-900">
                        {option.label}
                      </h3>
                      {isSelected && (
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-700 text-xs text-white">
                          ✓
                        </div>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-stone-600">
                      {option.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="rounded-full border border-stone-300 bg-white px-6 py-3 font-medium transition hover:border-stone-900 disabled:cursor-not-allowed disabled:opacity-40"
        >
          ← Back
        </button>

        <button
          onClick={handleNext}
          disabled={!canProceed}
          className="rounded-full bg-stone-900 px-7 py-3 font-medium text-white shadow-sm transition hover:bg-green-800 hover:shadow disabled:cursor-not-allowed disabled:opacity-40"
        >
          {isLastStep ? "See My Matches" : "Next →"}
        </button>
      </div>
    </div>
  );
}
