import { useState } from "react";
import shopSearch from "../../assets/img/shopSearch.svg";

const ShopGallery = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="flex gap-6">
      {/* Thumbnails */}
      <div className="flex flex-col gap-4">
        {images.map((img) => (
          <button
            key={img}
            onClick={() => setActiveImage(img)}
            className={`w-[100px] h-[100px] bg-[#FBFBFB] border rounded-sm 
              flex items-center justify-center transition
              ${activeImage === img ? "border-[#46A358]" : "border-transparent"}
            `}
          >
            <img
              src={img}
              alt="product"
              className="object-contain w-full h-full"
            />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 bg-[#FBFBFB] flex items-center justify-center max-w-[426px] relative">
        <img
          src={activeImage}
          alt="active product"
          className="max-h-[500px] object-contain transition"
        />
        <button className="absolute top-5 right-5 p-2 bg-white rounded-full">
          <img src={shopSearch} alt="search" />
        </button>
      </div>
    </div>
  );
};

export default ShopGallery;