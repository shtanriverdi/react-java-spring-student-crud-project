package com.example.backend.service;
import com.example.backend.entity.Student;
import java.util.List;

public interface StudentService {
    // Read operation
    List<Student> fetchAllStudents(String sortParam);

    // Read operation, for Showing Details
    Student fetchStudentById(int id);

    // Save operation
    Student createNewStudent(Student student);

    // Update operation
    Student updateStudent(Student student);

    // Delete operation
    void deleteStudent(int studentId);
}
