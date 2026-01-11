import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const LoginForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      login({
        email: formData.email,
        name: formData.email.split("@")[0],
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      setErrors({ submit: "Login failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-center text-[13px] mb-6">
        Enter your username and password to login.
      </p>

      <div>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`auth-input ${errors.email ? "border-red-500" : ""}`}
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      <div className="mt-4">
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className={`auth-input ${errors.password ? "border-red-500" : ""}`}
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password}</p>
        )}
      </div>

      <div className="text-right mt-2">
        <button
          type="button"
          className="text-[#46A358] text-[14px] hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      {errors.submit && (
        <p className="text-red-500 text-xs mt-2 text-center">{errors.submit}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="auth-button mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;