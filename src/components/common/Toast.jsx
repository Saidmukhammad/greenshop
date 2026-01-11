import { useEffect } from "react";

const Toast = ({ message, type = "success", onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = type === "success" ? "bg-[#46A358]" : type === "error" ? "bg-red-500" : "bg-blue-500";

  return (
    <div
      className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-md shadow-lg z-50 animate-slide-in flex items-center gap-3 min-w-[300px]`}
      role="alert"
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-auto text-white hover:text-gray-200"
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;
