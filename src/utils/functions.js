export const formatTime = (time) => {
  const date = new Date(`2024/01/01 ${time}`);

  return date.toLocaleString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const todayDate = () => {
  const today = new Date();
  const year = today.toLocaleString("en-US", { year: "numeric" });
  const month = today.toLocaleString("en-US", { month: "numeric" });
  const day = today.toLocaleString("en-US", { day: "numeric" });
  return [year, month, day].join("-");
};
