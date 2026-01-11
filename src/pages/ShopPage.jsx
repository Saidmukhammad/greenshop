import Container from "../components/common/Container";
import ShopGallery from "../components/shop/ShopGallery";
import ShopInfo from "../components/shop/ShopInfo";
import ShopTabs from "../components/shop/ShopTabs";
import RelatedProducts from "../components/shop/RelatedProducts";
import { shopProduct } from "../data/shopProducts"
import { products } from "../data/products";
import Breadcrumb from "../components/common/Breadcrumb";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ShopPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Если есть id, ищем продукт по id, иначе используем shopProduct
  const foundProduct = id ? products.find(p => p.id === Number(id)) : null;
  const currentProduct = foundProduct || shopProduct;

  // Если продукт не найден и был передан id, редиректим на главную
  useEffect(() => {
    if (id && !foundProduct) {
      navigate("/", { replace: true });
    }
  }, [id, foundProduct, navigate]);

  const relatedProducts = products
    .filter(p => p.id !== currentProduct.id)
    .slice(0, 4);

  // Подготовка данных продукта для отображения
  const displayProduct = {
    ...shopProduct,
    ...currentProduct,
    // Если у продукта только одно изображение, создаем массив
    images: currentProduct.images || (currentProduct.image ? [currentProduct.image] : shopProduct.images),
    // Если нет описания, используем из shopProduct
    description: currentProduct.description || shopProduct.description,
  };

  return (
    <section className="py-10">
      <Container>
        <Breadcrumb items={[
          {label: "Home", path: "/"},
          {label: "Shop", path: "/shop"},
          ...(id ? [{label: currentProduct.name, path: `/shop/${id}`}] : []),
        ]}/>
        <div className="grid grid-cols-1 lg:grid-cols-[550px_1fr] gap-8 lg:gap-12">
           <ShopGallery images={displayProduct.images} />
          <ShopInfo product={displayProduct} /> 
        </div>

         <ShopTabs description={displayProduct.description} /> 
         <RelatedProducts title="Related Products" products={relatedProducts} /> 
      </Container>
    </section>
  );
};

export default ShopPage;
