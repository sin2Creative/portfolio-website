"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex gap-2 h-[2.5rem] w-[7rem] bg-gray-900 text-white  items-center justify-center rounded-full outline-none transition-all  text-sm hover:scale-110 focus:scale-110 active:scale-105 hover:bg-gray-800 disabled:scale-100 disabled:bg-opacity-65 dark:bg-gray-200 dark:text-gray-950"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-gray-950 "></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-sm opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
