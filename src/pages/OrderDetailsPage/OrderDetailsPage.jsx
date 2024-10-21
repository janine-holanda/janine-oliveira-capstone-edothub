import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function OrderDetailsPage({ isEventHost }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isEventHost === null) {
      return navigate("/");
    }
  }, [isEventHost, navigate]);
  if (isEventHost) {
    return (
      <>
        <h1>I&apos;m an Order Details Page and I&apos;m an Event Host</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>I&apos;m an Order Details Page and I&apos;m a Event Manager</h1>
      </>
    );
  }
}
