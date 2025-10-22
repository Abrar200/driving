interface HeaderProps {
  logoUrl: string;
  bookingUrl: string;
}

export default function Header({ logoUrl, bookingUrl }: HeaderProps) {
  const handleBookNow = () => {
    window.open(bookingUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#010101] border-b border-[#999885] z-50 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={logoUrl} 
            alt="Northside Driving School" 
            className="h-16 sm:h-20 w-auto cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[#999885] hover:text-[#E1D956] transition-all duration-300 font-medium hover:scale-110"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-[#999885] hover:text-[#E1D956] transition-all duration-300 font-medium hover:scale-110"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="text-[#999885] hover:text-[#E1D956] transition-all duration-300 font-medium hover:scale-110"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-[#999885] hover:text-[#E1D956] transition-all duration-300 font-medium hover:scale-110"
          >
            Contact
          </button>
        </nav>

        <button
          onClick={handleBookNow}
          className="bg-[#E1D956] text-[#010101] font-bold py-3 px-6 sm:px-8 rounded-lg hover:bg-[#d4cc49] transition-all duration-300 text-sm sm:text-base hover:scale-105 hover:shadow-lg hover:shadow-[#E1D956]/50"
        >
          Book Now
        </button>
      </div>
    </header>
  );
}
