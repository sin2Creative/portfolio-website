"use client";

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} className="scroll-mt-28 mb-28" id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="">
        {projectsData.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
}
