'use client';
import { Divider } from '@nextui-org/divider';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import zitImg1 from '../img/zitHP_image1.png';
import zitImg2 from '../img/zitHP_image2.png';
import zitImg3 from '../img/zitHP_image3.png';

export default function Work() {
  const zitImgVariants: Variants = {
    offScreen: {
      x: -300,
      y: -300,
    },
    onScreen: {
      x: 0,
      y: 0,
      transition: {
        ease: 'linear',
        type: 'spring',
        bounce: 0.4,
        duration: 1.5,
      },
    },
  };
  return (
    <div id="work" className="w-full p-12 pt-40">
      <h3 className="text-6xl">Work</h3>
      <Divider className="mt-2 text-xl" />
      <div className="mt-10">
        <motion.div
          initial="offScreen"
          whileInView="onScreen"
          variants={zitImgVariants}
        >
          <Image src={zitImg1} alt="zitImg1"></Image>
        </motion.div>
        <motion.div
          initial="offScreen"
          whileInView="onScreen"
          variants={zitImgVariants}
        >
          <Image src={zitImg2} alt="zitImg2"></Image>
        </motion.div>
        <motion.div
          initial="offScreen"
          whileInView="onScreen"
          variants={zitImgVariants}
        >
          <Image src={zitImg3} alt="zitImg3"></Image>
        </motion.div>
      </div>
    </div>
  );
}
