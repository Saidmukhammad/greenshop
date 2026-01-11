const Input = ({ label, required, type = "text" }) => (
  <div className="flex flex-col gap-1">
    <label className="text-[14px]">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      className="border rounded-[6px] px-3 py-2 outline-none focus:border-[#46A358]"
    />
  </div>
);

export default Input;