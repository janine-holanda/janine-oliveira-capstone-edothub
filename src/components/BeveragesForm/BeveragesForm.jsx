import menuItems from "../../data/menu-items.json";

import { Label } from "@/components/ui/label";

export default function BeveragesForm({ order, setOrder, isFormEditDisabled }) {
  const beverageMenu = menuItems.find((item) => item.category === "Beverages");
  const beverageMenuItems = beverageMenu.menu;

  const handleChange = (event, itemName) => {
    setOrder({
      ...order,
      beverage_options: {
        ...order.beverage_options,
        [itemName]: event.target.checked,
      },
    });
  };

  return (
    <section className="mb-4">
      <h2 className="text-center underline mb-4 text-lg font-medium">
        Beverages
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {beverageMenuItems.map((menuItem) => {
          return (
            <div key={menuItem.id} className="flex items-center space-x-2">
              <input
                id={menuItem.item_name}
                type="checkbox"
                name={menuItem.item_name}
                className="checkbox"
                checked={order.beverage_options[menuItem.item_name]}
                onChange={(e) => handleChange(e, menuItem.item_name)}
                disabled={isFormEditDisabled}
              ></input>
              <Label
                htmlFor={menuItem.item_name}
                className="text-xs text-slate-800 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {menuItem.item_description}
              </Label>
            </div>
          );
        })}
      </div>
    </section>
  );
}
