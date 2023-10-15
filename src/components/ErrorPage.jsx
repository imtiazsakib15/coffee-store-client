import { Link } from "react-router-dom";
import error from "./../assets/error.gif";

const ErrorPage = () => {
  return (
    <div className="mt-14 text-center space-y-6">
      <Link
        to="/"
        className="px-12 py-3 bg-green-600 text-white text-xl font-semibold rounded"
      >
        Go Home
      </Link>
      <img className="mx-auto" src={error} alt="404 Error" />
    </div>
  );
};

export default ErrorPage;
