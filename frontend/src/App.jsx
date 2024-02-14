import Students from "./Students";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col h-full w-full mt-32 px-20">
      <h1 className="text-5xl text-center mb-10">Student Management System</h1>
      <div className="flex justify-end mb-10">
        <Link className="text-2xl font-bold text-center" to="/addNewStudent">
          <Button color="success" size="md">
            + Add New Student
          </Button>
        </Link>
      </div>
      <Students />
    </div>
  );
}
