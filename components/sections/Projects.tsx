import React from "react";
import cx from "classnames";
import LayoutSection from "components/ui/layout-section";

const items = [
  {
    id: 1,
    category: "Charte graphique",
    title: "Street Attitud'",
    picture: "",
    color: "bg-red-200",
  },
  {
    id: 2,
    category: "Charte graphique",
    title: "Street Attitud'",
    picture: "",
    color: "bg-green-200",
  },
  {
    id: 3,
    category: "Charte graphique",
    title: "Street Attitud'",
    picture: "",
    color: "bg-blue-200",
  },
  {
    id: 4,
    category: "Charte graphique",
    title: "Street Attitud'",
    picture: "",
    color: "bg-yellow-200",
  },
  {
    id: 5,
    category: "Charte graphique",
    title: "Street Attitud'",
    picture: "",
    color: "bg-purple-200",
  },
  {
    id: 6,
    category: "Charte graphique",
    title: "Street Attitud'",
    picture: "",
    color: "bg-indigo-200",
  },
];

const Item = ({ category, title, picture, color, className }) => (
  <div className={cx("py-12 px-10 w-full w-[425px] h-[600px]", className)}>
    <div className={cx("w-full h-full", color)} />
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="text-sm">{category}</div>
      <div className="mb-1 text-xl">{title}</div>
    </div>
  </div>
);

const Projects: React.FC = () => (
  <LayoutSection sectionId={3} title="Créations">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 text-black">
      {items.map((item: any) => (
        <Item key={item.id} {...item} className={item.id === 2 || item.id === 5 ? "mt-28" : ""} />
      ))}
    </div>
  </LayoutSection>
);
export default Projects;
