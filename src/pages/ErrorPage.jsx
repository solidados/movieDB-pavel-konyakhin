import { useRouteError } from "react-router-dom";
import './errorPage.scss'

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="error-page">
      <div>
        <h1>Oops!</h1>
        <p>Something went wrong</p>
        <h2>{error.status}</h2>
        <p>
          <i>
            {error.statusText || error.message}
          </i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
