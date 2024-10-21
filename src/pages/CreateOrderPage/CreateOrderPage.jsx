import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function CreateOrderPage({ isEventHost }) {
  const navigate = useNavigate();
  console.log(isEventHost);
  useEffect(() => {
    if (!isEventHost) {
      return navigate("/");
    }
  }, [isEventHost, navigate]);
  if (isEventHost) {
    return (
      <>
        <h1>I&apos;m a Create Order Page and I&apos;m an Event Host</h1>
      </>
    );
  }
}
