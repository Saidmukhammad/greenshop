import Container from "../../common/Container";
import Breadcrumb from "../../common/Breadcrumb";
import { useCart } from "../../../context/CartContext";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import RelatedProducts from "../RelatedProducts";

const ShoppingCart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    getCartTotal,
  } = useCart();

  const subtotal = getCartTotal();
  const discount = 100.0;
  const shipping = 16.0;
  const total = subtotal - discount + shipping;

  return (
    <div className="pt-9 mb-32">
      <Container>
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Shop", path: "/shop" },
            { label: "Shopping Cart", path: "/cart" },
          ]}
        />
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            <CartItems
              items={cartItems}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeFromCart}
            />

            <CartSummary
              subtotal={subtotal}
              shipping={shipping}
              discount={discount}
              total={total}
            />
          </div>
        <RelatedProducts title={"You may be interested in"} />
      </Container>
    </div>
  );
};

export default ShoppingCart;