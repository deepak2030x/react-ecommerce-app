import { ShoppingCart } from "lucide-react";

export const ProductCard = ({ product }) => {
  return (
    <div className="card card-vertical d-flex direction-column relative shadow">
      <div className="card-image-container">
        <img
          className="card-image w-[250px]"
          src={product.images[0]}
          alt={product.slug}
        />
      </div>
      <div className="card-details">
        <div className="card-title">{product.title}</div>
        <div className="card-description">
          <p className="card-des">{product.description.slice(0, 100)}...</p>
          <p className="card-price">Rs. {product.price} </p>
        </div>
        <div className="cta-btn">
          <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">
            <ShoppingCart />
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
