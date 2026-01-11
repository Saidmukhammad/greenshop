import trash from '../../../assets/img/Delete.png'

// CartItems Component (Left Side)
export const CartItems = ({ items, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="grid grid-cols-[2.5fr_0.8fr_1fr_0.8fr_0.3fr] gap-6 pb-3 border-b border-[rgba(70,163,89,0.28)] mb-6">
        <span className="text-[#3D3D3D] font-medium">Products</span>
        <span className="text-[#3D3D3D] font-medium">Price</span>
        <span className="text-[#3D3D3D] font-medium">Quantity</span>
        <span className="text-[#3D3D3D] font-medium">Total</span>
        <span></span>
      </div>

      {/* Cart Items */}
      <div className="space-y-6">
        {items.length === 0 ? (
          <p className="text-center text-gray-500 py-8">Your cart is empty</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[2.5fr_0.8fr_1fr_0.8fr_0.3fr] gap-[17px] items-center pb-6 relative text-[#FBFBFB]"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[70px] h-[70px]  object-cover "
                />
                <div>
                  <p className="font-medium text-[#3D3D3D] mb-1">{item.name}</p>
                  {item.sku && (
                    <p className="text-sm text-[#a6a3a3]">
                      SKU:
                      <span className="ml-1 text-[#727272]">{item.sku}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Price */}
              <span className="text-[#727272] font-medium">
                ${item.price.toFixed(2)}
              </span>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onDecrease(item.id)}
                  className="w-[22px] h-[25px] text-lg bg-[#46A358] hover:bg-[#46A358CC] transition text-white rounded-full text-[20px] leading-[16px]"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-4 text-[17px] leading-3 text-center  text-[#3D3D3D]">
                  {item.quantity}
                </span>
                <button
                  onClick={() => onIncrease(item.id)}
                  className="w-[22px] h-[25px] text-lg bg-[#46A358] hover:bg-[#46A358CC] transition text-white rounded-full text-[20px] leading-[16px]"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Item Total */}
              <span className="text-[#46A358] font-bold ">
                ${(item.price * item.quantity).toFixed(2)}
              </span>

              {/* Remove Button */}
              <button
                onClick={() => onRemove(item.id)}
                className=""
                aria-label="Remove item"
              >
                <img src={trash} alt="Remove" className="w-6 h-6 flex items-center" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default CartItems;