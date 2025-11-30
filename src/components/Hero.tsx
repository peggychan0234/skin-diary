import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Peaceful person with healthy skin" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Take Control of Your <span className="text-secondary">Eczema</span>
            </h1>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Transform subjective symptoms into objective data. Get AI-powered insights, personalized recommendations, and track your progress with confidence.
            </p>
          </div>
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Start Free Trial
            </Button>
            <Button variant="medical" size="lg" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
              Learn More
            </Button>
          </div>
          <div className="animate-fade-in mt-8 text-sm text-white/80" style={{ animationDelay: "0.7s", opacity: 0 }}>
            <p>✓ No credit card required  ✓ 14-day free trial  ✓ Cancel anytime</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
