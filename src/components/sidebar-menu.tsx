"use client";
import React, { Fragment, useState } from "react";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Bell, DiamondPercent, DiamondPercentIcon, FolderDown, KeyIcon, Megaphone, ScatterChart, Settings, Users2 } from "lucide-react";
import { cn } from "@/lib/utils";

const menuList = [
  {
    menu: { name: "Painel de Análises", icon: <ScatterChart /> },
    options: [
      {
        link: "/dashboard/admin",
        name: "Visão Geral",
      },
      {
        link: "/dashboard/profile",
        name: "Usuários",
      },
      {
        link: "/dashboard/profile",
        name: "Anúncios",
      },
    ],
  },
  {
    menu: { name: "Anúncios", icon: <Megaphone /> },
    options: [
      {
        link: "/dashboard/admin",
        name: "Anúncios Activos",
      },
      {
        link: "/dashboard/profile",
        name: "Anúncios Inativos",
      },
    ],
  },
  {
    menu: { name: "Usuários", icon: <Users2 /> },
    options: [
      {
        link: "/dashboard/admin",
        name: "Usuários Activos",
      },
      {
        link: "/dashboard/profile",
        name: "Usuários Inativos",
      },
    ],
  },
  {
    menu: { name: "Publicidades", icon: <DiamondPercentIcon /> },
    options: [
      {
        link: "/dashboard/admin",
        name: "Configurações Gerais",
      },
      {
        link: "/dashboard/profile",
        name: "Privicidade e Segurança",
      },
    ],
  },
  {
    menu: { name: "Notificações", icon: <Bell /> },
    options: [
      {
        link: "/dashboard/admin",
        name: "Mensagens",
      },
      {
        link: "/dashboard/profile",
        name: "Avisos",
      },
    ],
  },

  {
    menu: { name: "Relatórios", icon: <FolderDown /> },
    options: [
      {
        link: "/dashboard/admin",
        name: "Relatórios Globais",	
      },
      {
        link: "/dashboard/profile",
        name: "Relatórios sobre Anúncios",
      },
      {
        link: "/dashboard/profile",
        name: "Relatórios sobre Usuários",
      },
    ],
  },
  {
    menu: { name: "Configurações", icon: <Settings /> },
    options: [
      {
        link: "/dashboard/admin",
        name: "Configurações Gerais",
      },
      {
        link: "/dashboard/profile",
        name: "Privicidade e Segurança",
      },
    ],
  },
];

function SidebarMenu() {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleAccordionChange = (index: any)=>{
    setActiveIndex(index === activeIndex ? null : index);
  }
  return (
    <Accordion type="single" collapsible onValueChange={handleAccordionChange}>
      {menuList.map((item) => (
        <AccordionItem key={item.menu.name} value={item.menu.name} className={cn("w-full", activeIndex === item.menu.name ? "bg-gray-100" : "")}>
          <AccordionTrigger>
            <div className={cn("flex gap-3 w-full hover:text-sky-600", activeIndex === item.menu.name ? "text-sky-600" : "" )}>
              {item.menu.icon}
              {item.menu.name}
            </div>
          </AccordionTrigger>
          <AccordionContent className={"flex flex-col gap-2"}>
            {item.options.map((option) => (
              <Link key={option.name} className="pl-6 py-2 hover:bg-white" href={option.link}>
                {option.name}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default SidebarMenu;
