import CommentList from "../CommentList/CommentList";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { addOrderComment, fetchOrderComments } from "../../services/order-api";
import { ToastContainer, Zoom, toast } from "react-toastify";
export default function Conversation({ orderId, isEventHost }) {
  const defaultValues = {
    name: "",
    comment: "",
    role: isEventHost ? "Event Host" : "Event Manager",
  };
  const [error, setError] = useState("");
  const [conversation, setConversation] = useState(defaultValues);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);
  const [comments, setComments] = useState(null);

  const postComment = async (newComment, orderId) => {
    try {
      await addOrderComment(newComment, orderId);
      getComments(orderId);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const getComments = async (orderId) => {
    try {
      setIsCommentsLoading(true);
      const response = await fetchOrderComments(orderId);
      setError("");
      setComments(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsCommentsLoading(false);
    }
  };

  useEffect(() => {
    getComments(orderId);
  }, [orderId]);

  if (isCommentsLoading) {
    return (
      <div className="">
        <div className=""></div>
        <h1 className="">COMMENTS LIST IS LOADING...</h1>
      </div>
    );
  }

  if (error) {
    return <h1 className="">{error.toUpperCase()}</h1>;
  }

  const handleChange = (event, inputName) => {
    setConversation({
      ...conversation,
      [inputName]: event.target.value.trimStart(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      name: conversation.name,
      role: conversation.role,
      comment: conversation.comment,
    };
    postComment(newComment, orderId);
    setConversation(defaultValues);
    toast.success("Your comment was successfully sent", {
      transition: Zoom,
    });
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setConversation(defaultValues);
    toast.info("You canceled your comment", {
      transition: Zoom,
    });
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
      <CommentList comments={comments} />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        pauseOnHover={false}
      />
    </section>
  );
}
