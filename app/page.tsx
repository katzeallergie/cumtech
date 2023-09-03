'use client';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { CustomModal } from './components/CustomModal';
import Image from 'next/image';
import logo from './img/cumtech_logo.png';
import { Header } from './components/header';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="w-screen h-screen flex flex-col	justify-center">
        <h1 className="text-center text-7xl">CumTech</h1>
        <h2 className="text-center text-xl">Change the World by Technology</h2>
      </div>
    </main>
  );
}
