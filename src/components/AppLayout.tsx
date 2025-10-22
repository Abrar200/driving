import Header from './Header';
import Hero from './Hero';
import About from './About';
import ServicesGrid from './ServicesGrid';
import Contact from './Contact';
import Footer from './Footer';

export default function AppLayout() {
  const logoUrl = 'https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1761138027161_748b355c.png';
  const heroImageUrl = 'https://d64gsuwffb70l.cloudfront.net/68f8d58c38d63ff3730353d4_1761138104390_8b886cd8.webp';
  const instructorImageUrl = 'https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1761139612541_56d4dd87.jpg';
  const bookingUrl = 'https://northside-driving-school.square.site/';

  return (
    <div className="min-h-screen bg-[#010101]">
      <Header logoUrl={logoUrl} bookingUrl={bookingUrl} />
      <Hero heroImageUrl={heroImageUrl} bookingUrl={bookingUrl} />
      <About instructorImageUrl={instructorImageUrl} />
      <ServicesGrid />
      <Contact />
      <Footer bookingUrl={bookingUrl} />
    </div>
  );
}

