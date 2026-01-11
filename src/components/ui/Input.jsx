const Input = ({ placeholder, buttonText }) => {
  return (
    <div className="w-full h-[40px] flex rounded-[4px] overflow-hidden bg-white shadow-[0_0_20px_rgba(0,0,0,0.06)]">
      <input
        type="email"
        placeholder={placeholder}
        className="
          flex-1
          px-3
          text-sm
          leading-4
          text-[#3d8f4f]
          outline-none
          placeholder:text-[#ACACAC]
        "
      />

      <button
        className="
          w-[85px]
          bg-[#46A358]
          text-white
          font-semibold
          text-sm
          hover:bg-[#3d8f4f]
          transition
        "
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Input;
