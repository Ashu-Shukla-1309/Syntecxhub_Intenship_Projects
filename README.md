#Author:- Ashutosh Shukla
# Syntecxhub User CRUD API

This is a simple RESTful API built using Node.js, Express, and MongoDB (via Mongoose) for Syntecxhub Internship Task.

## 🚀 Features
- Create, Read, Update, Delete operations for "User"
- MongoDB Atlas / Local MongoDB support
- Ready for deployment on Render

## 🧩 Setup Instructions

### 1. Clone this repository
```bash
git clone https://github.com/<your-username>/Syntecxhub_UserCRUD.git
cd Syntecxhub_UserCRUD
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Copy `.env.example` to `.env` and update with your MongoDB connection string:
```bash
MONGO_URI=your_mongodb_connection_string_here
PORT=5000
```

### 4. Run the project locally
```bash
npm start
```

Server will start on **http://localhost:5000**

### 5. Deploy on Render
- Build command: `npm install`
- Start command: `npm start`
- Add environment variable:
  - `MONGO_URI` = your MongoDB Atlas connection string
