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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!firstName.trim()) {
      return;
    }
    if (!lastName.trim()) {
      return;
    }
    if (!grade.trim()) {
      return;
    }

    // If all fields are filled, proceed with form submission
    // You can add your submission logic here

    // Reset form fields and errors
    setFirstName("");
    setLastName("");
    setGrade("");
  };

  return (
    <div className="flex flex-col h-full w-full mt-32 px-20">
      <h1 className="text-5xl text-center mb-10">Register a New Student</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="firstName">First Name</Label>
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
          <Label for="lastName">Last Name</Label>
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
          <Label for="grade">Grade</Label>
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
        <div className="flex justify-end mb-10">
          {/* <Link className="text-2xl font-bold text-center" to="/"> */}
          <Button color="success" size="md">
            + Add New Student
          </Button>
          {/* </Link> */}
        </div>
      </Form>
    </div>
  );
}
