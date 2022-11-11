import React from "react";
import { Main } from "../../components/containers/";
import useTitleChanger from "../../hooks/use-title";
import ContactSection from "./contact";
import HeroSection from "./hero";
import PortfolioSection from "./portfolio";
import ServicesSection from "./services";

function Home() {
  useTitleChanger("Home");
  return (
    <Main>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </Main>
  );
}

export default Home;
