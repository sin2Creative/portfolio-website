"use client";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { delay, motion } from "framer-motion";

const fadeInAnimationVarients = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 items-center text-lg to-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-lg px-5 py-3 dark:bg-gray-800"
            key={index}
            variants={fadeInAnimationVarients}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
