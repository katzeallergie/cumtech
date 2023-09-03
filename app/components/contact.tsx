'use client';
import { Divider } from '@nextui-org/divider';

export default function Contact() {
  return (
    <div id="contact" className="w-full md:p-12 p-6">
      <h3 className="md:text-6xl text-4xl">Contact</h3>
      <Divider className="mt-2 text-xl" />
      <div className="mt-10 md:text-large font-semibold">
        <div>
          お仕事のご相談などございましたら、下記連絡先までお気軽にご連絡ください。
        </div>
        <div className="mt-4">kota.sakaguchi.1217@gmail.com</div>
      </div>
    </div>
  );
}
