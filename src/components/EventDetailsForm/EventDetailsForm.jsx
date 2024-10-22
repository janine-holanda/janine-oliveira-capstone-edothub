import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
export default function EventDetailsForm() {
  return (
    <section>
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-4 ml-1">
        <Label htmlFor="eventName" className="text-xs text-slate-500">
          Event Name
        </Label>
        <Input
          id="eventName"
          placeholder="Add an event name"
          className="w-full focus-visible:ring-e-navy focus-within:border-0 "
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-4 ml-1">
        <Label htmlFor="hostName" className="text-xs text-slate-500">
          Host Name
        </Label>
        <Input
          id="hostName"
          placeholder="Add the host name"
          className="focus-visible:ring-e-navy focus-within:border-0"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-4 ml-1">
        <Label htmlFor="location" className="text-xs text-slate-500">
          Location (Room)
        </Label>
        <Input
          id="location"
          placeholder="Add the event location/room"
          className="focus-visible:ring-e-navy focus-within:border-0"
        />
      </div>
      <RadioGroup
        defaultValue="outside"
        className="mb-4  ml-1 flex items-center space-x-2"
      >
        <div className="space-x-2">
          <RadioGroupItem value="outside" id="outside" />
          <Label htmlFor="outside">Outside</Label>
        </div>
        <div className="space-x-2">
          <RadioGroupItem value="inside" id="inside" />
          <Label htmlFor="inside">Inside</Label>
        </div>
      </RadioGroup>
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-4  ml-1">
        <Label htmlFor="guestsQty" className="text-xs text-slate-500">
          Guests
        </Label>
        <Input
          id="guestsQty"
          placeholder="Add guests quantity"
          type="number"
          className="focus-visible:ring-e-navy focus-within:border-0"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-4  ml-1">
        <Label htmlFor="date" className="text-xs text-slate-500">
          Date
        </Label>
        <Input
          id="date"
          type="date"
          className="w-fit focus-visible:ring-e-navy focus-within:border-0"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-4  ml-1">
        <Label htmlFor="startTime" className="text-xs text-slate-500">
          Start Time
        </Label>
        <Input
          id="startTime"
          type="time"
          className="w-fit focus-visible:ring-e-navy focus-within:border-0"
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-4  ml-1">
        <Label htmlFor="endTime" className="text-xs text-slate-500">
          End Time
        </Label>
        <Input
          id="endTime"
          type="time"
          className="w-fit focus-visible:ring-e-navy focus-within:border-0"
        />
      </div>
    </section>
  );
}
