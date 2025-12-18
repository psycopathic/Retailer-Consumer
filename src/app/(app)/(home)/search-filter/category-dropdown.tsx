"use client";

import { useState, useRef } from "react";

import { Category } from "@/payload-types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useDropdownPosition } from "./use-dropdown-position";
import { SubcategoryMenu } from "./subcategory-menu";

interface Props {
  category: Category;
  isActive?: Boolean;
  isNavigationHovered?: Boolean;
}

export const CategoryDropdown = ({
  category,
  isActive = false,
  isNavigationHovered = false,
}: Props) => {
  console.log("hello from category dropdown", { category });
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { getDropdownPosition} = useDropdownPosition(dropDownRef)
  const onMouseEnter = () => {
    console.log("hello")
    setIsOpen(true);
  };
  const onMouseLeave = () => {
    setIsOpen(false);
  };

  const dropdownPosition = getDropdownPosition();
  return (
    <>
      <div
        className="relative"
        ref={dropDownRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="relative">
          <Button
            variant="elevated-ghost"
            className={cn(
              "h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black",
              isActive &&
                !isNavigationHovered &&
                "bg-white border-primary text-black"
            )}
          >
            {category.name}
          </Button>
          {category.subcategories && category.subcategories.length > 0 && (
            <div
              className = {cn(
                "opacity-0 absolute -bottom-3 w-0 h-0 border-l-10 border-r-10 border-b-10 border-l-transparent border-r-transparent border-b-black left-1/2 translate-x-1/2", isOpen && "opacity-100"
              )}
            />
          )}
        </div>
        <SubcategoryMenu
        category={category}
        isOpen={isOpen}
        position={dropdownPosition}
        />
      </div>
    </>
  );
};
