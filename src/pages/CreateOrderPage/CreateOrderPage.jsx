import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../data/order.json";

import { formatTime, todayDate } from "../../utils/functions";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom, toast } from "react-toastify";
import OrderForm from "@/components/OrderForm/ OrderForm";
import Header from "@/components/Header/Header";

export default function CreateOrderPage({ isEventHost }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isEventHost) {
      return navigate("/");
    }
  }, [isEventHost, navigate]);

  const defaultValues = {
    event_name: "",
    host_name: "",
    location: "",
    number_of_guests: "",
    event_date: todayDate(),
    event_start_time: formatTime("6:00"),
    event_end_time: formatTime("6:30"),
    hasBreakfast: true,
    hasAmBreak: false,
    hasLunch: false,
    hasPmBreak: false,
    beverage_options: {
      hasCoffee: false,
      hasWater: true,
      hasPop: false,
      hasJuice: false,
      hasSparklingWater: false,
      hasTea: false,
      hasDecaf: false,
    },
    service_options: {
      breakfast_menu: "Continental Breakfast 1",
      am_break_menu: "Fruits",
      lunch_menu: "Cold Buffet 1",
      pm_break_menu: "Cookies",
    },
    status: "New Order",
    timestamp: 0,
  };

  const [order, setOrder] = useState(defaultValues);
  const isFormEditDisabled = false;

  const handleSubmit = (e) => {
    e.preventDefault();
    let newOrder = {
      order_id: `${data.length + 1}`,
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
      status: order.status,
      timestamp: Date.now(),
    };
    data.push(newOrder);
    setOrder(defaultValues);
    toast.success("Your order was successfully sent", {
      // onClose: () => navigate("/"),
      transition: Zoom,
    });
  };
  const handleCancel = (event) => {
    event.preventDefault();
    setOrder(defaultValues);
    toast.info("You canceled the order", {
      onClose: () => navigate("/"),
      transition: Zoom,
    });
  };

  if (isEventHost) {
    return (
      <>
        <Header isEventHost={isEventHost} />
        <div className="pl-4 pr-4 pb-4 bg-pink-50">
          <div className="shadow bg-slate-50 p-4">
            <OrderForm
              handleSubmit={handleSubmit}
              textHandleSubmit="+ Add an Order"
              handleCancel={handleCancel}
              setOrder={setOrder}
              order={order}
              isFormEditDisabled={isFormEditDisabled}
            />
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
