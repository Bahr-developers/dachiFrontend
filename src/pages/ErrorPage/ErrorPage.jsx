import { Link } from "react-router-dom";
import "./ErrorPage.css";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Error Page</title>
        <meta name="description" content="Error page" />
        <link rel="canonical" href="https://dachivgorax.uz/error" />
      </Helmet>

      <section className="PageNotFound">
        <div>
          <h1>404</h1>
          <h3 className="h2">Looks like you are lost</h3>
          <p>The page you are looking for is not available!</p>
          <Link to="/" className="errorLink">
            Go to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
