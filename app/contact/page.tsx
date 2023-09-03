'use client';
import { Divider } from '@nextui-org/divider';

export default function Contact() {
  return (
    <main>
      <div className="w-full p-12 pt-40">
        <h1 className="text-7xl">Contact</h1>
        <Divider className="mt-2 text-xl" />
        <div className="mt-10 text-large">
          <div>
            お仕事のご相談などございましたら、下記連絡先までお気軽にご連絡ください。
          </div>
          <div className="mt-4">kota.sakaguchi@gmail.com</div>
        </div>
      </div>
    </main>
  );
}
