"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Title, Socials } from "@/app/const";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { GlobeIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <nav className="container items-center justify-between">
      <Link href={"/"}>{Title}</Link>
      <ul className="flex gap-2">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <GlobeIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Socials</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Socials.map((item) => (
              <a
                href={item.href}
                target="_blank"
                key={item.name}
                className="cursor-pointer"
              >
                <DropdownMenuItem>{item.name}</DropdownMenuItem>
              </a>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </ul>
    </nav>
  );
}
