import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import PromoBanners from './components/PromoBanners';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BrandRepairPage from './components/BrandRepairPage';
import GetQuotePage from './components/GetQuotePage';
import AboutUsPage from './components/AboutUsPage';
import ScheduleRepairPage from './components/ScheduleRepairPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <PromoBanners />
      <Reviews />
      <FAQ />
      <ContactForm />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/repair/:brandId" element={<BrandRepairPage />} />
            <Route path="/get-quote" element={<GetQuotePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/schedule-repair" element={<ScheduleRepairPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
