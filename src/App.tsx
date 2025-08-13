import { Routes, Route } from "react-router-dom"
import { Home } from "./components/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add more routes as needed */}
      <Route path="/shop" element={<div>Shop Page (Coming Soon)</div>} />
      <Route path="/spa" element={<div>Spa Page (Coming Soon)</div>} />
      <Route path="/about" element={<div>About Page (Coming Soon)</div>} />
      <Route path="/contact" element={<div>Contact Page (Coming Soon)</div>} />
      <Route path="/women" element={<div>Women's Products (Coming Soon)</div>} />
      <Route path="/men" element={<div>Men's Products (Coming Soon)</div>} />
      <Route path="/kiddies" element={<div>Kids' Products (Coming Soon)</div>} />
      <Route path="/new" element={<div>New Products (Coming Soon)</div>} />
      <Route path="/popular" element={<div>Popular Products (Coming Soon)</div>} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  )
}

export default App
