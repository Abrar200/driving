import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  heroImageUrl: string;
  bookingUrl: string;
}

const heroSlides = [
  {
    image: 'https://d64gsuwffb70l.cloudfront.net/68f8d58c38d63ff3730353d4_1761139343320_c7ad56a6.webp',
    title: 'Learn to Drive with',
    highlight: 'Confidence',
    subtitle: 'Professional driving instruction in a safe, supportive environment'
  },
  {
    image: 'https://d64gsuwffb70l.cloudfront.net/68f8d58c38d63ff3730353d4_1761140474760_02c4da21.webp',
    title: 'Pass Your Test',
    highlight: 'First Time',
    subtitle: 'Expert guidance to help you succeed on test day'
  },
  {
    image: 'https://d64gsuwffb70l.cloudfront.net/68f8d58c38d63ff3730353d4_1761140259512_7e5f4cd0.webp',
    title: 'Experienced',
    highlight: 'Instructors',
    subtitle: 'Nationally qualified professionals dedicated to your success'
  }
];

export default function Hero({ bookingUrl }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setIsAnimating(true);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#010101]/80 via-[#010101]/70 to-[#010101]"></div>
          </div>
        </div>
      ))}
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 ${isAnimating ? 'animate-fade-in-up' : ''}`}>
          {heroSlides[currentSlide].title} <span className="text-[#E1D956]">{heroSlides[currentSlide].highlight}</span>
        </h1>
        <p className={`text-xl sm:text-2xl text-[#999885] mb-8 max-w-2xl mx-auto ${isAnimating ? 'animate-fade-in-up' : ''} [animation-delay:200ms]`}>
          {heroSlides[currentSlide].subtitle}
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isAnimating ? 'animate-fade-in-up' : ''} [animation-delay:400ms]`}>
          <button
            onClick={() => window.open(bookingUrl, '_blank')}
            className="bg-[#E1D956] text-[#010101] font-bold py-4 px-10 rounded-lg hover:bg-[#d4cc49] transition-all duration-300 text-lg shadow-lg hover:shadow-2xl hover:shadow-[#E1D956]/50 hover:scale-105 hover:-translate-y-1"
          >
            Book Your Lesson
          </button>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent border-2 border-[#999885] text-white font-bold py-4 px-10 rounded-lg hover:border-[#E1D956] hover:text-[#E1D956] transition-all duration-300 text-lg hover:scale-105 hover:-translate-y-1"
          >
            View Services
          </button>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#E1D956] w-8' : 'bg-white/50 w-3 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
