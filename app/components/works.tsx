'use client';
import { Divider } from '@nextui-org/divider';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import zitImg from '../img/zit.png';
import linebotImg from '../img/linebot.png';

export default function Works() {
  const zitImgVariants: Variants = {
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
        type: 'spring',
        bounce: 0.6,
        duration: 2.5,
      },
    },
  };

  return (
    <div id="works" className="w-full md:p-12 md:pt-0 p-6">
      <h3 className="md:text-6xl text-4xl">Works</h3>
      <Divider className="mt-2 text-xl" />
      <div className="md:mt-12 mt-10">
        <motion.a
          className="flex justify-center items-center md:w-1/2 md:mx-auto"
          initial="offScreen"
          whileInView="onScreen"
          variants={zitImgVariants}
          viewport={{ once: true, amount: 0.8 }}
          href="https://zit.co.jp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full flex justify-center items-center md:border-b-8 md:border-transparent md:hover:border-red-400 md:rounded md:hover:bg-red-100 hover:opacity-60 md:py-10 py-4 md:px-5 px-2 md:cursor-pointer">
            <div className="pt-2 px-2 text-lg font-semibold	md:w-1/4 w-2/5">
              ZIT株式会社
            </div>
            <Image
              src={zitImg}
              alt="zitImg1"
              className="md:w-3/4 w-3/5"
            ></Image>
          </div>
        </motion.a>
        <motion.div
          className="flex justify-center items-center md:w-1/2 md:mx-auto md:mt-10"
          initial="offScreen"
          whileInView="onScreen"
          variants={zitImgVariants}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="w-full flex justify-center items-center md:border-b-8 md:border-transparent md:hover:border-blue-400 md:rounded md:hover:bg-blue-100 hover:opacity-60 md:py-10 py-4 md:px-5 px-2 md:cursor-pointer">
            <div className="pt-2 px-2 text-lg font-semibold	md:w-1/4 w-2/5">
              LINEBot制作
            </div>
            <div className="md:w-3/4 w-3/5 md:h-1/2">
              <Image
                src={linebotImg}
                alt="linebotImg"
                className="md:w-48 m-auto w-20"
              ></Image>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
