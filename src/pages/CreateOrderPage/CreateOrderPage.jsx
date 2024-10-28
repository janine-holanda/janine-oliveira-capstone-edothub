import OrderForm from "@/components/OrderForm/ OrderForm";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatTime, todayDate } from "../../utils/functions";
import { ToastContainer, Zoom, toast } from "react-toastify";
import { addOrder } from "../../services/order-api";

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
  };

  const [order, setOrder] = useState(defaultValues);
  const [error, setError] = useState("");

  const isFormEditDisabled = false;

  const postOrder = async (newOrder) => {
    try {
      await addOrder(newOrder);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
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
    };

    postOrder(newOrder);

    setOrder(defaultValues);

    toast.success("Your order was successfully sent", {
      onClose: () => navigate("/dashboard"),
      transition: Zoom,
    });
  };

  const handleCancel = (event) => {
    event.preventDefault();

    setOrder(defaultValues);

    toast.info("You canceled the order", {
      onClose: () => navigate("/dashboard"),
      transition: Zoom,
    });
  };

  if (error) {
    return <h1 className="">{error.toUpperCase()}</h1>;
  }

  if (isEventHost) {
    return (
      <>
        <Header isEventHost={isEventHost} />
        <div className="pl-4 pr-4 pb-4 bg-pink-50 h-screen">
          <div className="shadow bg-slate-50 p-4 rounded-b-xl">
            <OrderForm
              handleSubmit={handleSubmit}
              textHandleSubmit="+ Add an Order"
              handleCancel={handleCancel}
              setOrder={setOrder}
              order={order}
              isFormEditDisabled={isFormEditDisabled}
            />
          </div>
          <Footer />
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
