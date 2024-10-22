import { Checkbox } from "@/components/ui/checkbox";
import menuItems from "../../data/menu-items.json";

export default function BeveragesForm() {
  const beverageMenu = menuItems.find((item) => item.category === "Beverages");
  const beverageMenuItems = beverageMenu.menu;

  return (
    <section className="mb-4">
      <h2 className="text-center underline mb-4">Beverages</h2>
      <div className="grid grid-cols-4 gap-4">
        {beverageMenuItems.map((item) => {
          return (
            <div key={item.id} className="flex items-center space-x-2">
              <Checkbox id={item.item} />
              <label
                htmlFor={item.item}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item.item}
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
}
