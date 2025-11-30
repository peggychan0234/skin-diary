import { Activity, BookOpen, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Personalized Regimen Builder",
    description: "Get AI-powered product recommendations tailored to your allergens and skin type, with full ingredient transparency.",
    details: [
      "Curated product database",
      "Allergen cross-reference",
      "Clear justifications for every recommendation"
    ]
  },
  {
    icon: Activity,
    title: "Quantitative Symptom Logger",
    description: "Track itch intensity, skin dryness, sleep quality, and stress levels. Use AI photo analysis for objective severity scores.",
    details: [
      "Daily quick logs (under 60 seconds)",
      "Weekly photo-based severity assessment",
      "Body area mapping and BSA tracking"
    ]
  },
  {
    icon: TrendingUp,
    title: "Insights & Correlation Dashboard",
    description: "Discover patterns between your lifestyle and skin condition with interactive visualizations and correlation reports.",
    details: [
      "Interactive trend graphs",
      "Weekly/monthly correlation reports",
      "Data-driven actionable insights"
    ]
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Three Core Features, One Goal
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Evidence-based tools designed to help you understand and manage your eczema with data, not guesswork.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card shadow-card hover:shadow-soft transition-smooth border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              <div className="mb-6">
                <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>
              </div>
              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-sm text-muted-foreground">
                    <span className="text-secondary mr-2 mt-0.5">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
