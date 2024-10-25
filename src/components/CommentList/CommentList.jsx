import commentsData from "../../data/comments.json";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function CommentList({ orderId }) {
  const orderComments = () => {
    const filterCommentsData = commentsData
      .filter((comment) => comment.order_id === orderId)
      .sort((a, b) => b.timestamp - a.timestamp);
    const formatData = filterCommentsData.map((comment) => {
      return {
        ...comment,
        timestamp: new Date(comment.timestamp).toLocaleString("en-US", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }),
      };
    });

    return formatData;
  };

  console.log(orderComments());
  return (
    <ScrollArea className="ml-1 mr-1 h-[200px] w-full rounded-md border p-4 mt-4">
      {orderComments().map((comment) => (
        <article
          key={comment.id}
          className={`mb-4 p-4 rounded-xl border-[1px] ${
            comment.role === "Event Manager" ? "bg-e-sun" : "border-e-sun"
          }`}
        >
          <div className=""></div>
          <div className="">
            <div className="flex justify-between mb-2">
              <h3 className="">{`${comment.name} (${comment.role})`}</h3>
              <h3 className="">{comment.timestamp}</h3>
            </div>
            <p className="p1">{comment.comment}</p>
          </div>
        </article>
      ))}
    </ScrollArea>
  );
}
