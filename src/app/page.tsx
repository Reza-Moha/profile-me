"use client";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { useRef } from "react";
import { AnimationControls, useAnimation } from "framer-motion";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const controls: AnimationControls = useAnimation();

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element && scrollRef.current) {
      scrollRef.current.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <main ref={scrollRef} className="h-screen overflow-y-auto scroll-smooth">
        <Header handleScroll={handleScrollTo} />
        <HeroSection id="home" />
        <ProjectsSection id="projects" />
        <TapeSection />
        <TestimonialsSection />
        <AboutSection id="about-us" />
        <ContactSection id="contact-us" />
        <Footer />
      </main>
    </>
  );
}
