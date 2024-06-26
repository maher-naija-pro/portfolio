"use client";

import { navItems } from "@/data";

import Hero from "@/components/sections/Hero";
import Grid from "@/components/sections/Grid";
import Footer from "@/components/sections/Footer";
import Section from "@/components/sections/Section";
//import Clients from "@/components/Clients";
import Approach from "@/components/sections/Approach";
import Experience from "@/components/sections/Experience";
import RecentProjects from "@/components/sections/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { Sign } from "crypto";
//  <Nav />
// <FloatingNav navItems={navItems} />

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto   sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Section/>
        <Grid />
        <RecentProjects />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
