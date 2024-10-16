"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={"/profile.png"}
              alt=""
              width={192}
              height={192}
              className="h-24 w-24 sm:h-40 sm:w-40 lg:h-60 lg:w-60 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              quality={"95"}
              priority={true}
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello!, I&apos;m Sinthujan.</span> I&apos;m
        a <span className="font-bold">full-stack developer. </span>I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline font-bold">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row gap-3 items-center justify-center px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me{" "}
          <BsArrowRight className="opacity-75 group-hover:translate-x-1" />
        </Link>
        <a
          href="/Sinthujan_Sureshkumar_CV.pdf"
          download
          className="group flex items-center gap-2 bg-white px-5 py-2.5 rounded-full outline-none hover:scale-110 focus:scale-110 active:scale-105 transition border border-black/15 cursor-pointer dark:bg-white/10"
        >
          Download CV{" "}
          <HiDownload className="opacity-65 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-2">
          <a
            href="https://www.linkedin.com/in/sinthujan-sureshkumar-161aa7179/"
            target="_blank"
            className="flex items-center gap-2 bg-white text-gray-700 p-4 rounded-full hover:scale-110 focus:scale-110 active:scale-105 transition border border-black/15 cursor-pointer dark:text-white/60 dark:bg-white/10"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/sin2Creative"
            target="_blank"
            className="flex items-center gap-2 bg-white text-gray-700 text-xl p-3.5 rounded-full hover:scale-110 focus:scale-110 active:scale-105 transition border border-black/15 cursor-pointer dark:text-white/60 dark:bg-white/10"
          >
            <BsGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
