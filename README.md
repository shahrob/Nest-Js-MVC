<div align="center">
  <h1>🚀 NestJS MongoDB Sample Project</h1>
Visit `http://localhost:3000` to see the API documentation.

## 🎯 Demo

### Live Demo

- **API Base URL**: `http://localhost:3000`
- **Health Check**: `http://localhost:3000/health`
- **API Info**: `http://localhost:3000/`

### Sample API Responses

<details>
<summary>🔐 Authentication Response</summary>

```json
{
  "user": {
    "id": "64f8b2c9e4b0a1b2c3d4e5f6",
    "email": "john.doe@example.com",
    "firstName": "John",
    "lastName": "Doe",
    "fullName": "John Doe"
  },
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

</details>

<details>
<summary>📋 Task List Response</summary>

```json
[
  {
    "id": "64f8b2c9e4b0a1b2c3d4e5f7",
    "title": "Complete project",
    "description": "Finish the NestJS MongoDB project",
    "status": "in_progress",
    "userId": "64f8b2c9e4b0a1b2c3d4e5f6",
    "createdAt": "2023-09-06T10:00:00.000Z",
    "updatedAt": "2023-09-06T10:00:00.000Z"
  }
]
```

</details>

## 📋 Prerequisitesp>A professional NestJS application with MongoDB integration, JWT authentication, and CRUD operations</p>

  <p>
    <a href="https://nestjs.com/" target="_blank">
      <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS"/>
    </a>
    <a href="https://www.mongodb.com/" target="_blank">
      <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
    </a>
    <a href="https://jwt.io/" target="_blank">
      <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white" alt="JWT"/>
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js"/>
    <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" alt="Express"/>
    <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker"/>
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square" alt="MIT License"/>
  </p>

  <p>
    <strong>This project serves as a comprehensive example of modern backend development with TypeScript, showcasing industry best practices and professional code structure.</strong>
  </p>
</div>

---

## 🚀 Features

- **JWT Authentication**: Secure user authentication with JSON Web Tokens
- **MongoDB Integration**: NoSQL database with Mongoose ODM
- **User Management**: Complete CRUD operations for users
- **Task Management**: Task creation and management system
- **Input Validation**: Comprehensive validation using class-validator
- **Security**: Password hashing with bcrypt
- **TypeScript**: Full TypeScript support with strict typing
- **Professional Structure**: Well-organized code with best practices

## � Quick Start

```bash
# Clone the repository
git clone https://github.com/shahrob//Nest-Js-MVC.git
cd Nest-Js-MVC

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start MongoDB (if running locally)
# mongod

# Run the application
npm run start:dev
```

Visit `http://localhost:3000` to see the API documentation.

## �📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/shahrob//Nest-Js-MVC.git
cd Nest-Js-MVC
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:

```env
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/nestjs-sample
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=24h
APP_NAME=NestJS MongoDB Sample
APP_VERSION=1.0.0
```

5. Start MongoDB service on your machine

## 🚀 Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod

# Debug mode
npm run start:debug
```

The application will be available at `http://localhost:3000`

## 📚 API Documentation

### Authentication Endpoints

#### Register User

```http
POST /auth/register
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### Login

```http
POST /auth/login
Content-Type: application/json

