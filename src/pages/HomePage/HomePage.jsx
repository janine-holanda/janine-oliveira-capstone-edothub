import imageLogo from "../../assets/logo/edothub-logo-30px.svg";
import { PersonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HomePage() {
  const [isEventHost, setIsEventHost] = useState(null);
  console.log(isEventHost);

  const navigate = useNavigate();

  const handleHost = () => {
    setIsEventHost(true);
    console.log(isEventHost);
    if (isEventHost) {
      navigate("/dashboard");
    }
  };

  const handleManager = () => {
    setIsEventHost(false);
    console.log(isEventHost);
    if (!isEventHost && isEventHost !== null) {
      navigate("/dashboard");
    }
  };

  return (
    <section className="bg-rose-100 p-4 h-auto">
      <section className="bg-rose-950 p-4 rounded-md">
        <h1 className="text-rose-50 mt-4 mb-4">Welcome to</h1>
        <img className="h-32" src={imageLogo} alt="E.Hub Logo" />
        <p className="text-rose-50 text-justify">
          E.Hub is your go-to solution for all event-related needs within your
          corporate environment. Whether you’re organizing a meeting or
          conferences, E.Hub simplifies the process, ensuring everything runs
          smoothly.
        </p>
        <Separator className="mt-4 mb-4 bg-rose-200" />
        <h2 className="text-rose-50 mb-4">Select your role to proceed: </h2>
        <div className="flex justify-between">
          <Button onClick={handleHost}>
            <PersonIcon /> Event Host
          </Button>
          <Button onClick={handleManager}>
            <PersonIcon /> Event Manager
          </Button>
        </div>
      </section>
    </section>
  );
}
