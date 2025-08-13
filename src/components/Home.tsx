import { Hero } from "./Hero";
import { WhyChoose } from "./WhyChoose";
import { BestSellers } from "./BestSellers";
import { Testimonials } from "./Testimonials";
import { PromotionBanner } from "./PromotionBanner";
import { BlogSection } from "./BlogSection";
import type { ContentData } from "../types";
import contentData from "../data/content.json";

const data = contentData as ContentData;

export const Home: React.FC = () => {
  return (
    <>
      <Hero hero={data.hero} />

      <WhyChoose whyChoose={data.whyChoose} />

      <BestSellers bestSellers={data.bestSellers} />

      <Testimonials testimonials={data.testimonials} />

      <PromotionBanner promotion={data.promotion} />

      <BlogSection blog={data.blog} />
    </>
  );
};
