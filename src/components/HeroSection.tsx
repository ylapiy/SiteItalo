import { useState, useEffect } from "react";
import { Button } from "@/components/ui/buttonS";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import carousel1 from "@/assets/hero-image.jpg";
import carousel2 from "@/assets/hero-image.jpg";
import carousel3 from "@/assets/hero-image.jpg";
import Icone from "@/assets/81235b92-7f40-412e-bb08-7e36e4759ab0-removebg-preview.png"
import Beneficios from "./BenefitsSection.tsx"

const carouselData = [
  {
    image: carousel1,
    image2: Icone ,
    subtitle: "Advogado especialista em SISBAJUD"
  },
  {
    image: carousel2,
    image2:  Icone,
    subtitle: "Ajudando a entender o bloqueio e as possibilidades jurídicas"
  },
  {
    image: carousel3,
    image2:  Icone,
    subtitle: "Assessoria especializada em Direito Bancário e do Consumidor"
  }
];

 const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send/?phone=5586999765214&text=Ol%C3%A1%21+Tive+minha+conta+banc%C3%A1ria+bloqueada+e+gostaria+de+saber+como+prosseguir.&type=phone_number&app_absent=0', '_blank');
  };

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">




      {/* Background Images */}
      {carouselData.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-secondary"></div>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-accent"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-smooth"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-smooth"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col">
       <img
        src={carouselData[currentSlide].image2}
        alt="slide"
        className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto object-contain"
        />
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto transition-all duration-700">
          {carouselData[currentSlide].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center ">
          <Button variant="hero" size="lg" className="bg-green-500 hover:bg-green-600" onClick={handleWhatsApp}>
            Quero Falar com um Advogado <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      <Beneficios></Beneficios>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-3">
  {carouselData.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentSlide(index)}
      className={`w-4 h-4 rounded-full transition-all duration-300 ${
        index === currentSlide
          ? "bg-primary scale-125"
          : "bg-white/40 hover:bg-white/60"
      }`}
    />
  ))}
</div>

    </section>
  );
};

export default HeroCarousel;