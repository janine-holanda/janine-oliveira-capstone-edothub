import imageLogo from "../../assets/logo/edothub-logo-30px.svg";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom, toast } from "react-toastify";
import clientIcon from "../../assets/icons/person_24dp_1E293B_FILL0_wght400_GRAD0_opsz24.svg";
import managementTeamIcon from "../../assets/icons/groups_24dp_1E293B_FILL0_wght400_GRAD0_opsz24.svg";

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
    <section className="bg-rose-50 p-4 h-auto">
      <section className="bg-gradient-to-t from-rose-900 to-e-wine p-4 rounded-md shadow">
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
            className=" hover:bg-e-sun"
            variant="outline"
            onClick={handleHost}
          >
            <img src={clientIcon} alt="Client Icon" /> Event Host
          </Button>
          <Button
            className="hover:bg-e-sun"
            variant="outline"
            onClick={handleManager}
          >
            <img src={managementTeamIcon} alt="Management Team Icon" /> Event
            Manager
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
