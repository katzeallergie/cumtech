'use client';
import { Divider } from '@nextui-org/divider';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import zitImg from '../img/zit.png';

export default function Works() {
  const zitImgVariants: Variants = {
    offScreen: {
      x: -200,
      y: -200,
    },
    onScreen: {
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };

  return (
    <div id="works" className="w-full md:p-12 p-6">
      <h3 className="md:text-6xl text-4xl">Works</h3>
      <Divider className="mt-2 text-xl" />
      <div className="md:mt-36 mt-10">
        <motion.div
          className="flex justify-evenly items-center hover:md:bg-gray-300 md:py-10 py-4 md:px-5 px-2 md:opacity-80 md:rounded"
          initial="offScreen"
          whileInView="onScreen"
          variants={zitImgVariants}
          viewport={{ once: true }}
        >
          <div className="pt-2 px-2 text-lg font-semibold	md:w-1/4 w-1/5">
            ZIT株式会社
          </div>
          <Image src={zitImg} alt="zitImg1" className="md:w-3/4 w-4/5"></Image>
        </motion.div>
      </div>
    </div>
  );
}
