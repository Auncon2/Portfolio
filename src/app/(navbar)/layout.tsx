import Footer from "@/modules/HomePage/Footer"
import NavbarV2 from "@/modules/Nav/NavbarV2"

export default function Layout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="min-h-screen">
       
        <NavbarV2/>
   
        {children}
        <Footer/>
      </section>
    )
  }