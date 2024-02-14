import { Table } from "reactstrap";

export default function Students({ students }) {
  const tableItems = students.map((student) => {
    return (
      <>
        <tr>
          <th scope="row">{student.id}</th>
          <td>{student.first_name}</td>
          <td>{student.last_name}</td>
          <td>{student.grade}</td>
        </tr>
      </>
    );
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>{tableItems}</tbody>
    </Table>
  );
}
