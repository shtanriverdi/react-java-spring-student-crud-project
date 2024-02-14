package com.example.backend.controller;

import com.example.backend.entity.Student;
import com.example.backend.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    // Fetch all students
    // "asc" -> Sorted in ascending order 1, 5, 9
    // "desc" -> Sorted in descending order 9, 5, 1
    @GetMapping("/students")
    @CrossOrigin
    public List<Student> fetchStudentList(@RequestParam(required = false) String sortParam) {
        // Don't sort by default
        if (sortParam == null || sortParam.isEmpty()) {
            return studentService.fetchAllStudents("");
        }
        return studentService.fetchAllStudents(sortParam);
    }

    // Fetch a student by ID
    @GetMapping("/students/{id}")
    @CrossOrigin
    public Student fetchStudentById(@PathVariable int id) {
        return studentService.fetchStudentById(id);
    }

    // Create a new student
    @PostMapping("/students")
    @CrossOrigin
    public Student createNewStudent(@RequestBody Student student) {
        return studentService.createNewStudent(student);
    }

    // Update an existing student
    @PutMapping("/students")
    @CrossOrigin
    public Student updateStudent(@RequestBody Student student) {
        return studentService.updateStudent(student);
    }

    // Delete a student by ID
    @DeleteMapping("/students/{id}")
    @CrossOrigin
    public String deleteStudent(@PathVariable int id) {
        studentService.deleteStudent(id);
        return "Deleted Successfully";
    }
}