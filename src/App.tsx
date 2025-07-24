import { useEffect, useState } from "react";
import { getAllProducts } from "./api/getAllProducts";
import { ProductCard } from "./components/ProductCard";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getAllProducts();
      setProducts(data);
    })();
  }, []);
  return (
    <main className="flex flex-wrap gap-4 justify-center">
      {products.length > 0 &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </main>
  );
}

export default App;
