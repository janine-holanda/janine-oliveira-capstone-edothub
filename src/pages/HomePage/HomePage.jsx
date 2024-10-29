import imageLogo from "../../assets/logo/edothub-logo-30px.svg";
import "react-toastify/dist/ReactToastify.css";
import clientIcon from "../../assets/icons/person_24dp_1E293B_FILL0_wght400_GRAD0_opsz24.svg";
import managementTeamIcon from "../../assets/icons/manage_accounts_24dp_1E293B_FILL0_wght400_GRAD0_opsz24.svg";

import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, Zoom, toast } from "react-toastify";
import Footer from "@/components/Footer/Footer";

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
    <section className="md:flex md:flex-col md:justify-center md: items-center pt-16 px-4 pb-4 bg-gradient-to-tl h-full from-rose-950 to-e-wine h-screen">
      <div className="flex flex-col justify-center items-center h-1/3">
        <h2 className="text-rose-50 font-light text-base">Welcome to</h2>
        <img className="h-24 mb-4" src={imageLogo} alt="E.Hub Logo" />
      </div>
      <p className="text-rose-50 text-justify hidden">
        E.Hub is your go-to solution for all event-related needs within your
        corporate environment. Whether you’re organizing a meeting or
        conferences, E.Hub simplifies the process, ensuring everything runs
        smoothly.
      </p>
      <section className="md:w-fit md:h-fit md:py-4 md:px-12 flex flex-col items-center gap-y-4 justify-center h-2/3 px-4 pt-8 rounded-xl shadow-xlg ring-1 ring-black/5 bg-gradient-to-tr from-rose-950 to-e-wine">
        <h2 className="text-rose-50 md:my-4 text-center font-medium text-base mb-8">
          Log In:{" "}
        </h2>

        <div className="flex flex-col gap-y-4 mb-16 md:mb-4">
          <Button
            className=" hover:bg-e-sun  isolate border-e-wine bg-e-baby-pink/5 shadow-lg ring-black/50"
            variant="outline"
            onClick={handleHost}
          >
            <img src={clientIcon} alt="Client Icon" /> Event Host
          </Button>
          <Button
            className=" hover:bg-e-sun isolate border-e-wine bg-e-baby-pink/5 shadow-lg ring-black/50"
            variant="outline"
            onClick={handleManager}
          >
            <img src={managementTeamIcon} alt="Management Team Icon" /> Event
            Manager
          </Button>
        </div>

        <Footer />
      </section>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        pauseOnHover={false}
      />
    </section>
  );
}
