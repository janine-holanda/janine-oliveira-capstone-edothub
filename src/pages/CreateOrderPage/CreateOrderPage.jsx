import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

  if (isEventHost) {
    return (
      <form action="" className="p-4 bg-slate-100">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="eventDetails">
            <AccordionTrigger className="text-2xl mb-4">
              Event Details
            </AccordionTrigger>
            <AccordionContent>
              <EventDetailsForm />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="serviceDetails">
            <AccordionTrigger className="text-2xl mb-4">
              Event Service
            </AccordionTrigger>
            <AccordionContent>
              <EventServiceForm />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Breakfast">
            <AccordionTrigger className="text-2xl mb-4">
              Breakfast
            </AccordionTrigger>
            <AccordionContent>
              <BeveragesForm />
              <FoodForm service="Breakfast" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Am Break">
            <AccordionTrigger className="text-2xl mb-4">
              Am Break
            </AccordionTrigger>
            <AccordionContent>
              <BeveragesForm />
              <FoodForm service="Am Break" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Lunch">
            <AccordionTrigger className="text-2xl mb-4">Lunch</AccordionTrigger>
            <AccordionContent>
              <BeveragesForm />
              <FoodForm service="Lunch" />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="Pm Break">
            <AccordionTrigger className="text-2xl mb-4">
              Pm Break
            </AccordionTrigger>
            <AccordionContent>
              <BeveragesForm />
              <FoodForm service="Pm Break" />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    );
  }
}
