"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarSidebar from "./Navbar-sidebar";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItems = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "rounded-[10px] px-3.5 text-lg hover:bg-pink-500",
        isActive && "bg-black text-white hover:bg-black hover:text-white"
      )}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];
const Navbar = () => {
  const pathName = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="shadow-md">
      <nav className="h-20 flex justify-between font-medium bg-white border-b border-gray-200 shadow-2xl">
        <Link href="/" className="pl-6 flex items-center">
          <span
            className={cn(
              "text-5xl font-semibold hover:underline hover:text-pink-500 font-playwrite-nz"
            )}
          >
            RE-CON
          </span>
        </Link>

        <NavbarSidebar
          items={navbarItems}
          open={isSidebarOpen}
          onOpenChange={setIsSidebarOpen}
        />

        <div className="items-center gap-4 hidden lg:flex ">
          {navbarItems.map((item) => (
            <NavbarItems
              key={item.href}
              href={item.href}
              isActive={pathName === item.href}
            >
              {item.children}
            </NavbarItems>
          ))}
        </div>

        <div className="hidden lg:flex">
          <Button
            variant="secondary"
            className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button
            variant="secondary"
            className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none text-white bg-black hover:bg-pink-400 transition-colors text-lg"
          >
            <Link href="/sign-up">Start Selling</Link>
          </Button>
        </div>
        <div className="flex lg:hidden items-center justify-center">
          <Button
            variant="ghost"
            className="size-12 border-transparent bg-white"
            onClick={() => setIsSidebarOpen(true)}
          >
            <MenuIcon />
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
