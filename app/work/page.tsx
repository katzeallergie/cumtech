'use client';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import { CustomModal } from '../components/CustomModal';
import { Header } from '../components/header';

export default function Work() {
  return (
    <main>
      <Header />
      <div className="w-screen h-screen flex justify-center items-center text-5xl">
        Work
      </div>
    </main>
  );
}
