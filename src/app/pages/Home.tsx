import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { HowItWorks } from "../components/HowItWorks";
import { Participate } from "../components/Participate";
import { Projects } from "../components/Projects";
import { Testimonials } from "../components/Testimonials";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Participate />
      <Projects />
      <Testimonials />
    </>
  );
}
