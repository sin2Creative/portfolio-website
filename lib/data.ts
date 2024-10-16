import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import eCommerceImg from "@/public/e-commerce-web.png";
import socialMediaImg from "@/public/social-media-web.png";
import portfolioImg from "@/public/portfolio-web.png";
import authImg from "@/public/auth-web.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "E-Commerce Website",
    description:
      "Developed a simple e-commerce website with user authentication and ”Add to Cart” functionality, utilizing server actions for backend processing.",
    tags: ["React", "Next.js", "TypeScript", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: eCommerceImg,
    linkUrl: "https://github.com/sin2Creative/e-commerce",
  },
  {
    title: "Social Media Website",
    description:
      "Developed a simple social media website with features like adding posts, liking, commenting, sending friend requests, and blocking users.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB", "Prisma"],
    imageUrl: socialMediaImg,
    linkUrl: "https://github.com/sin2Creative/social-media",
  },
  {
    title: "Personal Portfolio",
    description:
      "Developed a personal portfolio with single-page navigation, featuring a contact form that uses React Mail and Server Actions to send messages directly to a personal email, along with dark mode and animations",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: portfolioImg,
    linkUrl: "https://sinthujan.vercel.app/",
  },
  {
    title: "Full Auth Boilerplate",
    description:
      "Developed a full authentication boilerplate with NextAuth, Resend for email, and Server Actions, supporting user registration, login, password reset, and email verification.",
    tags: ["React", "Next.js", "Tailwind", "Tailwind", "Prisma", "MongoDB"],
    imageUrl: authImg,
    linkUrl: "https://github.com/sin2Creative/starter_with_next_auth",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node JS",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Python",
  "Framer Motion",
  "c#",
  "Unity",
] as const;
