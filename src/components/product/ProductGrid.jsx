import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[41px]">
      {products.map((product) => (
        <ProductCard 
            key={product.id} 
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            oldPrice={product.oldPrice}
            isNew={product.isNew}
            sale={product.sale}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
