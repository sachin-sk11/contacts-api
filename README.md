📇 Contacts Management API (Backend)

A Node.js + Express + MongoDB REST API for managing users and their personal contacts.
The API uses JWT authentication to ensure that each user can access only their own contacts.

🚀 Features

User Registration & Login

Password hashing using bcrypt

JWT-based Authentication

Protected routes using middleware

CRUD operations for Contacts

User-specific data isolation

Centralized error handling

MongoDB with Mongoose ODM

🛠️ Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JWT (jsonwebtoken)

bcrypt

dotenv

Environment Variables

Create a .env file in the backend directory:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/contacts-db
ACCESS_TOKEN_JWT=your_secret_key


🔐 Authentication Flow

User registers with email & password

Password is hashed before storing

User logs in

Server returns a JWT access token

Token must be sent in headers for protected routes:

Authorization: Bearer <token>

🛡️ Security

Passwords are never stored in plain text

JWT ensures stateless authentication

Middleware validates token before accessing contacts

Users cannot access or modify other users’ data

🧪 Testing

You can test all APIs using:

Postman

Thunder Client