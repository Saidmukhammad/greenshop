import { useState, useEffect } from "react";
import Checkbox from "../../ui/Checkbox";

const BillingForm = ({ onValidationChange, onValidate }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    street: "",
    apartment: "",
    state: "",
    zip: "",
    email: "",
    phoneCode: "+966",
    phone: "",
    shipToDifferent: false,
    orderNotes: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.street.trim()) {
      newErrors.street = "Street address is required";
    }

    if (!formData.state) {
      newErrors.state = "State is required";
    }

    if (!formData.zip.trim()) {
      newErrors.zip = "Zip code is required";
    } else if (!/^\d{5,10}$/.test(formData.zip)) {
      newErrors.zip = "Please enter a valid zip code";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    
    if (onValidationChange) {
      onValidationChange(isValid, formData);
    }
    
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Валидация при изменении формы
  useEffect(() => {
    if (onValidationChange) {
      const isValid = validate();
      onValidationChange(isValid, formData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  // Экспортируем функцию валидации через ref или callback
  useEffect(() => {
    if (onValidate) {
      onValidate(() => validate());
    }
  }, [onValidate]);

  const inputStyle = (fieldName) =>
    `w-full px-4 py-[10px] border rounded-[4px] text-sm outline-none focus:border-[#46A358] ${
      errors[fieldName] ? "border-red-500" : "border-[#EAEAEA]"
    }`;

  const labelStyle = "text-[15px] leading-[15px] text-[#3D3D3D] mb-2 block";

  return (
    <div className="w-full lg:w-[60%]">
      <h2 className="font-bold mb-5 text-[17px] leading-4 text-[#3D3D3D]">
        Billing Address
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-8">
        {/* First Name */}
        <div>
          <label className={labelStyle}>
            First Name{" "}
            <span className="text-[#F03800] text-[22px] leading-4">*</span>
          </label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={validate}
            className={inputStyle("firstName")}
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className={labelStyle}>
            Last Name{" "}
            <span className="text-red-500 text-[22px] leading-4">*</span>
          </label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={validate}
            className={inputStyle("lastName")}
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className={labelStyle}>
            Country / Region{" "}
            <span className="text-red-500 text-[22px] leading-4">*</span>
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            onBlur={validate}
            className={inputStyle("country")}
          >
            <option value="">Select a country / region</option>
            <option value="sa">Saudi Arabia</option>
            <option value="uz">Uzbekistan</option>
          </select>
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">{errors.country}</p>
          )}
        </div>

        {/* City */}
        <div>
          <label className={labelStyle}>
            Town / City{" "}
            <span className="text-red-500 text-[22px] leading-4">*</span>
          </label>
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            onBlur={validate}
            className={inputStyle("city")}
          />
          {errors.city && (
            <p className="text-red-500 text-xs mt-1">{errors.city}</p>
          )}
        </div>

        {/* Street address (2 inputs) */}
        <div className="col-span-2">
          <label className={labelStyle}>
            Street Address{" "}
            <span className="text-red-500 text-[22px] leading-4">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="street"
              placeholder="House number and street name"
              value={formData.street}
              onChange={handleChange}
              onBlur={validate}
              className={inputStyle("street")}
            />
            <input
              name="apartment"
              placeholder="Apartment, suite, unit, etc. (optional)"
              value={formData.apartment}
              onChange={handleChange}
              className={inputStyle("apartment")}
            />
          </div>
          {errors.street && (
            <p className="text-red-500 text-xs mt-1">{errors.street}</p>
          )}
        </div>

        {/* State */}
        <div>
          <label className={labelStyle}>
            State <span className="text-red-500 text-[22px] leading-4">*</span>
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            onBlur={validate}
            className={inputStyle("state")}
          >
            <option value="">Select a state</option>
            <option value="riyadh">Riyadh</option>
            <option value="jeddah">Jeddah</option>
            <option value="tashkent">Tashkent</option>
            <option value="samarkand">Samarkand</option>
          </select>
          {errors.state && (
            <p className="text-red-500 text-xs mt-1">{errors.state}</p>
          )}
        </div>

        {/* Zip */}
        <div>
          <label className={labelStyle}>
            Zip <span className="text-red-500 text-[22px] leading-4">*</span>
          </label>
          <input
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            onBlur={validate}
            className={inputStyle("zip")}
          />
          {errors.zip && (
            <p className="text-red-500 text-xs mt-1">{errors.zip}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className={labelStyle}>
            Email address{" "}
            <span className="text-red-500 text-[22px] leading-4">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={validate}
            className={inputStyle("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className={labelStyle}>
            Phone Number{" "}
            <span className="text-red-500 text-[22px] leading-4">*</span>
          </label>
          <div className="flex gap-2">
            <select
              name="phoneCode"
              value={formData.phoneCode}
              onChange={handleChange}
              className="w-[90px] px-3 py-[10px] border border-[#EAEAEA] rounded-[4px] focus:border-[#46A358] outline-none"
            >
              <option value="+966">+966</option>
              <option value="+998">+998</option>
            </select>
            <div className="flex-1">
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={validate}
                className={inputStyle("phone")}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Checkbox */}
      <Checkbox 
        label={"Ship to a different address?"}
        checked={formData.shipToDifferent}
        onChange={(e) => handleChange({ target: { name: "shipToDifferent", type: "checkbox", checked: e.target.checked } })}
      />

      {/* Order notes */}
      <div className="mt-6">
        <label className={labelStyle}>Order notes (optional)</label>
        <textarea
          name="orderNotes"
          value={formData.orderNotes}
          onChange={handleChange}
          className="max-w-[350px] w-full h-32 px-4 py-3 border border-[#EAEAEA] rounded-[3px] outline-none focus:border-[#46A358] resize-none"
        />
      </div>
    </div>
  );
};

export default BillingForm;
