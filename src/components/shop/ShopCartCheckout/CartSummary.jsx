import { useNavigate } from "react-router-dom";
import Input from "../../ui/Input";

export const CartSummary = ({ subtotal, shipping, discount, total }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-[332px] w-full">
      <div>
        <div className="pb-4 border-b border-[rgba(70,163,89,0.28)] mb-6">
          <h3 className="text-lg leading-5 font-bold text-[#3D3D3D]">
            Cart Totals
          </h3>
        </div>

        {/* Coupon Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
            Coupon Apply
          </label>
          <div className="flex border border-[#46A358] rounded-[6px] overflow-hidden max-w-[500px]">
            <Input placeholder="Enter coupon code here..." buttonText="Apply" />
          </div>
        </div>

        {/* Totals */}
        <div className="space-y-4 mb-7">
          <div className="flex justify-between text-[#3D3D3D]">
            <span className="text-[15px] leading-[16px]">Subtotal</span>
            <span className="font-medium text-[18px] leading-4">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-[#3D3D3D]">
            <span className="text-[15px] leading-4">Coupon Discount</span>
            <span className="text-[15px] leading-4">
              (-) {discount.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-[#3D3D3D] pb-4">
            <span className="text-[15px] leading-4">Shipping</span>
            <div className="text-right">
              <span className="font-medium text-[18px] leading-4">
                ${shipping.toFixed(2)}
              </span>
              <button className="block text-xs text-[#46A358] hover:underline mt-1">
                View shipping charge
              </button>
            </div>
          </div>
          <div className="flex justify-between  font-bold text-[#3D3D3D]">
            <span className="font-bold">Total</span>
            <span className="text-[#46A358] text-lg font-bold">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout Buttons */}
        <button
          onClick={() => navigate("/checkout")}
          className="w-full bg-[#46A358] text-white py-3 rounded-[3px] hover:bg-green-700 transition font-bold mb-3"
        >
          Proceed To Checkout
        </button>
        <button className="w-full text-[#46A358] py-3 rounded-lg hover:bg-green-50 transition text-[15px]">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
