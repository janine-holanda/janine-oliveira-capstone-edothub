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
import { Separator } from "@/components/ui/separator";

export default function OrderForm({
  handleSubmit,
  handleCancel,
  setOrder,
  order,
  isFormEditDisabled,
}) {
  return (
    <form onSubmit={handleSubmit} className="p-4 bg-slate-100">
      <Accordion type="single" collapsible className="w-auto">
        <AccordionItem value="eventDetails">
          <AccordionTrigger className="text-2xl mb-4">
            Event Details
          </AccordionTrigger>
          <AccordionContent>
            <EventDetailsForm
              setOrder={setOrder}
              order={order}
              isFormEditDisabled={isFormEditDisabled}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="serviceDetails">
          <AccordionTrigger className="text-2xl mb-4">
            Event Services
          </AccordionTrigger>
          <AccordionContent>
            <EventServiceForm
              setOrder={setOrder}
              order={order}
              isFormEditDisabled={isFormEditDisabled}
            />
            <Separator className="mt-4 mb-4 bg-slate-200" />
            <BeveragesForm
              setOrder={setOrder}
              order={order}
              isFormEditDisabled={isFormEditDisabled}
            />
            <Separator className="mt-4 mb-4 bg-slate-200" />
            <div
              className={`text-2xl mb-4 ${
                order.hasBreakfast ? "block" : "hidden"
              }`}
            >
              <FoodForm
                service="Breakfast"
                setOrder={setOrder}
                order={order}
                isFormEditDisabled={isFormEditDisabled}
              />
              <Separator className="mt-4 mb-4 bg-slate-200" />
            </div>
            <div
              className={`text-2xl mb-4 ${
                order.hasAmBreak ? "block" : "hidden"
              }`}
            >
              <FoodForm
                service="Am Break"
                setOrder={setOrder}
                order={order}
                isFormEditDisabled={isFormEditDisabled}
              />
              <Separator className="mt-4 mb-4 bg-slate-200" />
            </div>
            <div
              className={`text-2xl mb-4 ${order.hasLunch ? "block" : "hidden"}`}
            >
              <FoodForm
                service="Lunch"
                setOrder={setOrder}
                order={order}
                isFormEditDisabled={isFormEditDisabled}
              />
              <Separator className="mt-4 mb-4 bg-slate-200" />
            </div>
            <div
              className={`text-2xl mb-4 ${
                order.hasPmBreak ? "block" : "hidden"
              }`}
            >
              <FoodForm
                service="Pm Break"
                setOrder={setOrder}
                order={order}
                isFormEditDisabled={isFormEditDisabled}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex justify-between mt-4">
        <Button type="submit">+Add an Order</Button>
        <Button variant="outline" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
