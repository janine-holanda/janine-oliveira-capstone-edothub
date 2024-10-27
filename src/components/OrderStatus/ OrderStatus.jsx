export default function OrderStatus({ status }) {
  return (
    <div
      className={`py-1 px-4 w-fit rounded-full border-[1px] flex justify-center ${
        status === "Accepted" && "border-green-600 bg-green-200"
      } ${status === "New Order" && "border-e-rose bg-rose-200"} ${
        status === "Modified" && "border-e-sun bg-yellow-200"
      } ${status === "Declined" && "border-red-600 bg-red-200"} ${
        status === "Cancelled" && "border-slate-600 bg-slate-200"
      }`}
    >
      <p
        className={`p1 font-semibold ${
          status === "Accepted" && "text-green-600"
        } ${status === "New Order" && "text-e-rose"} ${
          status === "Modified" && "text-e-sun"
        } ${status === "Declined" && "text-red-600"} ${
          status === "Cancelled" && "text-slate-600"
        }`}
      >
        {status}
      </p>
    </div>
  );
}
