import { useNavigate } from "react-router-dom";
import { BUTTON_STYLES, COLOR } from "../../styles/constants";
import cartGreen from "../../assets/img/cart-green.png";
import fav from "../../assets/img/favourite.png";
import loop from "../../assets/img/loop.png";
import { useCart } from "../../context/CartContext";
import { useToast } from "../../context/ToastContext";

const ICON_BUTTONS = [
  { icon: cartGreen, alt: "Add to cart", id: "cart" },
  { icon: fav, alt: "Add to favorites", id: "favorite" },
  { icon: loop, alt: "Quick view", id: "view" },
];

const ProductBadges = ({ sale, isNew }) => {
  if (!sale && !isNew) return null;

  return (
    <div className="absolute left-0 top-3 flex flex-col gap-2">
      {sale && (
        <span className="bg-[#46A358] text-white text-sm font-medium px-2 py-1">
          {sale}% OFF
        </span>
      )}
      {isNew && (
        <span className="bg-blue-500 text-white text-sm font-medium px-2 py-1">
          NEW
        </span>
      )}
    </div>
  );
};

const ProductPrice = ({ price, oldPrice }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[#46A358] text-lg font-bold">
        ${price?.toLocaleString()}
      </span>
      {oldPrice && (
        <span className="line-through text-[#A5A5A5] text-sm font-normal">
          ${oldPrice.toLocaleString()}
        </span>
      )}
    </div>
  );
};

const ProductCard = ({ id, name, image, price, oldPrice, isNew, sale }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleCardClick = () => {
    navigate(`/shop/${id}`);
  };

  const handleAction = (e, actionId) => {
    e.stopPropagation();
    
    const product = { id, name, image, price, oldPrice, isNew, sale };
    
    switch (actionId) {
      case "cart":
        addToCart(product, 1);
        showToast(`${name} added to cart!`, "success");
        break;
      case "favorite":
        showToast("Favorites functionality coming soon!", "info");
        break;
      case "view":
        navigate(`/shop/${id}`);
        break;
      default:
        break;
    }
  };

  return (
    <article
      onClick={handleCardClick}
      className="p-4 relative group bg-white cursor-pointer border-t border-transparent hover:border-[#46A358] hover:shadow-xl transition-all duration-300 rounded-sm flex flex-col"
    >
      {/* Image */}
      <div className="h-[250px] bg-[#FBFBFB] flex items-center justify-center relative overflow-hidden">
        <img
          src={image || "placeholder.jpg"}
          alt={name}
          className="object-contain h-full w-full transform group-hover:scale-105 transition-transform duration-300"
        />
        <ProductBadges sale={sale} isNew={isNew} />
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        {ICON_BUTTONS.map(({ icon, alt, id }) => (
          <button
            key={id}
            onClick={(e) => handleAction(e, id)}
            className={BUTTON_STYLES.iconButton}
            aria-label={alt}
            type="button"
          >
            <img src={icon} alt={alt} className="w-5 h-5 object-contain" />
          </button>
        ))}
      </div>

      {/* Info */}
      <div className="mt-2">
        <h3 className="text-[#3D3D3D] text-base mb-1 truncate font-normal">
          {name}
        </h3>
        <ProductPrice price={price} oldPrice={oldPrice} />
      </div>
    </article>
  );
};

export default ProductCard;
