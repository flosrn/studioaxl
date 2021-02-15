import React, { useState } from "react";
import Header from "components/ui/header";
import FullscreenMenu from "components/ui/animations/fullscreen-menu";
// import { useI18n } from "next-rosetta";
// import { MyLocale } from "i18n/index";
import useDelayUnmout from "hooks/useDelayUnmout";
import { GetStaticPaths, GetStaticProps } from "next";
import { getProjectAndMoreProjects, getAllProjectsWithSlug } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";

const ProjectPage: React.FC = () => {
  // const { t } = useI18n<MyLocale>();
  const [isOpen, setOpen] = useState<boolean>(false);
  const shouldRenderChild = useDelayUnmout(isOpen, 400);

  const handleToggleClicked = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="bg-white">
      <Header openHandler={handleToggleClicked} />
      {shouldRenderChild && <FullscreenMenu isOpen={isOpen} openHandler={handleToggleClicked} />}
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
      moreProjects: data?.moreProjects,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allProjects = await getAllProjectsWithSlug();
  return {
    paths: allProjects?.map((project) => `/projects/${project.slug}`) || [],
    fallback: true,
  };
};

export default ProjectPage;
