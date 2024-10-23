import { Label } from "@/components/ui/label";

export default function EventServiceForm({ order, setOrder }) {
  const handleChangeIsBreakfast = (event) => {
    setOrder({ ...order, isBreakfast: event.target.checked });
  };
  const handleChangeIsAmBreak = (event) => {
    setOrder({ ...order, isAmBreak: event.target.checked });
  };
  const handleChangeIsLunch = (event) => {
    setOrder({ ...order, isLunch: event.target.checked });
  };
  const handleChangeIsPmBreak = (event) => {
    setOrder({ ...order, isPmBreak: event.target.checked });
  };
  return (
    <section className="grid grid-cols-4 gap-4">
      <div className="flex items-center space-x-2">
        <input
          id="isBreakfast"
          type="checkbox"
          name="isBreakfast"
          className="checkbox"
          checked={order.isBreakfast}
          onChange={handleChangeIsBreakfast}
        ></input>
        <Label
          htmlFor="isBreakfast"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Breakfast
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          id="isAmBreak"
          type="checkbox"
          name="isAmBreak"
          className="checkbox"
          checked={order.isAmBreak}
          onChange={handleChangeIsAmBreak}
        ></input>
        <Label
          htmlFor="isAmBreak"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Am Break
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          id="isLunch"
          type="checkbox"
          name="isLunch"
          className="checkbox"
          checked={order.isLunch}
          onChange={handleChangeIsLunch}
        ></input>
        <Label
          htmlFor="isLunch"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Lunch
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          id="isPmBreak"
          type="checkbox"
          name="isPmBreak"
          className="checkbox"
          checked={order.isPmBreak}
          onChange={handleChangeIsPmBreak}
        ></input>
        <Label
          htmlFor="isPmBreak"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Pm Break
        </Label>
      </div>
    </section>
  );
}
