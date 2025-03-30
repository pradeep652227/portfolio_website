import { Header, Footer } from "./Components/imports-components"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

