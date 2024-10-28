import menuItems from "../../data/menu-items.json";

export default function FoodForm({
  service,
  order,
  setOrder,
  isFormEditDisabled,
}) {
  const foodService = menuItems.find((item) => item.category === service);

  const foodServiceMenu = foodService.menu;

  const handleChange = (event, categoryName) => {
    setOrder({
      ...order,
      service_options: {
        ...order.service_options,
        [categoryName]: event.target.value,
      },
    });
  };

  return (
    <section className="mb-4">
      <h2 className="text-center underline mb-4 text-lg font-medium">
        {`${service} Menu`}{" "}
      </h2>
      <div className="flex justify-center">
        <select
          value={order.service_options[foodService.category_name]}
          onChange={(e) => handleChange(e, foodService.category_name)}
          disabled={isFormEditDisabled}
          placeholder="Select Menu"
          className="w-fit inline-flex h-[35px] items-center justify-center gap-[5px] rounded bg-white px-[15px] text-[13px] leading-none text-slate-800 shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-e-wine focus:shadow-[0_0_0_1px] focus:shadow-e-wine data-[placeholder]:text-e-rose hover:text-slate-50 disabled:hover:bg-white disabled:hover:text-slate-800"
        >
          {foodServiceMenu.map((menuItem) => {
            return (
              <option key={menuItem.id} value={menuItem.item_description}>
                {menuItem.item_description}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
}
