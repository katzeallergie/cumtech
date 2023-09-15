"use client";
import { motion, Variants } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type Props = {
  title: string;
  src: string | StaticImport;
  alt: string;
  href?: string;
};

export default function PCWork({ title, src, alt, href }: Props) {
  const variants: Variants = {
    offScreen: {
      opacity: 0,
      x: -60,
      y: -60,
    },
    onScreen: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 2.5,
      },
    },
  };

  return (
    <motion.a
      className="flex justify-center items-center md:w-1/2 md:mx-auto"
      initial="offScreen"
      whileInView="onScreen"
      variants={variants}
      viewport={{ once: true, amount: 0.8 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full flex justify-center items-center md:border-b-8 md:border-transparent md:hover:border-red-400 md:rounded md:hover:bg-red-100 hover:opacity-60 md:py-10 py-4 md:px-5 px-2 md:cursor-pointer">
        <div className="pt-2 px-2 text-lg font-semibold	md:w-1/4 w-2/5">
          {title}
        </div>
        <Image src={src} alt={alt} className="md:w-3/4 w-3/5"></Image>
      </div>
    </motion.a>
  );
}
