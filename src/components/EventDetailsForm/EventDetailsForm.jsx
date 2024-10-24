import { Label } from "@/components/ui/label";
import { formatTime, todayDate } from "../../utils/functions";
export default function EventDetailsForm({
  order,
  setOrder,
  isFormEditDisabled,
}) {
  const handleChangeEventName = (event) => {
    setOrder({ ...order, event_name: event.target.value.trimStart() });
  };
  const handleChangeHostName = (event) => {
    setOrder({ ...order, host_name: event.target.value.trimStart() });
  };
  const handleChangeLocation = (event) => {
    setOrder({ ...order, location: event.target.value.trimStart() });
  };
  const handleChangeNumberOfGuests = (event) => {
    setOrder({ ...order, number_of_guests: event.target.value.trimStart() });
  };
  const handleChangeEventDate = (event) => {
    setOrder({ ...order, event_date: event.target.value });
  };
  const handleChangeEventStartTime = (event) => {
    setOrder({ ...order, event_start_time: event.target.value });
  };
  const handleChangeEventEndTime = (event) => {
    setOrder({ ...order, event_end_time: event.target.value });
  };

  return (
    <section className="grid grid-cols-2 gap-4">
      <div className="grid w-auto col-span-2">
        <div className="grid w-auto items-center gap-1.5 ml-1 mr-1">
          <Label htmlFor="eventName" className="text-xs text-slate-500">
            Event Name
          </Label>
          <input
            id="eventName"
            placeholder="Add an event name"
            className="input"
            onChange={handleChangeEventName}
            value={order.event_name}
            disabled={isFormEditDisabled}
          ></input>
        </div>
      </div>
      <div className="grid w-auto col-span-2">
        <div className="grid w-auto items-center gap-1.5 ml-1 mr-1">
          <Label htmlFor="hostName" className="text-xs text-slate-500">
            Host Name
          </Label>
          <input
            id="hostName"
            placeholder="Add a host name"
            className="input"
            onChange={handleChangeHostName}
            value={order.host_name}
            disabled={isFormEditDisabled}
          ></input>
        </div>
      </div>
      <div className="grid w-auto col-span-2">
        <div className="grid w-auto items-center gap-1.5 ml-1 mr-1">
          <Label htmlFor="location" className="text-xs text-slate-500">
            Location (Room)
          </Label>
          <input
            id="location"
            placeholder="Add the event location (room)"
            className="input"
            onChange={handleChangeLocation}
            value={order.location}
            disabled={isFormEditDisabled}
          ></input>
        </div>
      </div>
      <div className="grid w-fit max-w-sm items-center gap-1.5 ml-1 mr-1">
        <Label htmlFor="numberGuests" className="text-xs text-slate-500">
          Guests
        </Label>
        <input
          id="numberGuests"
          type="number"
          min="1"
          max="300"
          placeholder="Qty"
          className="input w-14"
          onChange={handleChangeNumberOfGuests}
          value={order.number_of_guests}
          disabled={isFormEditDisabled}
        ></input>
      </div>
      <div className="grid w-fit max-w-sm items-center gap-1.5 mb-4 ml-1 mr-1">
        <Label htmlFor="eventDate" className="text-xs text-slate-500">
          Date
        </Label>
        <input
          id="eventDate"
          type="date"
          min={todayDate()}
          max="300"
          className="input w-fit"
          onChange={handleChangeEventDate}
          value={order.event_date}
          disabled={isFormEditDisabled}
        ></input>
      </div>
      <div className="grid w-fit max-w-sm items-center gap-1.5 mb-4 ml-1 mr-1">
        <Label htmlFor="startTime" className="text-xs text-slate-500">
          Start Time
        </Label>
        <input
          id="startTime"
          type="time"
          min={formatTime("6:00")}
          max={formatTime("20:00")}
          className="input w-fit"
          onChange={handleChangeEventStartTime}
          value={order.event_start_time}
          disabled={isFormEditDisabled}
        ></input>
      </div>
      <div className="grid w-fit max-w-sm items-center gap-1.5 mb-4 ml-1 mr-1">
        <Label htmlFor="endTime" className="text-xs text-slate-500">
          End Time
        </Label>
        <input
          id="endTime"
          type="time"
          min={formatTime("6:30")}
          max={formatTime("22:00")}
          className="input w-fit"
          onChange={handleChangeEventEndTime}
          value={order.event_end_time}
          disabled={isFormEditDisabled}
        ></input>
      </div>
    </section>
  );
}
