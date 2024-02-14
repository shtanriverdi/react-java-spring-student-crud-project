# Student Management System | Simple CRUD in React & Java Spring Boot

### Video Sample:
https://github.com/shtanriverdi/react-java-spring-student-crud-project/assets/36234545/d0c165c4-0cac-4623-8e02-92c26b1812ce

## Introduction
This is a full-stack web application where teachers can view and manage student grades. The application consists of two parts: a backend developed using Spring Boot and a frontend developed using React.js. The backend will handle database operations, while the frontend will provide a user interface for interacting with the system.

## Features
- **Backend (Spring Boot App):**
  - **Listing API:** Retrieves and displays existing records from the database. Supports sorting based on a parameter.
  - **Addition API:** Allows adding a new record to the database.
  - **Deletion API:** Allows deleting an existing record from the database.
  - **Detail API:** Retrieves detailed information about a specific record from the database.

- **Frontend (React.js App):**
  - **Listing Page:** Displays a list of records retrieved from the backend. Provides functionality to sort records and navigate to the detail page.
  - **Addition Page:** Allows users to add a new record with student name and grade information.
  - **Detail Popup:** Displays detailed information about a specific record in a popup window.

## Technologies Used
- **Backend:**
  - Java Spring Boot
  - Spring Data JPA for database interaction
  
- **Frontend:**
  - React.js
  - React Router for navigation
  - Reactstrap for UI components
  - Tailwind CSS for styling

## Getting Started
To run the application locally, follow these steps:

1. Clone the repository from GitHub: [GitHub Repository Link](#)

2. Navigate to the backend directory and run the Spring Boot application.

   ```
   cd backend
   mvn spring-boot:run
   ```

3. Navigate to the frontend directory and install dependencies.

   ```
   cd frontend
   npm install
   ```

4. Start the React.js development server.

   ```
   npm start
   ```

5. Access the application in your web browser at `http://localhost:3000`.

## Screenshots
![Screenshot 2024-02-14 163110](https://github.com/shtanriverdi/react-java-spring-student-crud-project/assets/36234545/9ef16a7f-9651-46f5-8267-0a70d566215d)
![Screenshot 2024-02-14 211518](https://github.com/shtanriverdi/react-java-spring-student-crud-project/assets/36234545/9abd9073-b7ec-4ad9-9876-86f091b656a4)
![Screenshot 2024-02-14 211528](https://github.com/shtanriverdi/react-java-spring-student-crud-project/assets/36234545/e68458f5-4621-4db6-93f2-b9ff8196f777)
![Screenshot 2024-02-14 211545](https://github.com/shtanriverdi/react-java-spring-student-crud-project/assets/36234545/b64d46c3-45c1-4598-b0ee-7072a1c4d1fe)
![Screenshot 2024-02-14 211600](https://github.com/shtanriverdi/react-java-spring-student-crud-project/assets/36234545/6e7a2e62-887b-467a-b36e-f9adb0a6d7d7)
![Screenshot 2024-02-14 211612](https://github.com/shtanriverdi/react-java-spring-student-crud-project/assets/36234545/e56b0ad8-00b2-4d74-a098-f57b5b21a268)

## Additional Notes
- The application does not include a login page as it is assumed to be used by teachers only.
- UI design is implemented using Tailwind CSS for a modern and responsive interface.
- For any questions or issues, feel free to contact us.

Thank you for your interest in our application. Happy coding!