{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### User Management (Protected Routes)

#### Get All Users

```http
GET /users
Authorization: Bearer <jwt-token>
```

#### Get User by ID

```http
GET /users/:id
Authorization: Bearer <jwt-token>
```

#### Update User

```http
PATCH /users/:id
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "firstName": "Jane",
  "lastName": "Smith"
}
```

#### Delete User

```http
DELETE /users/:id
Authorization: Bearer <jwt-token>
```

### Task Management (Protected Routes)

#### Create Task

```http
POST /tasks
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the NestJS MongoDB project",
  "status": "todo"
}
```

#### Get All Tasks

```http
GET /tasks
Authorization: Bearer <jwt-token>
```

#### Get Task by ID

```http
GET /tasks/:id
Authorization: Bearer <jwt-token>
```

#### Update Task

```http
PATCH /tasks/:id
Authorization: Bearer <jwt-token>
Content-Type: application/json

{
  "status": "completed"
}
```

#### Delete Task

```http
DELETE /tasks/:id
Authorization: Bearer <jwt-token>
```

## 🏗️ Project Structure

```
src/
├── app.controller.ts          # Main application controller
├── app.module.ts             # Root application module
├── app.service.ts            # Main application service
├── main.ts                   # Application entry point
├── auth/                     # Authentication module
│   ├── auth.controller.ts
│   ├── auth.module.ts
│   ├── auth.service.ts
│   ├── jwt-auth.guard.ts
│   ├── jwt.strategy.ts
│   └── dto/
│       └── auth.dto.ts
├── users/                    # User management module
│   ├── users.controller.ts
│   ├── users.module.ts
│   ├── users.service.ts
│   ├── user.schema.ts
│   └── dto/
│       └── user.dto.ts
└── tasks/                    # Task management module
    ├── tasks.controller.ts
    ├── tasks.module.ts
    ├── tasks.service.ts
    ├── task.schema.ts
    └── dto/
        └── task.dto.ts
```

## 🐳 Docker Setup

### Using Docker Compose (Recommended)

```bash
# Build and run with Docker Compose
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop services
docker-compose down
```

### Manual Docker Build

```bash
# Build the Docker image
docker build -t nestjs-mongodb-sample .

# Run the container
docker run -p 3000:3000 nestjs-mongodb-sample
```

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 📦 Build

```bash
# Build for production
npm run build

# Run production build
npm run start:prod
```

## � Key Features Showcase

### 🔐 Authentication System

- **JWT-based authentication** with secure token generation
- **Password hashing** using bcrypt for security
- **Protected routes** with guard-based access control
- **User registration and login** endpoints

### 📊 Data Management

- **MongoDB integration** with Mongoose ODM
- **CRUD operations** for users and tasks
- **Data validation** using class-validator
- **Schema-based data modeling**

### 🏗️ Architecture

- **Modular structure** following NestJS best practices
- **Dependency injection** for loose coupling
- **Service-oriented architecture**
- **Clean code principles**

### 🛡️ Security & Validation

- **Input validation** on all endpoints
- **Error handling** with appropriate HTTP status codes
- **CORS configuration** for cross-origin requests
- **Environment-based configuration**

## �🔧 Development

This project uses:

- **NestJS**: Progressive Node.js framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **JWT**: JSON Web Token authentication
- **bcryptjs**: Password hashing
- **class-validator**: Input validation
- **class-transformer**: Object transformation

## 🛡️ Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation and sanitization
- Guard-based route protection
- CORS enabled for cross-origin requests

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## � Project Status

- ✅ **Authentication System**: Complete
- ✅ **User Management**: Complete
- ✅ **Task Management**: Complete
- ✅ **MongoDB Integration**: Complete
- ✅ **Docker Support**: Complete
- ✅ **Input Validation**: Complete
- ⚠️ **Unit Tests**: In Progress
- ⚠️ **API Documentation**: In Progress

## 🗺️ Roadmap

- [ ] Add comprehensive unit tests
- [ ] Implement Swagger/OpenAPI documentation
- [ ] Add rate limiting
- [ ] Implement email verification
- [ ] Add file upload functionality
- [ ] Create admin panel
- [ ] Add real-time features with WebSockets

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [NestJS](https://nestjs.com/) for the amazing framework
- [MongoDB](https://www.mongodb.com/) for the database
- [JWT](https://jwt.io/) for authentication
- The open-source community for inspiration

## 📞 Support & Contact

- **Issues**: Please open an issue in the repository
- **Email**: shahrobk@gmail.com
- **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/shahrob-abbas/)
- **Upwork**: [Hire me on Upwork](https://www.upwork.com/freelancers/~01589f1d414475058b)

<div align="center">
  <p>⭐ Star this repository if you find it helpful!</p>
  <p>Made with ❤️ by Muhammad Shahrob Abbas (Sr.Full Stack Developer)</p>
</div>
