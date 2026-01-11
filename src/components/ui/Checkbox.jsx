const Checkbox = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden peer"
      />

      {/* circle */}
      <span
        className="
          w-4 h-4
          rounded-full
          border-2 border-[#46A358]
          flex items-center justify-center
          transition
          peer-checked:after:content-['']
          peer-checked:after:w-2
          peer-checked:after:h-2
          peer-checked:after:bg-[#46A358]
          peer-checked:after:rounded-full
        "
      />

      <span className="text-[15px] leading-[16px] font-medium text-[#3D3D3D]">{label}</span>
    </label>
  );
};

export default Checkbox;
