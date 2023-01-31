import { useRouteError, Link } from "react-router-dom";
import "./Error.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="TheMe">Oops!</h1>
      <h2 id="SomeSpace1">
        404 -<span className="TheOR"> PAGE NOT FOUND</span>
      </h2>
      <p className="Shorter">
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable
      </p>
      <p id="statusT">
        <i>{error.statusText || error.message}</i>
      </p>
      <button className="TheButton">
        <Link id="THeTextDoc" to="/">Go HomePage</Link>
      </button>
    </div>
  );
}
