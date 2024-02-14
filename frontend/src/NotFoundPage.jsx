import { Link } from "react-router-dom";
import { Button } from "reactstrap";

export default function NotFoundPage() {
  return (
    <div className="mt-72 flex flex-col justify-center items-center">
      <p className="mb-10 text-6xl text-center">404 Not Found :(</p>
      <Link className="text-2xl font-bold text-center" to="/">
        <Button color="primary" outline size="lg">
          Go Back To Home
        </Button>
      </Link>
    </div>
  );
}
