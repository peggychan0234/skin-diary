import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Get started with basic tracking",
    features: [
      "Basic symptom logging",
      "Limited product database access",
      "General category recommendations",
      "7-day data history"
    ],
    cta: "Start Free",
    variant: "outline" as const
  },
  {
    name: "Premium",
    price: "$12.99",
    period: "/month",
    description: "Unlock the full power of DermTrack",
    features: [
      "AI photo analysis & severity scoring",
      "Personalized regimen builder",
      "Full product database with specific recommendations",
      "Unlimited data history",
      "Correlation insights dashboard",
      "Interactive data visualizations",
      "Weekly correlation reports",
      "Ad-free experience",
      "Priority support"
    ],
    cta: "Start 14-Day Free Trial",
    variant: "hero" as const,
    popular: true
  }
];

const Pricing = () => {
  return (
    <section className="py-24 bg-background" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 relative animate-fade-in ${
                plan.popular 
                  ? 'border-primary shadow-soft scale-105' 
                  : 'border-border/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <Button variant={plan.variant} size="lg" className="w-full mb-6">
                {plan.cta}
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>All plans include our medical disclaimer and privacy-first approach. Your health data is never sold to third parties.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
