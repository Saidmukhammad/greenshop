import { useState, useEffect } from "react";
import closeIcon from "../../assets/img/close.svg";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AuthModal = ({ onClose }) => {
  const [mode, setMode] = useState("login");

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[500px] rounded-[10px] relative"
      >
        {/* Close */}
        <button onClick={onClose} className="absolute right-4 top-4">
          <img src={closeIcon} alt="close" />
        </button>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mt-8 text-[20px] font-medium">
          <button
            onClick={() => setMode("login")}
            className={mode === "login" ? "text-[#46A358]" : "text-[#3D3D3D]"}
          >
            Login
          </button>
          <span>|</span>
          <button
            onClick={() => setMode("register")}
            className={
              mode === "register" ? "text-[#46A358]" : "text-[#3D3D3D]"
            }
          >
            Register
          </button>
        </div>

        <div className="px-10 py-8">
          {mode === "login" ? (
            <LoginForm onSuccess={onClose} />
          ) : (
            <RegisterForm onSuccess={onClose} />
          )}
        </div>

        <div className="h-[6px] bg-[#46A358]" />
      </div>
    </div>
  );
};

export default AuthModal;
