import { useState } from "react"
import greenfav from "../../assets/img/greenfav.png"
import fbbBlack from "../../assets/img/fbblack.png"
import twitterBlack from "../../assets/img/twitterblack.png"
import linkedinBlack from "../../assets/img/linkedinblack.png"
import messageBlack from "../../assets/img/messageblack.svg"
import { useNavigate } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { useToast } from "../../context/ToastContext"


const ShopInfo = ({ product }) => {
  const {
    name,
    price,
    rating,
    reviewsCount,
    sku,
    categories,
    tags,
    sizes,
  } = product

  const [activeSize, setActiveSize] = useState(sizes[0])
  const [quantity, setQuantity] = useState(1)

  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      size: activeSize,
    };
    addToCart(productToAdd, quantity);
    showToast(`${name} added to cart!`, "success");
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/cart');
  };

  return (
    <div>
      <h1 className="text-[28px] font-bold leading-[16px] text-[#3D3D3D] mb-2">
        {name}
      </h1>

      <div className="flex items-center justify-between border-b border-[#46A35880] pb-3 mb-4">
        <span className="text-[#46A358] text-[22px] font-bold leading-[16px]">
          ${price}.00
        </span>

        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center gap-[2px]">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill={star <= rating ? "#FFAC0C" : "#E5E5E5"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L14.9 8.6L22 9.3L16.8 14L18.3 21L12 17.3L5.7 21L7.2 14L2 9.3L9.1 8.6L12 2Z" />
              </svg>
            ))}
          </div>

          <span className="text-[#3D3D3D] text-[15px] leading-[16px]">
            {reviewsCount} Customer Review
          </span>
        </div>
      </div>

      {/* Short description */}
      <h4 className="text-[#3D3D3D] text-[15px] leading-[16px] font-medium">
        Short Description:
      </h4>
      <p className="text-[#727272] mb-6 mt-[10px] leading-6 text-[14px] tracking-[0.6px]">
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground.
      </p>

      <div className="mb-6">
        <h4 className="text-[#3D3D3D] font-medium text-[15px] leading-[16px] mb-3">
          Size:
        </h4>
        <div className="flex gap-3">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`w-10 h-10 rounded-full border transition 
                ${
                  activeSize === size
                    ? "border-[#46A358] text-[#46A358] text-[18px] font-bold"
                    : "border-[#EAEAEA] text-[#727272] font-medium text-[14px]"
                }
              `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center overflow-hidden">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-[33px] h-[38px] text-lg bg-[#46A358] hover:bg-[#46A358CC] transition text-white rounded-full"
          >
            −
          </button>
          <span className="px-4">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-[33px] h-[38px] text-lg bg-[#46A358] hover:bg-[#46A358CC] transition text-white rounded-full"
          >
            +
          </button>
        </div>

        <button 
          className="px-8 py-3 bg-[#46A358] text-white text-[14px] leading-5 font-bold rounded-md tracking-[1px]"
          onClick={handleBuyNow}
        >
          BUY NOW
        </button>
        <button 
          className="px-8 py-3 border border-[#46A358] text-[#46A358] text-[14px] leading-5 font-bold rounded-md tracking-[1px]"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
        <button 
          className="px-[10px] py-3 border border-[#46A358] rounded-md hover:bg-[#46A3581A] transition"
          aria-label="Add to favorites"
        >
          <img src={greenfav} alt="Add to favorites" />
        </button>
      </div>

      <div className="text-sm space-y-1">
        <p className="text-gray-600 leading-[16px]">
          <span className=" text-gray-400">SKU:</span> {sku}
        </p>
        <p className="text-gray-600 leading-[16px]">
          <span className=" text-gray-400">Categories:</span>{" "}
          {categories.join(", ")}
        </p>
        <p className="text-gray-600 leading-[16px]">
          <span className=" text-gray-400">Tags:</span> {tags.join(", ")}
        </p>
      </div>
      <div className="flex gap-3 items-center mt-5">
        <p className="text-[#3D3D3D] text-[15px] leading-[16px] font-medium">
          Share this products:
        </p>
        <div className="flex items-center gap-4 text-[#3D3D3D]">
          <img
            src={fbbBlack}
            alt="Facebook"
            className="cursor-pointer hover:text-[#46A358] hover:opacity-70 transition"
          />
          <img
            src={twitterBlack}
            alt="Twitter"
            className="cursor-pointer hover:text-[#46A358] hover:opacity-70 transition"
          />
          <img
            src={linkedinBlack}
            alt="LinkedIn"
            className="cursor-pointer hover:text-[#46A358] hover:opacity-70 transition"
          />
          <img
            src={messageBlack}
            alt="Message"
            className="cursor-pointer hover:text-[#46A358] hover:opacity-70 transition"
          />
        </div>
      </div>
    </div>
  );
}

export default ShopInfo