import { Outlet } from "react-router-dom"
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

export const App = () => {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}