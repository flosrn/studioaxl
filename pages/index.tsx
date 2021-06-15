import React, { useState } from "react";
import Header from "components/ui/header";
import Footer from "components/ui/footer";
import useDelayUnmout from "hooks/useDelayUnmout";
import FullscreenMenu from "components/ui/animations/fullscreen-menu";
import HowWork from "components/sections/HowWork";
import ByTheWay from "components/sections/ByTheWay";
import Projects from "components/sections/Projects";
import Intro from "components/sections/Intro";
import WorkTogether from "components/sections/WorkTogether";
import Prestations from "components/sections/Prestations";
import Hero from "components/ui/Hero";

const HomePage: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const shouldRenderChild = useDelayUnmout(isOpen, 400);

  const handleToggleClicked = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="bg-white">
      <Header openHandler={handleToggleClicked} />
      {shouldRenderChild && <FullscreenMenu isOpen={isOpen} openHandler={handleToggleClicked} />}
      <Hero />
      <Intro />
      <Prestations />
      <Projects />
      <WorkTogether />
      <HowWork />
      <ByTheWay />
      <Footer />
    </div>
  );
};

export default HomePage;
