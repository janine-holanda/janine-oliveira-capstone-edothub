import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import OrderDashboardPage from "./pages/OrderDashboardPage/OrderDashboardPage";
import OrderDetailsPage from "./pages/OrderDetailsPage/OrderDetailsPage";
import CreateOrderPage from "./pages/CreateOrderPage/CreateOrderPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
  const [isEventHost, setIsEventHost] = useState(null);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage setIsEventHost={setIsEventHost} />}
          />
          <Route
            path="/dashboard"
            element={<OrderDashboardPage isEventHost={isEventHost} />}
          />
          <Route
            path="/dashboard/:orderId"
            element={<OrderDetailsPage isEventHost={isEventHost} />}
          />
          <Route
            path="/createorder"
            element={<CreateOrderPage isEventHost={isEventHost} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
