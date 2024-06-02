"use client";

import { navItems } from "@/data";

import Hero from "@/src/app/components/Hero";
import Grid from "@/src/app/components/Grid";
import Footer from "@/src/app/components/Footer";
import Nav from "@/src/app/components/Nav";
//import Clients from "@/components/Clients";
import Approach from "@/src/app/components/Approach";
import Experience from "@/src/app/components/Experience";
import RecentProjects from "@/src/app/components/RecentProjects";
import { FloatingNav } from "@/src/app/components/ui/FloatingNavbar";
//  <Nav />
// <FloatingNav navItems={navItems} />

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto   sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
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
