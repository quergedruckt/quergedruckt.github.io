'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Step = {
  id: number
  title: string
  question: string
  options: string[]
}

const steps: Step[] = [
  {
    id: 1,
    title: "Purpose",
    question: "What do you want to print?",
    options: [
      "Replacement part",
      "Decorative item",
      "Functional prototype",
      "Educational model",
      "Art piece"
    ]
  },
  {
    id: 2,
    title: "Environment",
    question: "Where will it be used?",
    options: [
      "Indoor decoration",
      "Outdoor use",
      "Mechanical part",
      "Kitchen/High temperature",
      "Flexible/Soft application"
    ]
  },
  {
    id: 3,
    title: "Properties",
    question: "What properties are important?",
    options: [
      "Strength and durability",
      "Flexibility",
      "Heat resistance",
      "Color options",
      "Smooth finish"
    ]
  }
]

export default function WizardPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentStep]: answer })
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const getRecommendation = () => {
    const purpose = answers[0]
    const environment = answers[1]
    const properties = answers[2]

    if (environment === "Outdoor use" || properties === "Strength and durability") {
      return "PETG"
    } else if (environment === "Kitchen/High temperature") {
      return "ABS"
    } else if (properties === "Flexibility") {
      return "TPU"
    } else {
      return "PLA"
    }
  }

  const getMaterialDescription = (material: string) => {
    switch (material) {
      case "PETG":
        return "Great for outdoor use and strong parts. Resistant to heat and chemicals."
      case "ABS":
        return "Perfect for high-temperature applications. Strong and durable."
      case "TPU":
        return "Flexible and rubber-like. Great for parts that need to bend or flex."
      default:
        return "Perfect for most indoor applications. Easy to print and available in many colors."
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Guided Process</h1>

      {currentStep < steps.length ? (
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-8">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex-1 h-2 mx-1 rounded-full ${
                  index <= currentStep ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{steps[currentStep].title}</h2>
            <p className="text-lg mb-6">{steps[currentStep].question}</p>
            
            <div className="space-y-3">
              {steps[currentStep].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Your Recommendation</h2>
          <div className="space-y-6">
            <div>
              <p className="text-lg mb-2">
                Based on your answers, we recommend using <strong>{getRecommendation()}</strong> material.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {getMaterialDescription(getRecommendation())}
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => router.push('/quote')}
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Get a Quote
              </button>
              <button
                onClick={() => setCurrentStep(0)}
                className="block w-full border border-gray-300 text-center py-3 rounded-xl hover:bg-gray-50 transition"
              >
                Start Over
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <button
          onClick={() => router.back()}
          className="text-blue-600 hover:text-blue-700"
        >
          ← Back
        </button>
      </div>
    </div>
  )
} 