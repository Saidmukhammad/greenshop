import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const HIDE_FOOTER_ROUTES = ["/my-account"];

const MainLayout = () => {
  const { pathname } = useLocation();

  const hideFooter = HIDE_FOOTER_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* ⬇️ ОБЯЗАТЕЛЬНО Outlet, раз createBrowserRouter */}
        <Outlet />
      </main>

      {!hideFooter && <Footer />}
    </>
  );
};

export default MainLayout;
