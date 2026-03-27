"use client"

import { useState } from "react"
import { GraduationCap, Briefcase, Users, Heart, Lightbulb, BookOpen } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Structured Pathways",
    description:
      "We do not deliver one-time support. We deliver structured pathways — a guided journey from crisis to stability, from stability to income, and from income to independence.",
  },
  {
    icon: Briefcase,
    title: "Measurable Outcomes",
    description:
      "We do not focus on activity. We focus on outcomes. Every stage of our programme is tracked across 30, 60, and 90-day intervals to ensure sustained progress.",
  },
  {
    icon: Users,
    title: "Community-Led Delivery",
    description:
      "We identify individuals in crisis through trusted community networks and deliver support through locally embedded teams who understand the context.",
  },
  {
    icon: Heart,
    title: "Dignity First",
    description:
      "We stabilise immediate needs so individuals can regain dignity and focus. Restoring a sense of self-worth is the foundation of every journey we support.",
  },
  {
    icon: Lightbulb,
    title: "Income Generation",
    description:
      "We support income generation through practical tools, guidance, and structured support — enabling individuals to move from dependency toward earning.",
  },
  {
    icon: BookOpen,
    title: "Designed for Scale",
    description:
      "Our model is built for replication through structured delivery and measurable tracking, allowing us to expand reach without compromising the quality of outcomes.",
  },
]

export function DonationFeatures() {
  // Track which feature descriptions are expanded
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({})

  // Toggle expanded state for a specific feature
  const toggleExpand = (title: string) => {
    setExpandedFeatures((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-600">A repeatable model built for real, measurable impact</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6 w-16 h-16 rounded-full bg-[#B5D858]/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-[#B5D858]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>

                <div className="flex-1 flex flex-col">
                  {/* Description with fixed height and optional expansion */}
                  <div className="text-gray-600 mb-2">
                    {expandedFeatures[feature.title] ? (
                      feature.description
                    ) : (
                      <p className="line-clamp-3">{feature.description}</p>
                    )}
                  </div>

                  {/* Show "Read more" button only if description is long enough */}
                  {feature.description.length > 120 && (
                    <button
                      onClick={() => toggleExpand(feature.title)}
                      className="text-[#B5D858] text-sm font-medium hover:underline mt-auto"
                    >
                      {expandedFeatures[feature.title] ? "Read less" : "Read more"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

