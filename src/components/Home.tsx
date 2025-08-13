import { Header } from "./Header";
import { Hero } from "./Hero";
import { WhyChoose } from "./WhyChoose";
import { BestSellers } from "./BestSellers";
import { Testimonials } from "./Testimonials";
import { PromotionBanner } from "./PromotionBanner";
import { BlogSection } from "./BlogSection";
import { Footer } from "./Footer";
import { useCart } from "../hooks/useCart";
import contentData from "../data/content.json";
import type { ContentData } from "../types";

const data = contentData as ContentData;

export const Home: React.FC = () => {
  const { getCartItemCount } = useCart();
  return (
    <div className="min-h-screen bg-white">
      <Header navigation={data.navigation} 
        cartCount={getCartItemCount()} />
      
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