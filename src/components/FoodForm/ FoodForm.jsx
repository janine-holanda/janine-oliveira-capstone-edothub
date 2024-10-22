import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import menuItems from "../../data/menu-items.json";

export default function FoodForm({ service }) {
  const foodMenu = menuItems.find((item) => item.category === service);
  const foodMenuItems = foodMenu.menu;

  return (
    <section className="mb-4">
      <h2 className="text-center underline mb-4">Food Menu</h2>
      <div className="flex justify-center">
        <Select>
          <SelectTrigger className="w-fit">
            <SelectValue placeholder={`Select ${service} Menu`} />
          </SelectTrigger>
          <SelectContent>
            {foodMenuItems.map((item) => {
              return (
                <SelectItem key={item.id} value={item.item}>
                  {item.item}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}
