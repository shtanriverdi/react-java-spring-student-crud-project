package com.example.backend;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Random;

// Creates a table and inserts 50 random students for testing purposes
public class InsertTestData {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/students_db";
        String username = "root";
        String password = "genesis";

        try (Connection connection = DriverManager.getConnection(url, username, password)) {
            Statement statement = connection.createStatement();

            // Check if the table exists, if not create one
            if (!isTableExists(statement)) {
                createTable(statement);
            }

            String tableName = "students";

            // Insert 50 sample students to database
            for (int i = 1; i <= 50; i++) {
                String firstName = generateRandomName();
                String lastName = generateRandomName();
                int grade = generateRandomGrade();

                String insertSQL = "INSERT INTO " + tableName + " (first_name, last_name, grade) " +
                        "VALUES ('" + firstName + "', '" + lastName + "', " + grade + ")";
                statement.executeUpdate(insertSQL);
            }

            System.out.println("50 students were added.");
        } catch (SQLException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }

    private static String generateRandomName() {
        String[] names = {"James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas", "Christopher", "Daniel", "Matthew", "Anthony", "Mark", "Donald", "Steven", "Paul", "Andrew", "Kenneth", "Joshua", "George", "Kevin", "Brian", "Edward", "Ronald", "Timothy", "Jason", "Jeffrey", "Ryan", "Jacob", "Gary", "Nicholas", "Eric", "Stephen", "Jonathan", "Larry", "Justin", "Scott", "Brandon", "Frank", "Benjamin", "Gregory", "Raymond", "Samuel", "Patrick", "Alexander"};
        Random random = new Random();
        return names[random.nextInt(names.length)];
    }

    private static int generateRandomGrade() {
        Random random = new Random();
        return random.nextInt(101);
    }

    private static boolean isTableExists(Statement statement) throws SQLException {
        ResultSet resultSet = statement.executeQuery("SHOW TABLES LIKE '" + "students" + "'");
        return resultSet.next();
    }

    private static void createTable(Statement statement) throws SQLException {
        String createTableSQL = "CREATE TABLE " + "students" + " (" +
                "id INT AUTO_INCREMENT PRIMARY KEY, " +
                "first_name VARCHAR(255), " +
                "last_name VARCHAR(255), " +
                "grade INT)";
        statement.executeUpdate(createTableSQL);
    }
}
