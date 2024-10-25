import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../data/order.json";
import { Button } from "@/components/ui/button";
import { formatTime } from "../../utils/functions";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom, toast } from "react-toastify";
import OrderForm from "@/components/OrderForm/ OrderForm";
import Header from "@/components/Header/Header";
import editFormIcon from "../../assets/icons/edit_document_24dp_1E293B_FILL0_wght400_GRAD0_opsz24.svg";
import arrowBackIcon from "../../assets/icons/arrow_back_24dp_1E293B_FILL0_wght400_GRAD0_opsz24.svg";
import Conversation from "@/components/Conversation/Conversation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function OrderDetailsPage({ isEventHost }) {
  const navigate = useNavigate();
  const { orderId } = useParams();

  useEffect(() => {
    if (isEventHost === null) {
      return navigate("/");
    }
  }, [isEventHost, navigate]);

  if (isEventHost !== null) {
    const orderToDisplay = () => {
      const findOrder = data.find(
        (orderItem) => orderItem.order_id === orderId
      );
      return {
        ...findOrder,
        event_start_time: formatTime(findOrder.event_start_time),
        event_end_time: formatTime(findOrder.event_end_time),
      };
    };

    const [order, setOrder] = useState(orderToDisplay);
    const [isFormEditDisabled, setIsFormEditDisabled] = useState(true);

    const handleSubmit = (e) => {
      e.preventDefault();
      const editOrder = data.filter(
        (orderItem) => orderItem.order_id !== orderId
      );

      let newOrder = {
        order_id: orderId,
        event_name: order.event_name,
        host_name: order.host_name,
        location: order.location,
        number_of_guests: order.number_of_guests,
        event_date: order.event_date,
        event_start_time: order.event_start_time,
        event_end_time: order.event_end_time,
        hasBreakfast: order.hasBreakfast,
        hasAmBreak: order.hasAmBreak,
        hasLunch: order.hasLunch,
        hasPmBreak: order.hasPmBreak,
        beverage_options: {
          hasCoffee: order.beverage_options.hasCoffee,
          hasWater: order.beverage_options.hasWater,
          hasPop: order.beverage_options.hasPop,
          hasJuice: order.beverage_options.hasJuice,
          hasSparklingWater: order.beverage_options.hasSparklingWater,
          hasTea: order.beverage_options.hasTea,
          hasDecaf: order.beverage_options.hasDecaf,
        },
        service_options: {
          breakfast_menu: order.service_options.breakfast_menu,
          am_break_menu: order.service_options.am_break_menu,
          lunch_menu: order.service_options.lunch_menu,
          pm_break_menu: order.service_options.pm_break_menu,
        },
        status: "Order Edited",
        timestamp: order.timestamp,
      };
      editOrder.push(newOrder);
      setOrder(newOrder);
      setIsFormEditDisabled(true);
      toast.success("Your order was successfully changed", {
        transition: Zoom,
      });
    };

    const handleEdit = (event) => {
      event.preventDefault();
      setIsFormEditDisabled(!isFormEditDisabled);
    };
    const handleCancel = (event) => {
      event.preventDefault();
      setOrder(orderToDisplay);
      toast.info("You didn't save the order", {
        transition: Zoom,
      });
    };

    return (
      <>
        <Header isEventHost={isEventHost} />
        <div className="pl-4 pr-4 pb-4 bg-pink-50">
          <div className="shadow bg-slate-50 p-4">
            <div className="w-full flex justify-between">
              <Link
                to="/dashboard"
                className="border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-slate-300 px-1"
              >
                <img src={arrowBackIcon} alt="Client Icon" />
              </Link>
              <Button
                variant="outline"
                onClick={handleEdit}
                className={`p-2 ${isEventHost ? "" : "hidden"}`}
              >
                <img src={editFormIcon} alt="Client Icon" />
              </Button>
            </div>
            <OrderForm
              handleSubmit={handleSubmit}
              textHandleSubmit="Save"
              handleCancel={handleCancel}
              setOrder={setOrder}
              order={order}
              isFormEditDisabled={isFormEditDisabled}
            />
            <Accordion type="single" collapsible className="w-auto">
              <AccordionItem value="conversation">
                <AccordionTrigger className="text-xl mb-4">
                  Conversation
                </AccordionTrigger>
                <AccordionContent>
                  <Conversation orderId={orderId} isEventHost={isEventHost} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          pauseOnHover={false}
        />
      </>
    );
  }
}
