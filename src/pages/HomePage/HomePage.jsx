import imageLogo from "../../assets/logo/edothub-logo-30px.svg";
import { PersonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom, toast } from "react-toastify";

export default function HomePage({ setIsEventHost }) {
  const navigate = useNavigate();

  const handleHost = () => {
    setIsEventHost(true);
    toast.success("Welcome, Event Host", {
      onClose: () => navigate("/dashboard"),
      transition: Zoom,
    });
  };

  const handleManager = () => {
    setIsEventHost(false);
    toast.success("Welcome, Event Manager", {
      onClose: () => navigate("/dashboard"),
      transition: Zoom,
    });
  };

  return (
    <section className="bg-rose-100 p-4 h-auto">
      <section className="bg-e-wine p-4 rounded-md">
        <h1 className="text-rose-50 mt-4 mb-4">Welcome to</h1>
        <div className="flex justify-center items-center">
          <img className="h-32 mb-4" src={imageLogo} alt="E.Hub Logo" />
        </div>
        <p className="text-rose-50 text-justify">
          E.Hub is your go-to solution for all event-related needs within your
          corporate environment. Whether you’re organizing a meeting or
          conferences, E.Hub simplifies the process, ensuring everything runs
          smoothly.
        </p>
        <Separator className="mt-4 mb-4 bg-e-sun" />
        <h2 className="text-rose-50 mb-4 text-center">
          Select your role to proceed:{" "}
        </h2>
        <div className="flex justify-between md:justify-center space-x-8">
          <Button
            className="border-e-sun hover:bg-e-sun"
            variant="outline"
            onClick={handleHost}
          >
            <PersonIcon /> Event Host
          </Button>
          <Button
            className="border-e-sun hover:bg-e-sun"
            variant="outline"
            onClick={handleManager}
          >
            <PersonIcon /> Event Manager
          </Button>
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        pauseOnHover={false}
      />
    </section>
  );
}
