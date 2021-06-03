import React from "react";
import LayoutSection from "components/ui/layout-section";

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
  <div className="py-12 px-10 w-full h-56 br-red">
    <div>{step}</div>
    <div className="mb-1 text-xl">{title}</div>
    <div className="text-sm">{description}</div>
  </div>
);

const HowWork: React.FC = () => (
  <LayoutSection
    sectionId={5}
    isDark
    title="Comment travailler ensemble ?"
    subtitle="The carnivorous teleporter patiently gathers the planet. Human emitters, to the ready room. The carnivorous teleporter patiently gathers the planet. Human emitters, to the ready room. The carnivorous teleporter patiently gathers the planet. Human emitters, to the ready room."
  >
    <div className="py-20 px-16 md:px-32 mt-20 w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
        {items.map((item: any) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  </LayoutSection>
);
export default HowWork;
