const PhoneInput = ({ label, required }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm text-[#3D3D3D]">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="flex gap-2">
      <select className="w-[90px] h-[40px] border border-[#EAEAEA] rounded-[3px]">
        <option>+966</option>
      </select>
      <input
        type="tel"
        className="flex-1 h-[40px] px-3 border border-[#EAEAEA] rounded-[3px]
        focus:border-[#46A358] focus:outline-none"
      />
    </div>
  </div>
);

export default PhoneInput;
