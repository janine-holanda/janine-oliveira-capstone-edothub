export const formatTime = (time) => {
  const date = new Date(`2024/01/01 ${time}`);

  return date.toLocaleString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatTimestampToString = (dateTimestamp) => {
  const newDate = new Date(dateTimestamp).toLocaleString("en-CA", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return newDate;
};

export const formatTimestampToStringLong = (dateTimestamp) => {
  const newDate = new Date(dateTimestamp).toLocaleString("en-CA", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  return newDate;
};

export const todayDate = () => {
  const today = new Date();
  const year = today.toLocaleString("en-CA", { year: "numeric" });
  const month = today.toLocaleString("en-CA", { month: "numeric" });
  const day = today.toLocaleString("en-CA", { day: "numeric" });
  return [year, month, day].join("-");
};
