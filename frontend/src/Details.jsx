import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function Details({ student, onStudentDelete, onRefresh }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const handleDelete = async (studentId) => {
    // Send DELETE request
    try {
      const response = await fetch(
        `http://localhost:8080/students/${studentId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // If DELETE request is successful, show success message
        toggle();
        onStudentDelete(true);
        onRefresh();
      } else {
        // If there is an error, handle it accordingly
        console.error("Failed to delete student:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div>
      <Button outline color="info" onClick={toggle}>
        Details
      </Button>
      <Modal className="mt-64" isOpen={modal} toggle={toggle}>
        <ModalHeader className="font-bold" toggle={toggle}>
          Showing Student Details:
        </ModalHeader>
        <ModalBody>
          <div className="flex flex-col">
            <span>Id: {student.id}</span>
            <span>First Name: {student.firstName}</span>
            <span>Last Name: {student.lastName}</span>
            <span>Grade: {student.grade}</span>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            outline
            color="danger"
            onClick={() => {
              handleDelete(student.id);
            }}>
            Delete student
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
