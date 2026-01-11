import Container from "../common/Container"
import logo from "../../assets/img/logo.png"
import loop from "../../assets/img/loop.png"
import cart from "../../assets/img/cart.png"
import logout from '../../assets/img/logout.png'
import { NavLink, Link } from "react-router-dom"
import { useState } from "react"
import AuthModal from "../modal/AuthModal"
import { useCart } from "../../context/CartContext"
import { useAuth } from "../../context/AuthContext"


const navLinkClass = ({ isActive }) => isActive 
  ? 'font-bold border-b-4 border-[#46A358] text-[#46A358] pb-6' 
  : 'font-normal text-[#3D3D3D]'

const Header = () => {
  const [isAuthOpen, setIsAuthopen] = useState(false);
  const { getCartCount } = useCart();
  const { isAuthenticated, logout: handleLogout } = useAuth();
  const cartCount = getCartCount();

  return (
    <header>
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between py-5 border-b border-[#46A35880] gap-4">
          <NavLink to="/">
            <img src={logo} alt="GreenShop Logo"/>
          </NavLink>
          <ul className="flex flex-wrap justify-center gap-4 md:gap-[50px]">
            <li>
              <NavLink to='/' className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className={navLinkClass}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/my-account" className={navLinkClass}>
                My Account
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className={navLinkClass}>
                Blogs
              </NavLink>
            </li>
          </ul>

          <div className="flex gap-[30px] items-center">
            <button 
              type="button"
              aria-label="Search"
              className="cursor-pointer"
            >
              <img src={loop} alt="Search" />
            </button>
            <Link to="/cart" className="relative" aria-label="Shopping cart">
              <img src={cart} alt="Cart" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#46A358] text-xs font-medium text-white border-2 border-white">
                  {cartCount}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <button 
                className="bg-[#46A358] flex items-center gap-1 py-2 px-4 rounded-[6px] leading-[100%] text-white"
                onClick={handleLogout}
              >
                <img src={logout} alt="Logout" />
                Logout
              </button>
            ) : (
              <button 
                className="bg-[#46A358] flex items-center gap-1 py-2 px-4 rounded-[6px] leading-[100%] text-white"
                onClick={() => setIsAuthopen(true)}
              >
                <img src={logout} alt="Login" />
                Login
              </button>
            )}
            {isAuthOpen && <AuthModal onClose={() => setIsAuthopen(false)} />}
          </div>

        </div>
      </Container>
    </header>
  )
}

export default Header