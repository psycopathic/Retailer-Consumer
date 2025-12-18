import { Category } from "@/payload-types";
import { CategoryDropdown } from "./category-dropdown";

interface Props {
  data: any;
}

const Categories = ({ data }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {data.map((category: Category) => (
        <CategoryDropdown
          key={category.id}
          category={category}
          isActive={false}
          isNavigationHovered={false}
        />
      ))}
    </div>
  );
};

export default Categories;
