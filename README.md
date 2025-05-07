 Frontend-Backend Web Server with Routing using DevOps Tools
A simple full-stack web application demonstrating client-server communication via API routing. Built using Node.js for the backend and HTML/CSS/JS for the frontend, with Docker-based deployment and DevOps workflows.

🚀 Features
Frontend with modern UI and routing buttons

Backend Node.js server with two API routes (/api/hello, /api/goodbye)

Seamless interaction between frontend and backend using fetch()

Dockerized backend for portable deployment

Custom port configuration for both services

📁 Folder Structure
graphql
Copy
Edit
webserver-devops/
│
├── backend/
│   └── server.js          # Node.js backend server with routing
│
├── index.html             # Frontend HTML file
├── style.css              # Frontend styling
├── script.js              # Frontend JS to handle API calls
├── Dockerfile             # Dockerfile for backend deployment
└── README.md              # Project README
⚙️ Setup Instructions
Prerequisites
Node.js

Docker

VS Code (optional but helpful)

Backend Setup (Port: 5001)
bash
Copy
Edit
cd backend
npm init -y
npm install express cors
node server.js
Frontend Setup (Port: 8082)
bash
Copy
Edit
# From project root (where index.html is)
python -m http.server 8082
Open your browser at: http://localhost:8082

🐳 Docker Deployment (Backend Only)
bash
Copy
Edit
# From root
docker build -t webserver-devops .
docker run -p 5001:5001 webserver-devops
📷 Screenshots
Frontend UI
A black-themed modern UI with buttons to test backend routing.

Routing in Action
Click Call Hello API → shows: "Hello from the backend!"

Click Call Goodbye API → shows: "Goodbye from the backend!"
![Screenshot 2025-05-06 171634](https://github.com/user-attachments/assets/84f71da7-42f8-4812-8e8d-919deeae4434)
![image](https://github.com/user-attachments/assets/96c9b9c8-227e-49f7-906c-e0d00579120f)

📬 API Routes
Route	Method	Description
/api/hello	GET	Returns a hello message
/api/goodbye	GET	Returns a goodbye message
