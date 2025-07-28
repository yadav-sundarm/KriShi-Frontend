import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./footer";
const products = [
  {
    id: 1,
    name: "Ai Based AgriShield Dome",
    price: "₹53,000",
    image: "/static/domeimg.jpg",
    description:
      "A solar-powered foldable dome that protects 1 acre of crops from heat, rain, and hail. Integrated with ai for amart control",
  },
  {
    id: 2,
    name: "Soil & Water Mini Kit",
    price: "₹2,500",
    image: "/static/minkit.jpg",
    description:
      "Test pH, NPK, moisture, and water quality on the field. Portable, app-integrated, and perfect for small farms.",
  },
];

const ProductsPage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const handleBuy = () => {
    if (!user) {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="products-page">
        <h1>Our Products</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <p className="desc">{product.description}</p>
              <button onClick={handleBuy} className="buy-btn">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
