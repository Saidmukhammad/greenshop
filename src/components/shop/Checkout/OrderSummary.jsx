import { useState } from 'react';
import payingMethods from '../../../assets/img/payingmethods.png';


const OrderSummary = ({
  items,
  subtotal,
  shipping,
  discount,
  total,
  onPlaceOrder,
}) => {

  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const paymentBox = (active) =>
    `flex items-center gap-3 px-4 py-3 rounded-[3px] cursor-pointer border transition mb-4
   ${active ? "border-[#46A358]" : "border-[#EAEAEA]"}`;



  return (
    <div className="w-full lg:max-w-[405px] h-fit">
      <h3 className="font-bold text-[#3D3D3D] text-[17px] leading-4 mb-6">
        Your Order
      </h3>

      <div className="flex items-center justify-between border-b border-[rgba(70,163,89,0.15)] pb-3 mb-3 pr-3">
        <p className="text-[#3D3D3D] font-medium leading-4">Products</p>
        <p className="text-[#3D3D3D] font-medium leading-4">Subtotal</p>
      </div>

      {/* products */}
      <div className="space-y-4 mb-6 border-b pb-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-[#FBFBFB] px-3 py-2"
          >
            <div className="flex gap-3 items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-[60px] h-[60px] object-cover"
              />
              <div>
                <p className="font-medium text-[#3D3D3D] leading-4 mb-1">
                  {item.name}
                </p>
                {item.sku && (
                  <p className="text-[14px] leading-4 text-gray-400">
                    SKU:
                    <span className="text-[#727272] ml-1">{item.sku}</span>
                  </p>
                )}
              </div>
            </div>
            <p className=" text-[#727272] text-[14px] leading-4">
              ( x {item.quantity} )
            </p>

            <span className="text-green-600 font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* totals */}
      <div className="space-y-2 text-[#3D3D3D] max-w-[321px] ml-auto">
        <p className="text-right mb-4">
          <button 
            type="button"
            className="text-[14px] leading-4 text-left hover:underline"
            onClick={() => {
              // TODO: Implement coupon code functionality
              alert('Coupon code functionality coming soon!');
            }}
          >
            Have a coupon code?
            <span className="text-[#46A358] font-medium"> Click here</span>
          </button>
        </p>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-[18px] leading-[16px] font-medium">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Coupon Discount</span>
          <span>(-) ${discount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-[18px] leading-[16px] font-medium">
            ${shipping.toFixed(2)}
          </span>
        </div>

        <p className="text-[#46A358] text-[12px] leading-4 right text-right cursor-pointer">
          View shipping charge
        </p>

        <div className="flex justify-between font-bold text-green-600 text-lg pt-4 border-t border-[rgba(70,163,89,0.15)] mt-4">
          <span className="text-[#3D3D3D]">Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* payment */}

      <div className="mt-6 max-w-[321px] ml-auto">
        <h4 className="font-bold text-[#3D3D3D] mb-5">Payment Method</h4>

        {/* PayPal */}
        <label className={paymentBox(paymentMethod === "paypal")}>
          <input
            type="radio"
            name="payment"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
            className="accent-[#46A358]"
          />
          <img src={payingMethods} alt="PayPal" />
        </label>

        {/* Bank */}
        <label className={paymentBox(paymentMethod === "bank")}>
          <input
            type="radio"
            name="payment"
            value="bank"
            checked={paymentMethod === "bank"}
            onChange={() => setPaymentMethod("bank")}
            className="accent-[#46A358]"
          />
          <span className="text-sm text-[#3D3D3D]">Direct bank transfer</span>
        </label>

        {/* Cash */}
        <label className={paymentBox(paymentMethod === "cash")}>
          <input
            type="radio"
            name="payment"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={() => setPaymentMethod("cash")}
            className="accent-[#46A358]"
          />
          <span className="text-sm text-[#3D3D3D]">Cash on delivery</span>
        </label>

        <button
          onClick={onPlaceOrder}
          className="w-full mt-6 bg-[#46A358] text-white py-3 rounded-[6px] font-medium hover:bg-[#3d8f4d] transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
