interface ServiceCardProps {
  title: string;
  duration: string;
  price: string;
  bookingUrl: string;
}

export default function ServiceCard({ title, duration, price, bookingUrl }: ServiceCardProps) {
  const handleBookNow = () => {
    window.open(bookingUrl, '_blank');
  };

  return (
    <div className="bg-[#010101] border-2 border-[#999885] rounded-lg p-6 hover:border-[#E1D956] transition-all duration-500 hover:shadow-2xl hover:shadow-[#E1D956]/30 hover:-translate-y-2 hover:scale-105 group">
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E1D956] transition-colors duration-300">{title}</h3>
      <div className="space-y-2 mb-4">
        <p className="text-[#999885] flex items-center transition-all duration-300 group-hover:text-white">
          <span className="text-[#E1D956] mr-2 group-hover:scale-125 transition-transform duration-300">⏱</span>
          {duration}
        </p>
        <p className="text-white font-semibold text-lg group-hover:scale-105 transition-transform duration-300">{price}</p>
      </div>
      <button
        onClick={handleBookNow}
        className="w-full bg-[#E1D956] text-[#010101] font-bold py-3 px-6 rounded-lg hover:bg-[#d4cc49] transition-all duration-300 hover:shadow-lg hover:scale-105"
      >
        Book Now
      </button>
    </div>
  );
}
