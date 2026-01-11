import successIcon from "../../../assets/img/successIcon.png";
import OrderItem from "./OrderItem";

const OrderSuccessModal = ({ onClose, orderData }) => {
  const orderNumber = orderData?.orderNumber || "19586687";
  const date = orderData?.date || "15 Sep, 2021";
  const total = orderData?.total || 2699;
  const paymentMethod = orderData?.paymentMethod || "Cash on delivery";
  const items = orderData?.items || [];
  const shipping = orderData?.shipping || 16;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* modal */}
      <div className="relative bg-white w-[578px] rounded-[10px] shadow-xl z-10 overflow-hidden">
        {/* close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#46A358] hover:text-[#73d787] transition"
        >
          ✕
        </button>

        {/* header */}
        <div className="text-center px-8 pt-7 pb-4 bg-[#46A3580F]">
          <img src={successIcon} alt="Success" className="mx-auto mb-4 w-14" />
          <h2 className="text-[#727272]">Your order has been received</h2>
        </div>

        {/* summary */}
        <div className="grid grid-cols-4 border-y border-[#2d5b360f] text-center text-sm">
          {[
            ["Order Number", orderNumber],
            ["Date", date],
            ["Total", `$${total.toLocaleString()}.00`],
            ["Payment Method", paymentMethod],
          ].map(([label, value], i) => (
            <div
              key={i}
              className={`py-4 ${i !== 3 ? "border-r border-[#2d5b360f]" : ""}`}
            >
              <p className="text-[#727272] text-[14px] leading-4">{label}</p>
              <p className="font-bold text-[15px] leading-[16px] mt-1 text-[#727272]">
                {value}
              </p>
            </div>
          ))}
        </div>

        {/* order details */}
        <div className="px-8 py-4">
          <h3 className="font-semibold mb-4">Order Details</h3>

          <div className="flex flex-col gap-2">
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

          <div className="w-[50%] ml-auto">
            {/* shipping */}
            <div className="flex justify-between text-sm text-[#3D3D3D] mt-5">
              <span className="text-[15px] leading-4">Shipping</span>
              <span className="font-medium text-[18px] leading-4">
                ${shipping}.00
              </span>
            </div>

            {/* total */}
            <div className="flex justify-between text-[#46A358] font-bold mt-3">
              <span className="text-[#3D3D3D]">Total</span>
              <span>${total.toLocaleString()}.00</span>
            </div>
          </div>

          {/* info */}
          <p className="text-center text-sm text-[#727272] mt-6">
            Your order is currently being processed. You will receive an order
            confirmation email shortly with the expected delivery date.
          </p>

          {/* button */}
          <button className="block font-bold mx-auto mt-6 bg-[#46A358] text-white px-8 py-3 rounded-[6px] hover:bg-[#3c944e] transition">
            Track your order
          </button>
        </div>

        {/* bottom accent */}
        <div className="h-1 bg-[#46A358]" />
      </div>
    </div>
  );
};

export default OrderSuccessModal;
