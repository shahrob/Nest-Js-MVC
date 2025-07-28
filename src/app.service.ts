import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getApiInfo(): any {
    return {
      name: 'NestJS MongoDB Sample API',
      version: '1.0.0',
      description:
        'A sample NestJS application with MongoDB, JWT authentication, and CRUD operations',
      endpoints: {
        auth: {
          register: 'POST /auth/register',
          login: 'POST /auth/login',
        },
        users: {
          'get all users': 'GET /users',
          'get user by id': 'GET /users/:id',
          'update user': 'PATCH /users/:id',
          'delete user': 'DELETE /users/:id',
        },
        tasks: {
          'create task': 'POST /tasks',
          'get all tasks': 'GET /tasks',
          'get task by id': 'GET /tasks/:id',
          'update task': 'PATCH /tasks/:id',
          'delete task': 'DELETE /tasks/:id',
        },
      },
      authentication: 'Bearer Token (JWT)',
    };
  }
}
