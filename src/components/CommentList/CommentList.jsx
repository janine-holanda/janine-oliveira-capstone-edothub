import { ScrollArea } from "@/components/ui/scroll-area";

export default function CommentList({ comments }) {
  return (
    <ScrollArea className="ml-1 mr-1 h-[27rem] w-full rounded-md border p-4 mt-4">
      {comments.map((comment) => (
        <article
          key={comment.comment_id}
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
