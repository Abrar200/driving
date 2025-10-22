import ServiceCard from './ServiceCard';

export default function ServicesGrid() {
  const services = [
    {
      title: 'VORT (Vehicle On-Road Test)',
      duration: '1 hour',
      price: 'Contact for pricing',
      bookingUrl: 'https://book.squareup.com/appointments/nb6ubbfwr7yr21/location/LDVRJ3VZYG2T2/services/XO6PJST3SLMRMKJM2PU5N477'
    },
    {
      title: 'Overseas Licence Conversion Course',
      duration: '6 hours',
      price: 'Contact for pricing',
      bookingUrl: 'https://book.squareup.com/appointments/nb6ubbfwr7yr21/location/LDVRJ3VZYG2T2/services/RFHXCC7RY7Q5KE5APQKSWM7U'
    },
    {
      title: 'One-Day Intensive VORT Package',
      duration: '8 hours',
      price: 'Contact for pricing',
      bookingUrl: 'https://book.squareup.com/appointments/nb6ubbfwr7yr21/location/LDVRJ3VZYG2T2/services/BL3IBIUDYY2V6FMY6DCTW67Q'
    },
    {
      title: '90-Minute Driving Lesson',
      duration: '1 hour 30 minutes',
      price: '$150',
      bookingUrl: 'https://book.squareup.com/appointments/nb6ubbfwr7yr21/location/LDVRJ3VZYG2T2/services/ADG6YZNJ2OSKMP4HS2WH76Q7'
    },
    {
      title: '1 Hour Pre-VORT Lesson + VORT Test',
      duration: '2 hours',
      price: 'Contact for pricing',
      bookingUrl: 'https://book.squareup.com/appointments/nb6ubbfwr7yr21/location/LDVRJ3VZYG2T2/services/KRJ54FJY7MDIL7NLYMTQOWYN'
    },
    {
      title: '1 Hour Driving Lesson',
      duration: '1 hour',
      price: '$105',
      bookingUrl: 'https://book.squareup.com/appointments/nb6ubbfwr7yr21/location/LDVRJ3VZYG2T2/services/CMHRKM2HY44GLTZYNMXM6HKQ'
    }
  ];


  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#010101]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#E1D956]">Services</span>
          </h2>
          <p className="text-[#999885] text-lg max-w-2xl mx-auto">
            Choose the perfect lesson package for your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                title={service.title}
                duration={service.duration}
                price={service.price}
                bookingUrl={service.bookingUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
