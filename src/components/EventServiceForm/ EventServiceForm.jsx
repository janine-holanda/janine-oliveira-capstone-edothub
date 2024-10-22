import { Checkbox } from "@/components/ui/checkbox";

export default function EventServiceForm() {
  return (
    <section className="grid grid-cols-4 gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="breakfast" />
        <label
          htmlFor="breakfast"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Breakfast
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="amBreak" />
        <label
          htmlFor="amBreak"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Am Break
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="lunch" />
        <label
          htmlFor="lunch"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Lunch
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="pmBreak" />
        <label
          htmlFor="pmBreak"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Pm Break
        </label>
      </div>
    </section>
  );
}
