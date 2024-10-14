"use client";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.175,
      }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m an undergraduate in{" "}
        <span className="font-medium">Computer Science and Engineering </span>at
        the University of Moratuwa, specializing in{" "}
        <span className="font-medium">full stack web development. </span>My core
        stack includes <span className="font-medium">Next.js</span> for both
        front-end and back-end development,{" "}
        <span className="font-medium">MongoDB</span> for database management,
        and Prisma ORM for efficient data modeling and handling. I focus on
        building web applications with seamless server-side capabilities using
        Next.js server actions and fast styling with{" "}
        <span className="font-medium">Tailwind CSS.</span> I&apos;m dedicated to
        creating scalable solutions and continuously expanding my knowledge in
        the field.
      </p>
      <p className="mb-3">
        As a hobby, I also enjoy{" "}
        <span className="font-medium">Game development.</span> I&apos;m familiar
        with the <span className="font-medium">Unity game engine and C#,</span>{" "}
        and I love crafting interactive gaming experiences in my spare time.
        It&apos;s a creative outlet that complements my technical skills and
        fuels my passion for software development.
      </p>
    </motion.section>
  );
}
