import React from "react";
import Link from "next/link";
import Image from "next/image";
import cx from "classnames";
import Footer from "components/ui/footer";

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
      <div className="xl:col-span-4 2xl:col-span-3 lg:col-start-1 lg:col-end-6 lg:row-auto">
        <div className="flex flex-col justify-between pr-8 xl:pr-20 pl-8 xl:pl-0 max-w-3xl h-full">
          <div className="flex justify-start items-center mt-20 mb-10 max-w-sm h-[126]px">
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
      <div className="relative lg:col-span-7 lg:row-auto row-start-1 xs:row-end-2 md:row-end-5 lg:h-auto">
        <Image src={hero} placeholder="blur" layout="fill" objectFit="cover" />
      </div>
    </div>
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-3xl">
        <div className="flex overflow-hidden relative justify-center pb-[56.25%] my-24 h-0">
          {children}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default ProjectTemplate;
