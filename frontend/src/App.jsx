import Students from "./Students";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:8080/students";

export default function App() {
  const [students, setStudents] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleFetch = (sortParam = "") => {
    const fetchData = async (sortParam) => {
      try {
        const response = await fetch(API_URL + "?sortParam=" + sortParam);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchData(sortParam);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex flex-col w-fit mt-32 px-20 mb-28">
        <h1 className="text-5xl text-center mb-10">
          Student Management System
        </h1>
        {showSuccessMessage && (
          <div
            className="flex justify-between items-center alert alert-warning mb-10"
            role="alert">
            <span>Student has been successfully removed!</span>
            <div
              onClick={() => setShowSuccessMessage(false)}
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                padding: "0",
                fontSize: "1.5rem",
                fontWeight: "bolder",
              }}>
              <span aria-hidden="true">×</span>
            </div>
          </div>
        )}
        <div className="flex justify-between mb-10">
          <Button
            outline
            color="secondary"
            onClick={() => handleFetch("asc")}
            size="sm">
            Sort Grades <span className="text-xl">↑</span>
          </Button>
          <Button
            outline
            onClick={() => handleFetch("desc")}
            color="secondary"
            size="sm">
            Sort Grades <span className="text-xl">↓</span>
          </Button>
          <Link className="text-2xl font-bold text-center" to="/addNewStudent">
            <Button color="success" size="md">
              + Add New Student
            </Button>
          </Link>
        </div>
        <Students
          students={students}
          onStudentDelete={setShowSuccessMessage}
          onRefresh={handleFetch}
        />
      </div>
    </div>
  );
}
