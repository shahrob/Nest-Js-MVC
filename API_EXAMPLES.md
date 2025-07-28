# API Testing Examples

## Authentication

### Register a new user

```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe"
  }'
```

### Login

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john.doe@example.com",
    "password": "password123"
  }'
```

## User Management (Replace TOKEN with actual JWT token)

### Get all users

```bash
curl -X GET http://localhost:3000/users \
  -H "Authorization: Bearer TOKEN"
```

### Get user by ID

```bash
curl -X GET http://localhost:3000/users/USER_ID \
  -H "Authorization: Bearer TOKEN"
```

### Update user

```bash
curl -X PATCH http://localhost:3000/users/USER_ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{
    "firstName": "Jane",
    "lastName": "Smith"
  }'
```

## Task Management (Replace TOKEN with actual JWT token)

### Create a task

```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{
    "title": "Complete project",
    "description": "Finish the NestJS MongoDB project",
    "status": "todo"
  }'
```

### Get all tasks

```bash
curl -X GET http://localhost:3000/tasks \
  -H "Authorization: Bearer TOKEN"
```

### Update task status

```bash
curl -X PATCH http://localhost:3000/tasks/TASK_ID \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer TOKEN" \
  -d '{
    "status": "completed"
  }'
```

### Delete task

```bash
curl -X DELETE http://localhost:3000/tasks/TASK_ID \
  -H "Authorization: Bearer TOKEN"
```

## Health Check

### Check API health

```bash
curl -X GET http://localhost:3000/health
```

### Get API information

```bash
curl -X GET http://localhost:3000/
```
