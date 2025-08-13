import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useCartContext } from "../context/useCartContext";
import contentData from "../data/content.json";
import type { ContentData } from "../types";

const data = contentData as ContentData;

export const Layout: React.FC = () => {
  const { getCartItemCount } = useCartContext();

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col max-w-7xl mx-auto px-2 lg:px-4">
        <Header navigation={data.navigation} cartCount={getCartItemCount()} />

        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      <Footer footer={data.footer} />
    </>
  );
};
