import Image from "next/image";
import NavBar from "@/components/Navbar/NavBar";
import Mid from "@/components/Mid";
import Footer from "@/components/footer";
import Header from "@/components/Header";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-white"> 
      <NavBar />
      <Header/>
      <Mid />
      <Footer/>
    </div>
  );
}
