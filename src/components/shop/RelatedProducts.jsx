import { useState, useEffect } from "react";
import ProductCard from "../product/ProductCard";
import { products } from "../../data/products";

const ITEMS_PER_SLIDE = 5;
const AUTOPLAY_DELAY = 4000;

const RelatedProducts = ({ title }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = Math.ceil(products.length / ITEMS_PER_SLIDE);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="mt-24">
      {/* Title */}
      <h3 className="text-[#46A358] text-[17px] font-bold mb-11 border-b border-[#46A35880] pb-3">
        {title}
      </h3>

      {/* Slider */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="min-w-full">
              <div className="grid grid-cols-5 gap-8">
                {products
                  .slice(
                    slideIndex * ITEMS_PER_SLIDE,
                    (slideIndex + 1) * ITEMS_PER_SLIDE
                  )
                  .map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition
              ${
                currentSlide === index
                  ? "bg-[#46A358]"
                  : "bg-[#fff] hover:bg-[#BFBFBF] border-2 border-[#46A358]"
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
