import React from "react";
import { Main } from "../../components/containers/";
import ContactSection from "./contact";
import HeroSection from "./hero";
import ServicesSection from "./services";

function Home() {
  return (
    <Main>
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </Main>
  );
}

export default Home;
