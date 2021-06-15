import React from "react";
import Link from "next/link";
import cx from "classnames";
import LayoutSection from "components/ui/layout-section";

const items = [
  {
    id: 1,
    category: "Direction artistique",
    title: "basinga, un ensemble à tisser",
    picture: "/Users/axelle/Documents/github/studioaxl/public/images/basinga_00.jpg",
    color: "bg-red-200",
    url: "/project/basinga",
  },
  {
    id: 2,
    category: "Charte graphique",
    title: "Street Attitud'",
    picture: "",
    color: "bg-green-200",
    url: "/project/basinga",
  },
  {
    id: 3,
    category: "Charte graphique",
    title: "Street Attitud'",
    picture: "",
    color: "bg-blue-200",
    url: "/project/basinga",
  },
  {
    id: 4,
    category: "Charte graphique",
    title: "Street Attitud'",
    picture: "",
    color: "bg-yellow-200",
    url: "/project/basinga",
  },
  {
    id: 5,
    category: "Charte graphique",
    title: "Street Attitud'",
    picture: "",
    color: "bg-purple-200",
    url: "/project/basinga",
  },
  {
    id: 6,
    category: "Charte graphique",
    title: "Street Attitud'",
    picture: "",
    color: "bg-indigo-200",
    url: "/project/basinga",
  },
];

const Item = ({ category, title, picture, color, url, className }) => (
  <div className={cx("w-full h-[600px]", className)}>
    <div className={cx("w-full h-full", color)}>
      <Link href={url}>
        <a className={cx("w-full h-full block")} />
      </Link>
    </div>
    <div className="flex flex-col justify-center items-center mt-5">
      <div className="text-sm">{category}</div>
      <div className="mb-1 text-xl">{title}</div>
    </div>
  </div>
);

const Projects: React.FC = () => (
  <LayoutSection sectionId={3} title="Créations">
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16 w-full text-black">
        {items.map((item: any) => (
          <Item
            key={item.id}
            {...item}
            className={item.id === 2 || item.id === 5 ? "mt-28" : "mt-12 md:mt-0"}
          />
        ))}
      </div>
    </div>
  </LayoutSection>
);
export default Projects;
