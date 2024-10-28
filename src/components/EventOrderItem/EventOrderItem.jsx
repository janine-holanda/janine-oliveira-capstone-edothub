import acceptOrderIcon from "../../assets/icons/task_24dp_1E293B_FILL0_wght400_GRAD0_opsz24.svg";
import declineOrderIcon from "../../assets/icons/scan_delete_24dp_1E293B_FILL0_wght400_GRAD0_opsz24.svg";
import cancelOrderIcon from "../../assets/icons/delete_24dp_1E293B_FILL0_wght400_GRAD0_opsz24.svg";
import OrderStatus from "../OrderStatus/ OrderStatus";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { updateOrder, cancelOrder } from "../../services/order-api";

export default function EventOrderItem({ isEventHost, order, getOrdersList }) {
  const [displayedOrder, setDisplayedOrder] = useState(order);
  const [error, setError] = useState("");

  const putOrder = async (newOrder, orderId) => {
    try {
      await updateOrder(newOrder, orderId);

      setDisplayedOrder(newOrder);

      getOrdersList();

      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteOrder = async (orderId) => {
    try {
      await cancelOrder(orderId);

      getOrdersList();

      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAccept = (event) => {
    event.preventDefault();

    const newOrder = { ...order, status: "Accepted" };
    putOrder(newOrder, order.order_id);
  };

  const handleDeclined = (event) => {
    event.preventDefault();

    const newOrder = { ...order, status: "Declined" };
    putOrder(newOrder, order.order_id);
  };

  const handleCancel = (event) => {
    event.preventDefault();

    deleteOrder(order.order_id);
  };

  if (error) {
    return <h1 className="">{error.toUpperCase()}</h1>;
  }

  return (
    <article className="border-[1px] rounded-lg border-e-cloud p-4 grid grid-cols-2 gap-y-4 hover:bg-yellow-100 cursor-pointer mb-4">
      <div className="flex gap-x-2 col-span-2 justify-end">
        <Button
          variant="outline"
          onClick={handleAccept}
          className={`p-2 ${isEventHost ? "hidden" : ""} ${
            displayedOrder.status === "Accepted" ? "hidden" : ""
          }`}
        >
          <img src={acceptOrderIcon} alt="Accept Order Icon" />
        </Button>
        <Button
          variant="outline"
          onClick={handleDeclined}
          className={`p-2 ${isEventHost ? "hidden" : ""}`}
        >
          <img src={declineOrderIcon} alt="Decline Order Icon" />
        </Button>
        <Button variant="outline" onClick={handleCancel} className="p-2">
          <img src={cancelOrderIcon} alt="Cancel Order Icon" />
        </Button>
      </div>
      <Separator className="mb-2 col-span-2 bg-e-cloud" />
      <div>
        <h3 className="mb-1">Id:</h3>
        <p className="p1">{displayedOrder.order_id}</p>
      </div>
      <div>
        <h3 className="mb-1">Status</h3>
        <OrderStatus status={displayedOrder.status} />
      </div>
      <div>
        <h3 className="mb-1">Host Name</h3>
        <p className="p1">{displayedOrder.host_name}</p>
      </div>
      <div>
        <h3 className="mb-1">Date:</h3>
        <p className="p1">{displayedOrder.event_date}</p>
      </div>
      <div className=" flex flex-col items-center col-span-2">
        <h3 className="mb-4">Event Services</h3>

        <div className="flex justify-center gap-x-16">
          <div className="flex flex-col items-center">
            <Label
              htmlFor="hasBreakfast"
              className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1"
            >
              BF
            </Label>
            <input
              id="hasBreakfast"
              type="checkbox"
              name="hasBreakfast"
              className="checkbox"
              checked={displayedOrder.hasBreakfast}
              disabled
            ></input>
          </div>

          <div className="flex flex-col items-center">
            <Label
              htmlFor="hasBreakfast"
              className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1"
            >
              AM
            </Label>
            <input
              id="hasBreakfast"
              type="checkbox"
              name="hasBreakfast"
              className="checkbox"
              checked={displayedOrder.hasAmBreak}
              disabled
            ></input>
          </div>
          <div className="flex flex-col items-center">
            <Label
              htmlFor="hasBreakfast"
              className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1"
            >
              LU
            </Label>
            <input
              id="hasBreakfast"
              type="checkbox"
              name="hasBreakfast"
              className="checkbox"
              checked={displayedOrder.hasLunch}
              disabled
            ></input>
          </div>
          <div className="flex flex-col items-center">
            <Label
              htmlFor="hasBreakfast"
              className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1"
            >
              PM
            </Label>
            <input
              id="hasBreakfast"
              type="checkbox"
              name="hasBreakfast"
              className="checkbox"
              checked={displayedOrder.hasPmBreak}
              disabled
            ></input>
          </div>
        </div>
      </div>
    </article>
  );
}
