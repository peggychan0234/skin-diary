import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">DermTrack</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering eczema patients with data-driven insights and personalized care.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-smooth">Features</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-smooth">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Medical Disclaimer</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-smooth">About</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-smooth">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 DermTrack. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for eczema patients
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
