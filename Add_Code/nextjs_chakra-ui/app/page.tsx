"use client";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Carousel />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
