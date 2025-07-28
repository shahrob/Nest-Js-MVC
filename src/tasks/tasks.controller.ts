import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto, TaskResponseDto } from './dto/task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createTaskDto: CreateTaskDto,
    @Request() req: any,
  ): Promise<TaskResponseDto> {
    const task = await this.tasksService.create(createTaskDto, req.user.userId);
    return this.transformToResponse(task);
  }

  @Get()
  async findAll(@Request() req: any): Promise<TaskResponseDto[]> {
    const tasks = await this.tasksService.findAll(req.user.userId);
    return tasks.map((task) => this.transformToResponse(task));
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Request() req: any,
  ): Promise<TaskResponseDto> {
    const task = await this.tasksService.findOne(id, req.user.userId);
    return this.transformToResponse(task);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @Request() req: any,
  ): Promise<TaskResponseDto> {
    const task = await this.tasksService.update(
      id,
      updateTaskDto,
      req.user.userId,
    );
    return this.transformToResponse(task);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string, @Request() req: any): Promise<void> {
    await this.tasksService.remove(id, req.user.userId);
  }

  private transformToResponse(task: any): TaskResponseDto {
    return {
      id: task._id || task.id,
      title: task.title,
      description: task.description,
      status: task.status,
      userId: task.userId,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    };
  }
}
