import EventOrderItem from "../EventOrderItem/EventOrderItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

export default function GeneralEventOrderList({ isEventHost, ordersList }) {
  const generalOrderList = ordersList
    .filter((order) => order.status !== "Accepted")
    .sort((a, b) => a.event_date - b.event_date);
  return (
    <ScrollArea className="ml-1 mr-1 h-[24rem] w-full rounded-md border p-4  mt-4">
      {generalOrderList.map((order) => (
        <Link key={order.order_id} to={`/dashboard/${order.order_id}`}>
          <EventOrderItem isEventHost={isEventHost} order={order} />
        </Link>
      ))}
    </ScrollArea>
  );
}
