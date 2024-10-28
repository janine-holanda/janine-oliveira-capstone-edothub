import axios from "axios";
import {
  formatTimestampToString,
  formatTimestampToStringLong,
  formatTime,
} from "../utils/functions";

const API_URL = import.meta.env.VITE_BACKEND_URL;
const PORT = import.meta.env.VITE_PORT;

export const fetchOrdersList = async () => {
  const { data } = await axios.get(`${API_URL}:${PORT}/api/orders`);

  const formatEventDateToString = data.map((item) => ({
    ...item,
    event_date: formatTimestampToString(item.event_date),
  }));

  return formatEventDateToString;
};

export const addOrder = async (newOrder) => {
  const { data } = await axios.post(`${API_URL}:${PORT}/api/orders`, newOrder);
  return data;
};

export const fetchOrderDetails = async (order_id) => {
  const { data } = await axios.get(`${API_URL}:${PORT}/api/orders/${order_id}`);

  const formatEventTimeToString = {
    ...data,
    event_start_time: formatTime(data.event_start_time),
    event_end_time: formatTime(data.event_end_time),
  };

  return formatEventTimeToString;
};

export const updateOrder = async (updatedOrder, order_id) => {
  const { data } = await axios.put(
    `${API_URL}:${PORT}/api/orders/${order_id}`,
    updatedOrder
  );
  return data;
};

export const cancelOrder = async (order_id) => {
  const { data } = await axios.delete(
    `${API_URL}:${PORT}/api/orders/${order_id}`
  );
  return data;
};

export const fetchOrderComments = async (order_id) => {
  const { data } = await axios.get(
    `${API_URL}:${PORT}/api/orders/${order_id}/comments`
  );

  const formatCommentsDateToString = data.map((item) => ({
    ...item,
    timestamp: formatTimestampToStringLong(item.timestamp),
  }));

  return formatCommentsDateToString;
};

export const addOrderComment = async (newComment, order_id) => {
  const { data } = await axios.post(
    `${API_URL}:${PORT}/api/orders/${order_id}/comments`,
    newComment
  );
  return data;
};
