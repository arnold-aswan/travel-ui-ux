import Features from "@/components/Features";
import Camp from "@/components/Camp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Image from "next/image";
import GetApp from "@/components/GetApp";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
