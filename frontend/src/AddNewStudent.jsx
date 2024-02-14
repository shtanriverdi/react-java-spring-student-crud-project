import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";

export default function AddNewStudent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!firstName.trim() || !lastName.trim() || !grade.trim()) {
      return;
    }

    // Prepare data for POST request
    const data = {
      firstName: firstName,
      lastName: lastName,
      grade: parseInt(grade),
    };

    if (data.grade < 0 || data.grade > 100) {
      return;
    }

    // Send POST request
    try {
      const response = await fetch("http://localhost:8080/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // If POST request is successful, show success message
        setShowSuccessMessage(true);

        // Reset form fields
        setFirstName("");
        setLastName("");
        setGrade("");
      } else {
        // If there is an error, handle it accordingly
        console.error("Failed to add student:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full mt-32">
      <div className="flex flex-col w-fit px-20">
        <h1 className="text-5xl text-center mb-20">Register a New Student</h1>
        {showSuccessMessage && (
          <div
            className="flex justify-between items-center alert alert-success mb-10"
            role="alert">
            <span>New Student has been successfully added!</span>
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
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="firstName">First Name:</Label>
            <Input
              id="firstName"
              name="fname"
              placeholder="Student Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required={true}
            />
            <FormFeedback tooltip>First name cannot be empty</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name:</Label>
            <Input
              id="lastName"
              name="lname"
              placeholder="Student Surname"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required={true}
            />
            <FormFeedback tooltip>Last name cannot be empty</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="grade">Grade:</Label>
            <Input
              id="grade"
              name="grade"
              placeholder="Student Grade"
              type="number"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required={true}
              min="0"
              max="100"
            />
            <FormFeedback tooltip>Grade cannot be empty</FormFeedback>
          </FormGroup>
          <div className="flex justify-between mt-5">
            <Link className="text-2xl font-bold text-center" to="/">
              <Button outline size="md">
                {"< Go Back"}
              </Button>
            </Link>
            <Button
              type="submit"
              outline
              color="success"
              onClick={handleSubmit}
              size="md">
              + Add New Student
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
