package com.example.backend.service;

import com.example.backend.entity.Student;
import com.example.backend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImplementation implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public List<Student> fetchAllStudents(String sortParam) {
        // Retrieve all students from the database and optionally sort them
        if ("asc".equalsIgnoreCase(sortParam)) {
            return studentRepository.findAll(Sort.by(Sort.Direction.ASC, "grade"));
        } else if ("desc".equalsIgnoreCase(sortParam)) {
            return studentRepository.findAll(Sort.by(Sort.Direction.DESC, "grade"));
        } else {
            // Return unsorted list if sortParam is not provided or invalid
            return (List<Student>) studentRepository.findAll();
        }
    }

    @Override
    public Student fetchStudentById(int id) {
        // Retrieve a student by their ID from the database
        return studentRepository.findById(id).orElse(null);
    }

    @Override
    public Student createNewStudent(Student student) {
        // Create a new student and save them to the database
        return studentRepository.save(student);
    }

    @Override
    public Student updateStudent(Student student) {
        // Update an existing student in the database
        // Check if the student exists
        if (!studentRepository.existsById(student.getId())) {
            return null; // If the student doesn't exist, return null
        }

        Student studentToUpdate = studentRepository.findById(student.getId()).get();
        studentToUpdate.setFirstName(student.getFirstName());
        studentToUpdate.setLastName(student.getLastName());
        studentToUpdate.setGrade(student.getGrade());

        return studentRepository.save(studentToUpdate);
    }

    @Override
    public void deleteStudent(int studentId) {
        // Delete a student from the database by their ID
        studentRepository.deleteById(studentId);
    }
}