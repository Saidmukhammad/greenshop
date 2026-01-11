import { useState } from "react";
import PhoneInput from "./Inputs/PhoneInput";
import imageTwo from '../../assets/img/Image2.svg'


const AccountDetails = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement save functionality
    console.log("Form submitted:", formData);
  };

  return (
    <div className="bg-white p-8">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <div>
          <h2 className="text-[16px] font-medium text-[#3D3D3D] mb-6">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[800px]">
            {/* First Name */}
            <div>
              <label className="text-[15px] leading-[16px] text-[#3D3D3D] mb-2 block">
                First Name <span className="text-[#F03800] text-[22px] leading-4">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-[10px] border border-[#EAEAEA] rounded-[4px] text-sm outline-none focus:border-[#46A358]"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="text-[15px] leading-[16px] text-[#3D3D3D] mb-2 block">
                Last Name <span className="text-[#F03800] text-[22px] leading-4">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-[10px] border border-[#EAEAEA] rounded-[4px] text-sm outline-none focus:border-[#46A358]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-[15px] leading-[16px] text-[#3D3D3D] mb-2 block">
                Email address <span className="text-[#F03800] text-[22px] leading-4">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-[10px] border border-[#EAEAEA] rounded-[4px] text-sm outline-none focus:border-[#46A358]"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-[15px] leading-[16px] text-[#3D3D3D] mb-2 block">
                Phone Number <span className="text-[#F03800] text-[22px] leading-4">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  name="phoneCode"
                  className="w-[90px] px-3 py-[10px] border border-[#EAEAEA] rounded-[4px] focus:border-[#46A358] outline-none text-sm"
                >
                  <option value="+966">+966</option>
                  <option value="+998">+998</option>
                  <option value="+1">+1</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 px-4 py-[10px] border border-[#EAEAEA] rounded-[4px] text-sm outline-none focus:border-[#46A358]"
                  required
                />
              </div>
            </div>

            {/* Username */}
            <div>
              <label className="text-[15px] leading-[16px] text-[#3D3D3D] mb-2 block">
                Username <span className="text-[#F03800] text-[22px] leading-4">*</span>
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-[10px] border border-[#EAEAEA] rounded-[4px] text-sm outline-none focus:border-[#46A358]"
                required
              />
            </div>

            {/* Photo */}
            <div>
              <label className="text-[15px] leading-[16px] text-[#3D3D3D] mb-2 block">
                Photo
              </label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#FBFBFB] border border-[#EAEAEA] flex items-center justify-center">
                  <img src={imageTwo} alt="" />
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="px-4 py-2 bg-[#46A358] text-white text-sm font-medium rounded-[4px] hover:bg-[#3d8e4f] transition"
                  >
                    Change
                  </button>
                  <button
                    type="button"
                    className="text-sm text-[#3D3D3D] hover:text-[#46A358] transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Password Change Section */}
        <div>
          <h2 className="text-[16px] font-medium text-[#3D3D3D] mb-6">
            Password change
          </h2>

          <div className="max-w-[410px] w-full flex flex-col gap-5">
            {/* Current Password */}
            <div>
              <label className="text-[15px] leading-[16px] text-[#3D3D3D] mb-2 block">
                Current password
              </label>
              <div className="relative">
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-[10px] pr-10 border border-[#EAEAEA] rounded-[4px] text-sm outline-none focus:border-[#46A358]"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727272] hover:text-[#46A358] transition"
                  aria-label="Toggle password visibility"
                >
                  {showCurrentPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.82L19.56 16.74C21.07 15.49 22.26 13.86 23 12C21.27 7.61 17 4.5 12 4.5C10.6 4.5 9.26 4.75 8 5.2L10.17 7.37C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.73 7C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.77 9 12C9 13.66 10.34 15 12 15C12.23 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8Z" fill="currentColor"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="text-[15px] leading-[16px] text-[#3D3D3D] mb-2 block">
                New password
              </label>
              <div className="relative">
                <input
                  type={showNewPassword ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-[10px] pr-10 border border-[#EAEAEA] rounded-[4px] text-sm outline-none focus:border-[#46A358]"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727272] hover:text-[#46A358] transition"
                  aria-label="Toggle password visibility"
                >
                  {showNewPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.82L19.56 16.74C21.07 15.49 22.26 13.86 23 12C21.27 7.61 17 4.5 12 4.5C10.6 4.5 9.26 4.75 8 5.2L10.17 7.37C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.73 7C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.77 9 12C9 13.66 10.34 15 12 15C12.23 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8Z" fill="currentColor"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label className="text-[15px] leading-[16px] text-[#3D3D3D] mb-2 block">
                Confirm new password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-[10px] pr-10 border border-[#EAEAEA] rounded-[4px] text-sm outline-none focus:border-[#46A358]"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#727272] hover:text-[#46A358] transition"
                  aria-label="Toggle password visibility"
                >
                  {showConfirmPassword ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.82L19.56 16.74C21.07 15.49 22.26 13.86 23 12C21.27 7.61 17 4.5 12 4.5C10.6 4.5 9.26 4.75 8 5.2L10.17 7.37C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.73 7C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.77 9 12C9 13.66 10.34 15 12 15C12.23 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8Z" fill="currentColor"/>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="bg-[#46A358] text-white px-8 py-3 rounded-[6px] font-medium hover:bg-[#3d8e4f] transition"
          >
            Save Change
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;
