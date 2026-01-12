const TextInput = ({ label, required, ...props }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm text-[#3D3D3D]">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      {...props}
      className="h-[40px] px-3 border border-[#EAEAEA] rounded-[3px] text-sm
      focus:border-[#46A358] focus:outline-none"
    />
  </div>
);

export default TextInput;