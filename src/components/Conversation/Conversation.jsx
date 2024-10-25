// import avatarImage from "../../assets/images/Mohan-muruge.jpg";
// import Avatar from "../Avatar/Avatar";
import CommentList from "../CommentList/CommentList";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import commentsData from "../../data/comments.json";
import { useState } from "react";

export default function Conversation({ orderId, isEventHost }) {
  const defaultValues = {
    name: "",
    comment: "",
    role: isEventHost ? "Event Host" : "Event Manager",
  };
  const [conversation, setConversation] = useState(defaultValues);

  const handleChange = (event, inputName) => {
    setConversation({
      ...conversation,
      [inputName]: event.target.value.trimStart(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      id: `${commentsData.length + 1}`,
      order_id: orderId,
      name: conversation.name,
      role: conversation.role,
      comment: conversation.comment,
      timestamp: Date.now(),
    };
    commentsData.push(newComment);
    console.log("commentsData", commentsData);

    setConversation(defaultValues);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setConversation(defaultValues);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="mb-4 ml-1 mr-1">
            <Label htmlFor="nameInput" className="text-xs text-slate-800">
              NAME
            </Label>
            <input
              id="nameInput"
              name="nameInput"
              placeholder="Add your name"
              className="input"
              onChange={(e) => handleChange(e, "name")}
              value={conversation.name}
            ></input>
          </div>
          <div className="mb-4 ml-1 mr-1">
            <Label htmlFor="commentInput" className="text-xs text-slate-800">
              COMMENT
            </Label>
            <textarea
              id="commentInput"
              name="commentInput"
              placeholder="Add a comment"
              className="input h-16"
              onChange={(e) => handleChange(e, "comment")}
              value={conversation.comment}
            ></textarea>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Button
            type="submit"
            className="bg-e-wine ml-1 hover:bg-e-wine hover:opacity-90"
          >
            Send
          </Button>
          <Button variant="outline" onClick={handleCancel} className="mr-1">
            Cancel
          </Button>
        </div>
      </form>
      <CommentList orderId={orderId} />
    </section>
  );
}
