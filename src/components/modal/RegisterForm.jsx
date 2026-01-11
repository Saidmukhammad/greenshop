import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const RegisterForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register } = useAuth();

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

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

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
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
      
      register({
        username: formData.username,
        email: formData.email,
        name: formData.username,
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      setErrors({ submit: "Registration failed. Please try again." });
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
        Enter your email and password to register.
      </p>

      <div>
        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          className={`auth-input ${errors.username ? "border-red-500" : ""}`}
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500 text-xs mt-1">{errors.username}</p>
        )}
      </div>

      <div className="mt-4">
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

      <div className="mt-4">
        <input
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={`auth-input ${errors.confirmPassword ? "border-red-500" : ""}`}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
        )}
      </div>

      {errors.submit && (
        <p className="text-red-500 text-xs mt-2 text-center">{errors.submit}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="auth-button mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;