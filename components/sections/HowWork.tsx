import React from "react";
import LayoutSection from "components/ui/layout-section";
import Testimonials from "./Testimonials";

const items = [
  {
    id: 1,
    step: "Étape 01",
    title: "Premier contact",
    description:
      "The carnivorous teleporter patiently gathers the planet. Human emitters, to the ready room.",
  },
  {
    id: 2,
    step: "Étape 02",
    title: "Premier contact",
    description:
      "The carnivorous teleporter patiently gathers the planet. Human emitters, to the ready room.",
  },
  {
    id: 3,
    step: "Étape 03",
    title: "Premier contact",
    description:
      "The carnivorous teleporter patiently gathers the planet. Human emitters, to the ready room.",
  },
  {
    id: 4,
    step: "Étape 01",
    title: "Premier contact",
    description:
      "The carnivorous teleporter patiently gathers the planet. Human emitters, to the ready room.",
  },
  {
    id: 5,
    step: "Étape 01",
    title: "Premier contact",
    description:
      "The carnivorous teleporter patiently gathers the planet. Human emitters, to the ready room.",
  },
  {
    id: 6,
    step: "Étape 01",
    title: "Premier contact",
    description:
      "The carnivorous teleporter patiently gathers the planet. Human emitters, to the ready room.",
  },
];

const Item = ({ step, title, description }) => (
  <div className="py-6 px-6 w-full">
    <div>{step}</div>
    <div className="relative">
      <div className="absolute bottom-0 -left-4 w-[2px] h-[60px] bg-rose rotate-90" />
      <div className="mb-1 text-xl">{title}</div>
      <div className="text-sm">{description}</div>
    </div>
  </div>
);

const HowWork: React.FC = () => (
  <LayoutSection
    sectionId={5}
    isDark
    title="Comment travailler ensemble ?"
    subtitle="The carnivorous teleporter patiently gathers the planet. Human emitters, to the ready room. The carnivorous teleporter patiently gathers the planet. Human emitters, to the ready room. The carnivorous teleporter patiently gathers the planet. Human emitters, to the ready room."
  >
    <div className="relative z-10 py-5 md:py-10 md:py-12 px-4 md:px-12 lg:px-20 mt-20 w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
        {items.map((item: any) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
    <div className="absolute bottom-0 left-0 z-0 w-full h-1/2 bg-[#2F2F2F]" />
    <div className="flex justify-center mt-20">
      <Testimonials />
    </div>
  </LayoutSection>
);
export default HowWork;
