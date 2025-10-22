interface AboutProps {
  instructorImageUrl: string;
}

export default function About({ instructorImageUrl }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-[#010101]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Northside Driving School
          </h2>
          <div className="w-24 h-1 bg-[#E1D956] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-[#999885] animate-fade-in-left">
            <p className="text-lg leading-relaxed">
              At Northside Driving School, our mission is to help learners become confident, safe, and responsible drivers. We're committed to providing high-quality driver education that ensures our roads remain safe for everyone.
            </p>
            <p className="text-lg leading-relaxed">
              Led by <span className="text-[#E1D956] font-semibold">Reshad Faquiri</span>, a Nationally Qualified Driving Instructor, Northside Driving School offers professional, patient, and personalised training tailored to each student's needs. Whether you're a first-time learner, converting an overseas licence, or preparing for your VORT test, we're here to guide you every step of the way.
            </p>
            <p className="text-lg leading-relaxed">
              Based in Adelaide, South Australia, we take pride in delivering lessons that focus on skill, awareness, and confidence behind the wheel. With flexible booking options and modern training vehicles, you'll receive the best preparation to pass your test and drive with assurance for life.
            </p>
          </div>

          <div className="relative animate-fade-in-right group">
            <div className="absolute inset-0 bg-[#E1D956] rounded-lg transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img 
              src={instructorImageUrl} 
              alt="Reshad Faquiri - Driving Instructor" 
              className="relative rounded-lg shadow-2xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
