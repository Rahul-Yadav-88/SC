import { Outlet } from "react-router-dom"
import Header from "./global/Header.jsx"
import Footer from "./global/Footer.jsx"

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="flex w-full flex-1 flex-col md:flex-row">
  
        <aside className="w-full md:w-[20%] shrink-0  md:bg-background">
          <Header />
        </aside>

        <main className="w-full min-w-0 flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default Layout
