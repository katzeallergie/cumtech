'use client';
import { Divider } from '@nextui-org/divider';
import Image from 'next/image';
import zitImg1 from '../img/zitHP_image1.png';
import zitImg2 from '../img/zitHP_image2.png';
import zitImg3 from '../img/zitHP_image3.png';

export default function Work() {
  return (
    <div id="work" className="w-full p-12 pt-40">
      <h3 className="text-6xl">Work</h3>
      <Divider className="mt-2 text-xl" />
      <div className="mt-10">
        <Image src={zitImg1} alt="zitImg1"></Image>
        <Image src={zitImg2} alt="zitImg2"></Image>
        <Image src={zitImg3} alt="zitImg3"></Image>
      </div>
    </div>
  );
}
