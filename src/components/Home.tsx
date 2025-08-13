import { Header } from "./Header";
import { Hero } from "./Hero";
import { WhyChoose } from "./WhyChoose";
import { BestSellers } from "./BestSellers";
import { Testimonials } from "./Testimonials";
import { PromotionBanner } from "./PromotionBanner";
import { BlogSection } from "./BlogSection";
import { Footer } from "./Footer";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        <WhyChoose />
        
        <BestSellers />
        
        <Testimonials />
        
        <PromotionBanner />
        
        <BlogSection />
      </main>
      
      <Footer />
    </div>
  );
};