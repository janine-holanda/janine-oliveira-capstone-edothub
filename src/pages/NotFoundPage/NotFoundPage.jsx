import logoImage from "../../assets/logo/edothub-logo-30px.svg";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NotFoundPage({ isEventHost }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isEventHost === null) {
      return navigate("/");
    }
  }, [isEventHost, navigate]);

  return (
    <section className="p-4 bg-pink-50 h-screen  ">
      <div className="flex flex-col justify-center items-center shadow bg-gradient-to-t h-full from-rose-900 to-e-wine p-4 rounded-xl">
        <h1 className="mb-8 text-e-baby-pink">
          Whoops! We can&apos;t find that page 🫣
        </h1>
        <p className="mb-8 text-e-baby-pink">
          Let&apos;s find a better place for you to go. Click the logo bellow.
        </p>
        <Link to="/" className="">
          <img className="h-32" src={logoImage} alt="E.Hub Logo" />
        </Link>
      </div>
    </section>
  );
}
