import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Post()
  create(@Body('text') text: string) {
    return this.tasksService.create(text);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body('completed') completed: boolean) {
    return this.tasksService.update(id, completed);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tasksService.remove(id);
  }
}
