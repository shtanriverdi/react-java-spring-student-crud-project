import { Table } from "reactstrap";

export default function Students({ students }) {
  const tableItems = students.map((student) => {
    return (
      <tr key={student.id}>
        <th>{student.id}</th>
        <td>{student.firstName}</td>
        <td>{student.lastName}</td>
        <td>{student.grade}</td>
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
