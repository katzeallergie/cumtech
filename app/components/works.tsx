"use client";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import zitImg from "../img/zit.png";

export default function Works() {
  const zitImgVariants: Variants = {
    offScreen: {
      opacity: 0,
      x: -200,
      y: -200,
    },
    onScreen: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 3.0,
      },
    },
  };

  return (
    <div id="works" className="w-full md:p-12 md:pt-0 p-6">
      <h3 className="md:text-6xl text-4xl">Works</h3>
      <Divider className="mt-2 text-xl" />
      <div className="md:mt-12 mt-10">
        <motion.a
          className="flex justify-center items-center hover:md:bg-gray-300 md:py-10 py-4 md:px-5 px-2 md:opacity-80 md:rounded md:cursor-pointer md:w-1/2 md:m-auto"
          initial="offScreen"
          whileInView="onScreen"
          variants={zitImgVariants}
          viewport={{ amount: "some" }}
          href="https://zit.co.jp"
        >
          <div className="pt-2 px-2 text-lg font-semibold	md:w-1/4 w-2/5">
            ZIT株式会社
          </div>
          <Image src={zitImg} alt="zitImg1" className="md:w-3/4 w-3/5"></Image>
        </motion.a>
      </div>
    </div>
  );
}