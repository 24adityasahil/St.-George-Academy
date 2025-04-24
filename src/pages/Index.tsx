import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Campus from "@/components/Campus";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Campus />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
