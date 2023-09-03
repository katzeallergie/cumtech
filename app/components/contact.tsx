'use client';
import { Divider } from '@nextui-org/divider';

export default function Contact() {
  return (
    <div id="contact" className="w-full p-12 pt-40">
      <h3 className="text-6xl">Contact</h3>
      <Divider className="mt-2 text-xl" />
      <div className="mt-10 text-large">
        <div>
          お仕事のご相談などございましたら、下記連絡先までお気軽にご連絡ください。
        </div>
        <div className="mt-4">kota.sakaguchi.1217@gmail.com</div>
      </div>
    </div>
  );
}
