// import './NotFoundPage.scss';
import logoImage from "../../assets/logo/edothub-logo-30px.svg";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <section className="page-not-found">
      <div className="page-not-found__wrapper">
        <h1 className="page-not-found__page-header">
          Whoops! We can't find that page 🫣
        </h1>
        <h3 className="page-not-found__instruction">
          Let's find a better place for you to go. Try to click the logo bellow.
        </h3>
        <Link to="/" className="page-not-found__link">
          <img
            className="page-not-instruction__img"
            src={logoImage}
            alt="BrainFlix Logo"
          />
        </Link>
      </div>
    </section>
  );
}
