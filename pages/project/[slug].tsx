import React, { useState } from "react";
import Image from "next/image";
import Header from "components/ui/header";
import FullscreenMenu from "components/ui/animations/fullscreen-menu";
// import { useI18n } from "next-rosetta";
// import { MyLocale } from "i18n/index";
import useDelayUnmout from "hooks/useDelayUnmout";
import { GetStaticPaths, GetStaticProps } from "next";
import { getProjectAndMoreProjects, getAllProjectsWithSlug } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import ArrowReturn from "components/ui/animations/svg-arrow-return";
import { dashboardURL } from "utils/constants";

interface Props {
  project: any;
}

const ProjectPage: React.FC<Props> = ({ project }) => {
  // const { t } = useI18n<MyLocale>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const shouldRenderChild = useDelayUnmout(isOpen, 400);

  const handleToggleClicked = () => {
    setOpen(!isOpen);
  };

  // console.log("project : ", project);

  // grid grid-cols-8 gap-1
  // grid grid-cols-6 col-span-full lg:col-span-3
  // col-span-full lg:col-span-5
  return (
    <div className="bg-white">
      <Header openHandler={handleToggleClicked} />
      {shouldRenderChild && <FullscreenMenu isOpen={isOpen} openHandler={handleToggleClicked} />}
      {project && (
        <div className="relative min-h-screen flex flex-col lg:flex-row pt-16">
          <div className="relative w-full h-full grid grid-cols-6 inset-0 lg:fixed lg:w-5/12 pb-1">
            <div />
            <div className="relative flex flex-col justify-between -mt-24 pr-10">
              <div className="hidden lg:block pt-16">
                <ArrowReturn />
              </div>
              <div className="hidden lg:block vertical-text">
                <p>{project.credit}</p>
                <p>{project.links}</p>
              </div>
            </div>
            <div className="col-span-full lg:col-span-4 flex flex-col justify-between pt-10  mb-10 lg:mb-0 lg:pt-32 px-6">
              <div>
                <h1 className="text-6xl font-sage">{project.title}</h1>
                <div
                  className="pt-20 pr-10"
                  dangerouslySetInnerHTML={{ __html: project.content }}
                />
              </div>
              <div className="flex flex-col">
                <a
                  className="relative mt-4 text-xs sm:text-sm md:text-md underline-anim"
                  href="mailto:studioaxl@gmail.com"
                >
                  studioaxl@gmail.com
                </a>
                <a
                  className="relative mt-4 text-xs sm:text-sm md:text-md underline-anim"
                  href="www.linkedin.com/in/axelle-malard"
                  target="_blank"
                >
                  www.linkedin.com/in/axelle-malard
                </a>
              </div>
            </div>
          </div>
          <div className="relative w-full h-56 grid grid-cols-2 gap-1 h-full lg:w-7/12 ml-auto">
            <div className="relative w-full h-96 lg:h-screen col-span-full">
              <Image
                src={`${dashboardURL}${project.coverImage.formats.medium.url}`}
                alt="img"
                layout="fill"
                className="object-cover object-bottom"
              />
            </div>
            <div className="w-full h-96 relative col-span-1">
              <Image
                src={`${dashboardURL}${project.images[0].formats.medium.url}`}
                alt="img"
                // width={500}
                // height={500}
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="w-full relative col-span-1">
              <Image
                src={`${dashboardURL}${project.images[1].formats.medium.url}`}
                alt="img"
                // width={500}
                // height={500}
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
          {/*  <div className="w-full hidden lg:block lg:col-span-3" />*/}
          {/*  <div className="w-full h-96 relative col-start-1 col-end-5 lg:col-span-3">*/}
          {/*  <Image*/}
          {/*    src={`${dashboardURL}${project.images[0].formats.medium.url}`}*/}
          {/*    alt={`img`}*/}
          {/*    // width={500}*/}
          {/*    // height={500}*/}
          {/*    layout="fill"*/}
          {/*    className="object-cover"*/}
          {/*  />*/}
          {/*  </div>*/}
          {/*  <div className="w-full relative col-start-5 col-end-9 lg:col-span-2">*/}
          {/*  <Image*/}
          {/*    src={`${dashboardURL}${project.images[1].formats.medium.url}`}*/}
          {/*    alt={`img`}*/}
          {/*    // width={500}*/}
          {/*    // height={500}*/}
          {/*    layout="fill"*/}
          {/*    className="object-cover"*/}
          {/*  />*/}
          {/*  </div>*/}
          {/*  <div className="w-full h-56 bg-blue-500"></div>*/}
          {/*  <div className="w-full h-56 bg-blue-500"></div>*/}
          {/*  <div className="w-full h-56 bg-blue-500"></div>*/}
        </div>
        // <div className="relative max-w-screen-lg xl:max-w-screen-xl flex justify-center items-start pt-16 mx-auto">
        //   <div className="hidden lg:block bg-yellow-300">
        //     <ArrowReturn nextSectionId={1} />
        //   </div>
        //   <div className="relative flex bg-red-300 px-6">
        //     <div className="hidden lg:block absolute -left-16 -bottom-6 w-full transform -rotate-90 origin-left bg-blue-500">
        //       <p>Photos : XXXX XXXX</p>
        //       <p>Client : Newrest Group International - www.newrest.eu</p>
        //     </div>
        //     <div className="w-full md:w-1/2">
        //       <div className="pt-20">
        //         <h1 className="text-6xl font-sage">{project.title}</h1>
        //         <div
        //           className="pt-20 pr-10"
        //           dangerouslySetInnerHTML={{ __html: project.content }}
        //         />
        //         <div className="flex flex-col pt-96">
        //           <a
        //             className="relative mt-4 text-xs sm:text-sm md:text-md underline-anim"
        //             href="mailto:studioaxl@gmail.com"
        //           >
        //             studioaxl@gmail.com
        //           </a>
        //           <a
        //             className="relative mt-4 text-xs sm:text-sm md:text-md underline-anim"
        //             href="www.linkedin.com/in/axelle-malard"
        //             target="_blank"
        //           >
        //             www.linkedin.com/in/axelle-malard
        //           </a>
        //         </div>
        //       </div>
        //     </div>
        //     <div className="relative w-full md:w-1/2">
        //       <Image
        //         src={`${dashboardURL}${project.coverImage.formats.medium.url}`}
        //         alt={`img`}
        //         layout="fill"
        //         className="object-cover"
        //       />
        //     </div>
        //   </div>
        // </div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = null,
  locale,
  defaultLocale,
}) => {
  const { table = {} } = await import(`i18n/${locale || defaultLocale}`);
  const data = await getProjectAndMoreProjects(params.slug, preview);
  const content = await markdownToHtml(data?.projects[0]?.content || "");
  return {
    props: {
      table,
      preview,
      project: {
        ...data?.projects[0],
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allProjects = await getAllProjectsWithSlug();
  return {
    paths: allProjects?.map((project) => `/project/${project.slug}`) || [],
    fallback: true,
  };
};

export default ProjectPage;
