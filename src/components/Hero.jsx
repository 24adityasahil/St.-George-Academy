
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative hero-gradient text-white min-h-screen pt-24 flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-0"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Excellence in Education at <span className="text-school-secondary">St. George Academy</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 md:mb-12 text-white/90 max-w-2xl mx-auto">
            Shaping tomorrow's leaders through academic excellence, 
            character development, and innovative learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-school-secondary hover:bg-school-secondary/90 text-school-dark font-semibold">
              Explore Programs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
