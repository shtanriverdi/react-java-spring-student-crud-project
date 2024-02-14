import Students from "./Students";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/students";

export default function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex flex-col w-fit mt-32 px-20 mb-28">
        <h1 className="text-5xl text-center mb-10">
          Student Management System
        </h1>
        <div className="flex justify-end mb-10">
          <Link className="text-2xl font-bold text-center" to="/addNewStudent">
            <Button color="success" size="md">
              + Add New Student
            </Button>
          </Link>
        </div>
        <Students students={students} />
      </div>
    </div>
  );
}
