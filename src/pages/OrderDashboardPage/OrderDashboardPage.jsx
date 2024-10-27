import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import GeneralEventOrderList from "@/components/GeneralEventOrderList/GeneralEventOrderList";
import AcceptedEventOrderList from "@/components/AcceptedEventOrderList/AcceptedEventOrderList";
import Footer from "@/components/Footer/Footer";
import { fetchOrdersList } from "../../services/order-api";

export default function OrderDashboardPage({ isEventHost }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isEventHost === null) {
      return navigate("/");
    }
  }, [isEventHost, navigate]);

  if (isEventHost !== null) {
    const [isOrdersListLoading, setIsOrdersListLoading] = useState(true);
    const [error, setError] = useState("");
    const [ordersList, setOrdersList] = useState(null);

    const getOrdersList = async () => {
      try {
        const response = await fetchOrdersList();

        setError("");
        setOrdersList(response);
        setIsOrdersListLoading(false);
      } catch (error) {
        setError(error.message);
        setIsOrdersListLoading(false);
      }
    };

    useEffect(() => {
      getOrdersList();
    }, []);

    if (isOrdersListLoading) {
      return (
        <div className="">
          <div className=""></div>
          <h1 className="">ORDERS LIST IS LOADING...</h1>
        </div>
      );
    }

    if (error) {
      return <h1 className="">{error.toUpperCase()}</h1>;
    }
    return (
      <>
        <Header isEventHost={isEventHost} />
        <div className="pl-4 pr-4 pb-4 bg-pink-50 h-screen">
          <div className="shadow bg-slate-50 p-4 rounded-b-xl">
            <h2 className="mb-4">Events Requiring Action: </h2>
            <GeneralEventOrderList
              isEventHost={isEventHost}
              ordersList={ordersList}
            />
            <h2 className="mt-16 mb-4">Accepted Events: </h2>
            <AcceptedEventOrderList
              isEventHost={isEventHost}
              ordersList={ordersList}
            />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
