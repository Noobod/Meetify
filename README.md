# Meetify

**Meetify** is a real-time video meeting app built with React, Node.js, MongoDB, Socket.IO, and WebRTC. Users can register, join meetings, and track their history.

## Live Demo

- **Frontend:** [https://meetify-frontend.onrender.com](https://meetify-frontend.onrender.com)  
- **Backend:** [https://meetify-backend.onrender.com](https://meetify-backend.onrender.com)  

## Features

- User authentication (Register/Login)  
- Create and join video meetings  
- Real-time video and audio communication using **WebRTC**  
- Real-time signaling with **Socket.IO**  
- Track meeting history  
- Responsive design  

## Tech Stack

- **Frontend:** React, Vite, CSS Modules  
- **Backend:** Node.js, Express, MongoDB, Mongoose  
- **Real-time Communication:** WebRTC, Socket.IO  
- **Others:** Axios, HTTP Status, dotenv, CORS, bcrypt  

## How WebRTC Works
- Peer-to-peer audio & video streaming in real-time
- Minimal latency, no plugins needed
- Socket.IO handles signaling between users

## Setup & Installation

```bash
# Clone the repo:
git clone https://github.com/Noobod/Meetify.git

# Install dependencies:
npm install

# Create a .env file in the backend with:
PORT=8000
MONGO_URI=<your-mongodb-uri>

# Run the backend:
npm run dev

# Run the frontend
npm run dev
```

## Notes 
- Backend and frontend are deployed separately on Render.
- This project is part of my portfolio showcasing full-stack development and real-time applications with WebRTC.