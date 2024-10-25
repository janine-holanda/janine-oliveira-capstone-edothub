import { useLocation, Link } from "react-router-dom";
import logoImage from "../../assets/logo/edothub-logo-30px.svg";
import clientIcon from "../../assets/icons/person_24dp_1E293B_FILL0_wght400_GRAD0_opsz24.svg";
import managementTeamIcon from "../../assets/icons/groups_24dp_1E293B_FILL0_wght400_GRAD0_opsz24.svg";

export default function Header({ isEventHost }) {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  return (
    <header className="pt-4 pl-4 pr-4 bg-gradient-to-t from-rose-900 to-e-wine relative">
      <div className="p-1 border-e-pink-100 border-2 rounded-2xl w-fit fill-e-baby-pink absolute right-4">
        <img
          src={isEventHost ? clientIcon : managementTeamIcon}
          alt="Client Icon"
          className="fill-e-baby-pink h-4"
        />
      </div>
      <div className="flex flex-col items-center">
        <Link to="/" className="">
          <img className="h-16" src={logoImage} alt="E.Hub Logo" />
        </Link>
        <ul className="grid grid-cols-2 w-full place-content-center place-items-center">
          <li
            className={`flex items-center justify-center w-full pt-2 pl-2 pr-2 pb-4 text-e-rose hover:text-pink-100 hover:font-medium group relative transition-colors duration-[400ms] ${
              splitLocation[1] === "dashboard" || splitLocation[1] === ""
                ? "border-b-[4px] border-b-e-sun border-opacity-95 font-medium text-pink-100"
                : ""
            } ${isEventHost ? "" : "col-span-2"}`}
          >
            <Link to="/dashboard" className="w-fit">
              Dashboard
            </Link>
            <span
              className={`absolute bottom-[-2px] right-0 h-[4px] w-0 bg-e-sun border-opacity-95 transition-all delay-100 duration-100 group-hover:w-full ${
                splitLocation[1] === "dashboard" || splitLocation[1] === ""
                  ? "hidden"
                  : ""
              }`}
            />
          </li>
          <li
            className={`flex items-center justify-center w-full pt-2 pl-2 pr-2 pb-4 text-e-rose hover:text-pink-100 hover:font-medium group relative transition-colors duration-[400ms]  ${
              splitLocation[1] === "createorder"
                ? "border-b-[4px] border-b-e-sun border-opacity-95 font-medium text-pink-100"
                : ""
            } ${isEventHost ? "" : "hidden"}`}
          >
            <Link to="/createorder" className="w-fit">
              + Add an Order
            </Link>
            <span
              className={`absolute bottom-[-2px] right-0 h-[4px] w-0 bg-e-sun border-opacity-95 transition-all delay-100 duration-100 group-hover:w-full ${
                splitLocation[1] === "createorder" || splitLocation[1] === ""
                  ? "hidden"
                  : ""
              }`}
            />
          </li>
        </ul>
      </div>
    </header>
  );
}