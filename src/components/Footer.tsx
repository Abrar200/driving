interface FooterProps {
  bookingUrl: string;
}

export default function Footer({ bookingUrl }: FooterProps) {
  const handleBookNow = () => {
    window.open(bookingUrl, '_blank');
  };

  return (
    <footer className="bg-[#010101] border-t border-[#999885] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <button
            onClick={handleBookNow}
            className="bg-[#E1D956] text-[#010101] font-bold py-3 px-8 rounded-lg hover:bg-[#d4cc49] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E1D956]/50 hover:-translate-y-1"
          >
            Book Your Lesson Now
          </button>
        </div>

        <div className="border-t border-[#999885] pt-8 text-center animate-fade-in">
          <p className="text-white font-bold text-lg mb-2 hover:text-[#E1D956] transition-colors duration-300">Northside Driving School</p>
          <p className="text-[#999885] mb-4">Professional Driving Instruction</p>
          <p className="text-[#999885] text-sm">
            © {new Date().getFullYear()} Northside Driving School. Powered by{' '}
            <a 
              href="https://nexadigital.com.au/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#E1D956] hover:text-[#d4cc49] transition-all duration-300 font-semibold hover:scale-110 inline-block"
            >
              Nexa Digital
            </a>
          </p>

        </div>
      </div>
    </footer>
  );
}
