const OrderItem = ({ name, qty, price }) => (
  <div className="flex justify-between items-center">
    <div>
      <p className="font-medium">{name}</p>
      <p className="text-sm text-gray-400">( x {qty} )</p>
    </div>
    <span className="text-green-600 font-semibold">${price.toFixed(2)}</span>
  </div>
);

export default OrderItem;