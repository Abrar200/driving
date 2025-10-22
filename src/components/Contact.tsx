export default function Contact() {
  const handleCall = () => {
    window.location.href = 'tel:0410576773';
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#010101] to-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get in <span className="text-[#E1D956]">Touch</span>
          </h2>
          <p className="text-[#999885] text-lg">
            Ready to start your driving journey? Contact us today
          </p>
        </div>

        <div className="bg-[#010101] border-2 border-[#999885] rounded-lg p-8 sm:p-10 hover:border-[#E1D956] transition-all duration-500 hover:shadow-2xl hover:shadow-[#E1D956]/20 animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-fade-in-left">
              <h3 className="text-xl font-bold text-[#E1D956] mb-4">Contact</h3>
              <button
                onClick={handleCall}
                className="text-white text-2xl font-bold hover:text-[#E1D956] transition-all duration-300 mb-2 hover:scale-110 inline-block"
              >
                0410 576 773
              </button>
              <p className="text-[#999885] text-sm">Click to call</p>
            </div>

            <div className="animate-fade-in-right">
              <h3 className="text-xl font-bold text-[#E1D956] mb-4">Business Hours</h3>
              <div className="space-y-2 text-[#999885]">
                <div className="flex justify-between hover:text-white transition-colors duration-300">
                  <span>Monday</span>
                  <span className="text-white">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between hover:text-white transition-colors duration-300">
                  <span>Tuesday</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between hover:text-white transition-colors duration-300">
                  <span>Wednesday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between hover:text-white transition-colors duration-300">
                  <span>Saturday - Sunday</span>
                  <span className="text-red-400">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
