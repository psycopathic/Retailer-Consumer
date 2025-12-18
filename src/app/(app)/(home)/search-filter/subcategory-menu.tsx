import { Category } from "@/payload-types";
import Link from "next/link";

interface Props {
  category: Category;
  isOpen: boolean;
  position: { top: number; left: number };
}

export const SubcategoryMenu = ({ category, isOpen, position }: Props) => {
  if (
    !isOpen ||
    !category.subcategories ||
    !category.subcategories.docs ||
    category.subcategories.docs.length === 0
  ) {
    return null;
  }
  const backgroundColor = category.color || "#F5F5F5";
  return (
    <div
      className="fixed z-100"
      style={{
        top: position.top,
        left: position.left,
        zIndex: 100,
      }}
    >
      <div className="h-3 w-60" />

      <div 
      style={{backgroundColor}}
      className="w-60 text-black rounded-md overflow-hidden border shadow-[6px_6px_0_rgba(0,0,0,0.2)] bg-white">
        <div>
            {category.subcategories?.docs?.map((subcategory) => {
              if (typeof subcategory === "string") return null;
              return (
                <Link key={subcategory.id} href="/" className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center font-medium">
                  {subcategory.name}
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default SubcategoryMenu;