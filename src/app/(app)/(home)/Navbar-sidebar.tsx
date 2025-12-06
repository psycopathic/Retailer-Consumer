import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}
interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="left" className="p-0 transition-none">
          <SheetHeader className="h-20 flex items-center border-b px-6">
            <div>
              <SheetTitle className="p-4 border-b">
                <div className="flex items-center">
                  <SheetTitle>Menu</SheetTitle>
                </div>
              </SheetTitle>
            </div>
          </SheetHeader>
          <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-full text-left hover:bg-black hover:text-white flex items-center text-base font-medium p-5"
                onClick={() => onOpenChange(false)}
              >
                {item.children}
              </Link>
            ))}
            <div className="border-black border-t">
                <Link href="/sign-in" className="w-full text-left hover:bg-black hover:text-white flex items-center text-base font-medium p-5">
                    Log in 
                </Link>
                <Link href="sign-up" className="w-full text-left hover:bg-black hover:text-white flex items-center text-base font-medium p-5">
                    Start Selling
                </Link>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavbarSidebar;