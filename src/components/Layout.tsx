import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { useCart } from '../hooks/useCart';
import contentData from '../data/content.json';
import type { ContentData } from '../types';

const data = contentData as ContentData;

export const Layout: React.FC = () => {
  const { getCartItemCount } = useCart();
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header 
        navigation={data.navigation} 
        cartCount={getCartItemCount()} 
      />
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};
