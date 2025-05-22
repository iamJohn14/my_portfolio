"use client"
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import Work from "@/app/components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
    </>
  );
}
