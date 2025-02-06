# Classroom - Online Classroom inspired by Google Classroom
An online Classroom project inspired by Google Classroom made with Spring Boot (Backend) and ReactJS (Frontend)

---

![image](https://github.com/user-attachments/assets/d941ef46-ff7e-4595-9ec9-ea0adb6d2d3c)

![image](https://github.com/user-attachments/assets/4b217240-b3de-4e1f-94fb-f80588c2bcfa)

![image](https://github.com/user-attachments/assets/c15db627-3639-4983-b174-24a36d69c874)

---

# Features
* 👨‍🏫 Course Management – Create, enroll, and organize courses
* 📝 Assignments – Assign students some work
* 📢 Announcements – Share important updates with students
* 💬 Discussions – Enable student-teacher communication
* 📂 File Uploads – Attach learning materials
* 💬 To Do List – Improves students' productivity
* 🔐 Secure Authentication – JWT-based login system

---

# Tech Stack
* Spring Boot - The backend is written in Java
* React JS - The frontend is made using React
* MySQL - The database used for project
* JWT - The authentication is secure using JWT
* Tailwind CSS

---

# Project Setup Guide

## Prerequisites

Ensure you have the following installed:
- [Git](https://git-scm.com/downloads)
- [Java 17+](https://adoptopenjdk.net/)
- [Maven](https://maven.apache.org/download.cgi)
- [Node.js & npm](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

---

## Cloning the Repository

```sh
git clone https://github.com/vedang012/classroom.git
cd classroom
```

---

## Backend (Spring Boot) Setup

### Configure `application.properties`

Create `application.properties` inside `src/main/resources/` and add the following:

```properties
# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/your_database
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# Hibernate Settings
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

# Server Port
server.port=8080
```

### Running the Spring Boot Application

```sh
mvn spring-boot:run
```

Alternatively, if using an IDE like IntelliJ or Eclipse, run the `main` method inside the `ClsasroomApplication` class.

---

## Frontend (React) Setup

### Navigate to the Frontend Directory

```sh
cd frontend
```

### Install Dependencies

```sh
npm install
```

### Start the React Application

```sh
npm start
```

The React app will be available at `http://localhost:5173`.

---

## Additional Notes

- Ensure MySQL is running before starting the backend.
- If you change the backend port, update it in the React API configuration.
- Use `.env` files to store sensitive credentials securely.

Happy coding! 🚀

---


* # Progress
* Database setup ✅
* Authentication with JWT (Role based) ✅
* Backend APIs setup ✅
* Frontend Design ✅
* Student Dashboard ✅
* Teacher Dashboard ✅
* Create / Join classroom using invite code ✅
* Announcement section ✅
* People section ✅


---

# To-Do 
* Files section ⏳
* Live chat ⏳
* Additional options ⏳

  
