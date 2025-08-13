import { Hero } from "./Hero";
import { WhyChoose } from "./WhyChoose";
import { BestSellers } from "./BestSellers";
import { Testimonials } from "./Testimonials";
import { PromotionBanner } from "./PromotionBanner";
import { BlogSection } from "./BlogSection";

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      <WhyChoose />
      
      <BestSellers />
      
      <Testimonials />
      
      <PromotionBanner />
      
      <BlogSection />
    </>
  );
};