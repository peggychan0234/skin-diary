import appPreview from "@/assets/app-preview.jpg";

const steps = [
  {
    number: "01",
    title: "Complete Medical Profile",
    description: "Tell us about your eczema type, known allergens, current treatments, and skin type."
  },
  {
    number: "02",
    title: "Daily Quick Logs",
    description: "Track itch, dryness, sleep, and stress in under 60 seconds each day."
  },
  {
    number: "03",
    title: "Weekly Photo Analysis",
    description: "Capture standardized photos for AI-powered severity scoring and BSA assessment."
  },
  {
    number: "04",
    title: "Get Insights & Recommendations",
    description: "Receive personalized product suggestions and discover correlations between lifestyle and symptoms."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              How DermTrack Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to transform your eczema management from reactive to proactive
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
              <div className="relative z-10">
                <img 
                  src={appPreview} 
                  alt="DermTrack app interface preview" 
                  className="w-full rounded-2xl shadow-card"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-accent opacity-20 rounded-2xl blur-3xl transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
