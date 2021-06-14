import React from "react";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";

type Props = {};

const ProjectTemplate: React.FC<Props> = ({
  title,
  subtitle,
  logo,
  hero,
  content,
  url,
  credits,
  children,
  className,
}) => (
  <div className={cx("w-full", className)}>
    <div className="grid lg:grid-cols-12 grid-rows-6 md:grid-rows-none h-screen">
      <div className="hidden xl:block xl:col-span-1 2xl:col-span-2" />
      <div className="xl:col-span-4 2xl:col-span-3 lg:col-start-1 lg:col-end-6 row-span-3 lg:row-auto">
        <div className="flex flex-col justify-between px-14 h-full">
          <div className="flex justify-start items-center mt-20 mb-10 max-w-sm h-[126px">
            {logo}
          </div>
          <div className="flex flex-1 whitespace-pre-wrap">{content}</div>
          <div className="pt-20 mb-20">
            <a className="mb-3" href={url}>
              {url}
            </a>
            <div className="">{credits}</div>
          </div>
        </div>
      </div>
      <div className="relative lg:col-span-7 row-span-3 lg:row-auto row-start-1 h-[500px] lg:h-auto">
        <Image src={hero} layout="fill" objectFit="cover" />
      </div>
    </div>
    <div className="mx-auto max-w-6xl bg-green-400">
      <div className="bg-green-400">Video</div>
    </div>
  </div>
);

export default ProjectTemplate;
