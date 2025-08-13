import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {/* Add more routes as needed */}
        <Route
          path="/shop"
          element={
            <div className="container mx-auto py-12 px-4">
              <h1 className="text-4xl font-bold mb-8">Shop</h1>
              <p className="text-lg">
                Our product collection will be available soon.
              </p>
            </div>
          }
        />
        <Route
          path="/spa"
          element={
            <div className="container mx-auto py-12 px-4">
              <h1 className="text-4xl font-bold mb-8">Spa Services</h1>
              <p className="text-lg">
                Our spa services will be available soon.
              </p>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="container mx-auto py-12 px-4">
              <h1 className="text-4xl font-bold mb-8">About Us</h1>
              <p className="text-lg">Learn more about our brand and mission.</p>
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="container mx-auto py-12 px-4">
              <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
              <p className="text-lg">Get in touch with our team.</p>
            </div>
          }
        />
        <Route
          path="/women"
          element={
            <div className="container mx-auto py-12 px-4">
              <h1 className="text-4xl font-bold mb-8">Women's Products</h1>
              <p className="text-lg">
                Our women's collection will be available soon.
              </p>
            </div>
          }
        />
        <Route
          path="/men"
          element={
            <div className="container mx-auto py-12 px-4">
              <h1 className="text-4xl font-bold mb-8">Men's Products</h1>
              <p className="text-lg">
                Our men's collection will be available soon.
              </p>
            </div>
          }
        />
        <Route
          path="/kiddies"
          element={
            <div className="container mx-auto py-12 px-4">
              <h1 className="text-4xl font-bold mb-8">Kids' Products</h1>
              <p className="text-lg">
                Our kids' collection will be available soon.
              </p>
            </div>
          }
        />
        <Route
          path="/new"
          element={
            <div className="container mx-auto py-12 px-4">
              <h1 className="text-4xl font-bold mb-8">New Arrivals</h1>
              <p className="text-lg">
                Check back soon for our newest products.
              </p>
            </div>
          }
        />
        <Route
          path="/popular"
          element={
            <div className="container mx-auto py-12 px-4">
              <h1 className="text-4xl font-bold mb-8">Popular Products</h1>
              <p className="text-lg">
                Our most popular products will be featured here soon.
              </p>
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div className="container mx-auto py-12 px-4">
              <h1 className="text-4xl font-bold mb-8">Page Not Found</h1>
              <p className="text-lg">
                The page you're looking for doesn't exist.
              </p>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
