import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function OrderDashboardPage({ isEventHost }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isEventHost === null) {
      return navigate("/");
    }
  }, [isEventHost, navigate]);
  if (isEventHost) {
    return (
      <>
        <h1>I&apos;m an Order Dashboard Page and Im an Event Host</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>I&apos;m an Order Dashboard Page and Im a Event Manager</h1>
      </>
    );
  }
}
