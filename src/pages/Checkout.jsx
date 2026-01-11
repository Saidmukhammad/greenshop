import Container from "../components/common/Container";
import Breadcrumb from "../components/common/Breadcrumb";
import BillingForm from "../components/shop/Checkout/BillingForm";
import OrderSummary from "../components/shop/Checkout/OrderSummary";
import { useState } from "react";
import OrderSuccessModal from "../components/shop/Checkout/OrderSuccessModal";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [validateForm, setValidateForm] = useState(null);
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const handlePlaceOrder = () => {
    // Принудительная валидация при нажатии кнопки
    let isValid = isFormValid;
    if (validateForm) {
      isValid = validateForm();
    }
    
    if (!isValid) {
      alert("Please fill in all required fields correctly.");
      return;
    }
    setIsModalOpen(true);
  }

  const handleOrderSuccess = () => {
    clearCart();
    setIsModalOpen(false);
  }

  const subtotal = getCartTotal();
  const shipping = 16;
  const discount = 0;
  const total = subtotal + shipping - discount;

  // Данные для модального окна
  const orderData = {
    orderNumber: Math.floor(Math.random() * 100000000).toString(),
    date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
    total: total,
    paymentMethod: "Cash on delivery",
    items: cartItems,
  };

  // Если корзина пуста, перенаправляем на страницу магазина
  if (cartItems.length === 0) {
    return (
      <div className="mt-9 mb-[200px]">
        <Container>
          <Breadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Shop", path: "/shop" },
              { label: "Checkout", path: "/checkout" },
            ]}
          />
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4">Your cart is empty</h2>
            <p className="text-[#727272] mb-6">Add some items to your cart before checkout.</p>
            <button
              onClick={() => navigate('/shop')}
              className="bg-[#46A358] text-white px-8 py-3 rounded-md font-bold hover:bg-[#3d8e4f] transition"
            >
              Continue Shopping
            </button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="mt-9 mb-[200px]">
      <Container>
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Shop", path: "/shop" },
            { label: "Checkout", path: "/checkout" },
          ]}
        />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8">
          <BillingForm 
            onValidationChange={setIsFormValid} 
            onValidate={setValidateForm}
          />
          <OrderSummary
            items={cartItems}
            subtotal={subtotal}
            shipping={shipping}
            discount={discount}
            total={total}
            onPlaceOrder={handlePlaceOrder}
          />
        </div>
      </Container>
      
      {isModalOpen && (
        <OrderSuccessModal 
          onClose={handleOrderSuccess}
          orderData={orderData}
        />
      )}
    </div>
  );
};

export default Checkout;