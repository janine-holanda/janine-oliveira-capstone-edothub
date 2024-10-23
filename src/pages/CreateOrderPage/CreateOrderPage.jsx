import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../data/order.json";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { formatTime, todayDate } from "../../utils/functions";
import BeveragesForm from "@/components/BeveragesForm/BeveragesForm";
import FoodForm from "@/components/FoodForm/ FoodForm";
import EventDetailsForm from "@/components/EventDetailsForm/EventDetailsForm";
import EventServiceForm from "@/components/EventServiceForm/ EventServiceForm";

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
    isBreakfast: true,
    isAmBreak: false,
    isLunch: false,
    isPmBreak: false,
  };

  const [order, setOrder] = useState(defaultValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newOrder = {
      order_id: data.length + 1,
      event_name: order.event_name,
      host_name: order.host_name,
      location: order.location,
      number_of_guests: order.number_of_guests,
      event_date: order.event_date,
      event_start_time: order.event_start_time,
      event_end_time: order.event_end_time,
      isBreakfast: order.isBreakfast,
      isAmBreak: order.isAmBreak,
      isLunch: order.isLunch,
      isPmBreak: order.isPmBreak,
    };
    data.push(newOrder);
    console.log(data);
  };

  if (isEventHost) {
    return (
      <form onSubmit={handleSubmit} className="p-4 bg-slate-100">
        <Accordion type="single" collapsible className="w-auto">
          <AccordionItem value="eventDetails">
            <AccordionTrigger className="text-2xl mb-4">
              Event Details
            </AccordionTrigger>
            <AccordionContent>
              <EventDetailsForm setOrder={setOrder} order={order} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="serviceDetails">
            <AccordionTrigger className="text-2xl mb-4">
              Event Service
            </AccordionTrigger>
            <AccordionContent>
              <EventServiceForm setOrder={setOrder} order={order} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Breakfast">
            <AccordionTrigger
              className={`text-2xl mb-4 ${
                order.isBreakfast ? "visible" : "invisible"
              }`}
            >
              Breakfast
            </AccordionTrigger>
            <AccordionContent>
              <BeveragesForm />
              <FoodForm service="Breakfast" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Am Break">
            <AccordionTrigger
              className={`text-2xl mb-4 ${
                order.isAmBreak ? "visible" : "invisible"
              }`}
            >
              Am Break
            </AccordionTrigger>
            <AccordionContent>
              <BeveragesForm />
              <FoodForm service="Am Break" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Lunch">
            <AccordionTrigger
              className={`text-2xl mb-4 ${
                order.isLunch ? "visible" : "invisible"
              }`}
            >
              Lunch
            </AccordionTrigger>
            <AccordionContent>
              <BeveragesForm />
              <FoodForm service="Lunch" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Pm Break">
            <AccordionTrigger
              className={`text-2xl mb-4 ${
                order.isPmBreak ? "visible" : "invisible"
              }`}
            >
              Pm Break
            </AccordionTrigger>
            <AccordionContent>
              <BeveragesForm />
              <FoodForm service="Pm Break" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button type="submit">Create an Order</Button>
      </form>
    );
  }
}
