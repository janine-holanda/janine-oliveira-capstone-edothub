import { Label } from "@/components/ui/label";

export default function EventServiceForm({
  order,
  setOrder,
  isFormEditDisabled,
}) {
  const handleChangeHasBreakfast = (event) => {
    setOrder({ ...order, hasBreakfast: event.target.checked });
  };
  const handleChangeHasAmBreak = (event) => {
    setOrder({ ...order, hasAmBreak: event.target.checked });
  };
  const handleChangeHasLunch = (event) => {
    setOrder({ ...order, hasLunch: event.target.checked });
  };
  const handleChangeHasPmBreak = (event) => {
    setOrder({ ...order, hasPmBreak: event.target.checked });
  };
  return (
    <section className="grid grid-cols-4 gap-4">
      <div className="flex items-center space-x-2">
        <input
          id="hasBreakfast"
          type="checkbox"
          name="hasBreakfast"
          className="checkbox"
          checked={order.hasBreakfast}
          onChange={handleChangeHasBreakfast}
          disabled={isFormEditDisabled}
        ></input>
        <Label
          htmlFor="hasBreakfast"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Breakfast
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          id="hasAmBreak"
          type="checkbox"
          name="hasAmBreak"
          className="checkbox"
          checked={order.hasAmBreak}
          onChange={handleChangeHasAmBreak}
          disabled={isFormEditDisabled}
        ></input>
        <Label
          htmlFor="hasAmBreak"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Am Break
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          id="hasLunch"
          type="checkbox"
          name="hasLunch"
          className="checkbox"
          checked={order.hasLunch}
          onChange={handleChangeHasLunch}
          disabled={isFormEditDisabled}
        ></input>
        <Label
          htmlFor="hasLunch"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Lunch
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          id="hasPmBreak"
          type="checkbox"
          name="hasPmBreak"
          className="checkbox"
          checked={order.hasPmBreak}
          onChange={handleChangeHasPmBreak}
          disabled={isFormEditDisabled}
        ></input>
        <Label
          htmlFor="hasPmBreak"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Pm Break
        </Label>
      </div>
    </section>
  );
}
