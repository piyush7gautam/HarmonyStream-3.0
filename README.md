# HarmonyStream-3.0
A role-based music streaming web application
Project Overview

Harmony Stream 3.0 is a full-stack, role-based music streaming web application inspired by platforms like Spotify. The application allows users to stream music, artists to upload songs, and administrators to manage and approve content.

The project demonstrates real-world concepts such as role-based access control, RESTful APIs, database integration, and modern frontend development.

User Roles
Listener

View approved songs

Play and pause music

Like songs

Stream count tracking

Artist

Upload new songs

View uploaded songs

Track approval status (Pending / Approved)

Admin

View all uploaded songs

Approve or reject songs

Control content visibility

Technologies Used
Frontend

React.js

JavaScript (ES6)

Tailwind CSS

Vite

Backend

Node.js

Express.js

Database

MySQL

Tools

VS Code

MySQL Workbench

Git & GitHub

Project Structure
Harmony Stream 3.0
│
├── backend
│   ├── routes
│   │   ├── adminRoutes.js
│   │   ├── artistRoutes.js
│   │   ├── authRoutes.js
│   │   └── listenerRoutes.js
│   ├── db.js
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── database.sql
└── README.md

Database Design
Music Table

id

title

artist

audio_url

likes

streams

artist_id

approved

API Endpoints
Listener

GET /api/listener/music

POST /api/listener/like/:id

POST /api/listener/stream/:id

Artist

POST /api/artist/upload

GET /api/artist/songs/:artistId

Admin

GET /api/admin/songs

POST /api/admin/approve/:id

How to Run the Project
Backend

Open terminal

Navigate to backend folder

Install dependencies
npm install

Start server
node server.js

Frontend

Open another terminal

Navigate to frontend folder

Install dependencies
npm install

Start frontend
npm run dev

Testing

Backend APIs tested using browser and Postman

Database verified using MySQL Workbench

UI tested through React frontend

Like and stream counters verified in real time

Innovation / Extra Features

Spotify-style UI layout

Role-based dashboards

Real-time like and stream counters

Content approval workflow

Conclusion

Harmony Stream 3.0 is a complete full-stack web application that demonstrates modern web development practices. The project successfully integrates frontend, backend, and database layers while implementing real-world features such as role management and content moderation.
Developed By Piyush Kumar Gautam

