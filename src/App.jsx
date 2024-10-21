import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import OrderDashboardPage from "./pages/OrderDashboardPage/OrderDashboardPage";
import OrderDetailsPage from "./pages/OrderDetailsPage/OrderDetailsPage";
import CreateOrderPage from "./pages/CreateOrderPage/CreateOrderPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<OrderDashboardPage />} />
          <Route path="/dashboard/:id" element={<OrderDetailsPage />} />
          <Route path="/createorder" element={<CreateOrderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
