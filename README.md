# Personal Portfolio Website

My personal full-stack developer portfolio, built entirely from scratch to showcase my projects, skills, and experience. The Projects section is fully dynamic — project data is stored in a MySQL database and served through a Java REST API, rather than being hardcoded into the page.

## Features
- Responsive, animated single-page design (About, Experience, Skills, Projects, Contact)
- Projects section pulled live from a MySQL database via a Spring Boot REST API
- Working contact form that saves messages to the database
- Full CRUD API (Create, Read, Update, Delete) for managing projects
- Scroll-triggered animations, animated skill proficiency bars, and a mobile-friendly navigation menu

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Java, Spring Boot (Spring Web, Spring Data JPA)
- **Database:** MySQL
- **Tools:** VS Code, Postman, Git & GitHub

## How It Works
1. The Spring Boot backend exposes REST endpoints (`/api/projects`, `/api/contact`) that connect to a MySQL database via Spring Data JPA.
2. The frontend calls these endpoints using `fetch()` to load projects dynamically and to submit contact form messages.
3. Adding, editing, or removing a project only requires updating the database (via the API) — no changes to the frontend code are needed.

## Project Structure
```
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── portfolio-backend/
│   ├── src/main/java/com/ashokkumar/portfolio_backend/
│   │   ├── controller/         # REST controllers (ProjectController, ContactController)
│   │   ├── model/               # Entity classes (Project, Message)
│   │   └── repository/          # Spring Data JPA repositories
│   ├── src/main/resources/
│   │   └── application.properties.example   # Template config (real file not committed)
│   └── pom.xml
```

## API Endpoints
| Method | Endpoint            | Description                  |
|--------|----------------------|-------------------------------|
| GET    | `/api/projects`      | Get all projects             |
| GET    | `/api/projects/{id}` | Get a single project         |
| POST   | `/api/projects`      | Add a new project             |
| PUT    | `/api/projects/{id}` | Update an existing project    |
| DELETE | `/api/projects/{id}` | Delete a project              |
| POST   | `/api/contact`       | Submit a contact form message |
| GET    | `/api/contact`       | View all contact messages     |

## Setup & Run Locally
1. Clone this repository
2. Set up MySQL locally and create a database (e.g. `portfolio_db`)
3. In `portfolio-backend/src/main/resources`, copy `application.properties.example` to `application.properties` and fill in your real MySQL username and password
4. Run the backend:
   ```
   cd portfolio-backend
   ./mvnw spring-boot:run
   ```
5. Open `frontend/index.html` in your browser (make sure the backend is running on port 8080 first)

## My Other Projects
- [AI-Based Job Role Recommendation System](https://github.com/rashokkumarak321-cpu/job-role-recommendation-system)
- Smart Feedback Collection and Analysis System *(see my GitHub profile)*

## Author
Built by R. Ashok Kumar — B.E. Computer Science Engineering, 2026
