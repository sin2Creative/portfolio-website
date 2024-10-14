import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 text-xs block">
        &copy; 2024 Sinthujan. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website</span> buit with
        React & Next.js (App router & Server action), Typescript, Tailwind CSS,
        Framer Motion, React Email, Resend and Vercel hosting.
      </p>
    </footer>
  );
}
