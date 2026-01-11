import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 px-4 py-3 text-[14px] border-l-4 transition ${
    isActive
      ? "border-[#46A358] text-[#46A358] font-medium bg-white"
      : "border-transparent text-[#3D3D3D] hover:text-[#46A358] hover:border-[#46A35830]"
  }`;

const AccountSidebar = () => {
  const { logout } = useAuth();

  // SVG Icons
  const PersonIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
    </svg>
  );

  const MapPinIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
    </svg>
  );

  const CartIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.66L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" fill="currentColor"/>
    </svg>
  );

  const HeartIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="currentColor"/>
    </svg>
  );

  const ChartIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 13H8V21H3V13ZM10 3H15V21H10V3ZM17 8H22V21H17V8Z" fill="currentColor"/>
    </svg>
  );

  const DownloadIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 9H15V3H9V9H5L12 16L19 9ZM5 18V20H19V18H5Z" fill="currentColor"/>
    </svg>
  );

  const SupportIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.68L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z" fill="currentColor"/>
    </svg>
  );

  const LogoutIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.59L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" fill="currentColor"/>
    </svg>
  );

  return (
    <aside className="w-[310px] bg-[#FBFBFB]">
      <h3 className="px-4 py-4 font-bold text-[18px] text-[#3D3D3D]">
        My Account
      </h3>

      <nav className="flex flex-col py-2">
        <NavLink to="/my-account" end className={linkClass}>
          <PersonIcon />
          <span>Account Details</span>
        </NavLink>
        <NavLink to="/my-account/address" className={linkClass}>
          <MapPinIcon />
          <span>Address</span>
        </NavLink>
        <NavLink to="/my-account/orders" className={linkClass}>
          <CartIcon />
          <span>Orders</span>
        </NavLink>
        <NavLink to="/my-account/wishlist" className={linkClass}>
          <HeartIcon />
          <span>Wishlist</span>
        </NavLink>
        <NavLink to="/my-account/reports" className={linkClass}>
          <ChartIcon />
          <span>Reports</span>
        </NavLink>
        <NavLink to="/my-account/downloads" className={linkClass}>
          <DownloadIcon />
          <span>Downloads</span>
        </NavLink>
        <NavLink to="/my-account/support" className={linkClass}>
          <SupportIcon />
          <span>Support</span>
        </NavLink>
      </nav>

      <button
        onClick={logout}
        className="flex items-center gap-3 px-4 py-4 text-[14px] text-[#46A358] font-medium border-t border-[#EAEAEA] hover:bg-[#F5FAF7] transition w-full"
      >
        <LogoutIcon />
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default AccountSidebar;
