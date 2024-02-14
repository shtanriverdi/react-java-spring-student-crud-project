import { Table } from "reactstrap";
import Details from "./Details";

export default function Students({ students, onStudentDelete, onRefresh }) {
  const tableItems = students.map((student) => {
    return (
      <tr key={student.id}>
        <th>{student.id}</th>
        <td>{student.firstName}</td>
        <td>{student.lastName}</td>
        <td>{student.grade}</td>
        <td>
          <Details
            student={student}
            onStudentDelete={onStudentDelete}
            onRefresh={onRefresh}
          />
        </td>
      </tr>
    );
  });

  return (
    <Table>
      <thead>
        <tr>
          <th># ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>{tableItems}</tbody>
    </Table>
  );
}
