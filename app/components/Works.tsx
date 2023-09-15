"use client";
import { Divider } from "@nextui-org/divider";
import zitImg from "../img/zit.png";
import linebotImg from "../img/linebot.png";
import SPWork from "./SPWork";
import PCWork from "./PCWork";

export default function Works() {
  return (
    <div id="works" className="w-full md:p-12 md:pt-0 p-6">
      <h3 className="md:text-6xl text-4xl">Works</h3>
      <Divider className="mt-2 text-xl" />
      <div className="md:mt-12 mt-10">
        <PCWork
          title="ZIT株式会社"
          src={zitImg}
          alt="zitImg"
          href="https://zit.co.jp"
        />
      </div>
      <div className="md:mt-10">
        <SPWork title="LINEBot制作" src={linebotImg} alt="linebotImg"></SPWork>
      </div>
    </div>
  );
}
