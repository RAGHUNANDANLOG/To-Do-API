import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepo.find();
  }

  create(text: string): Promise<Task> {
    const task = this.taskRepo.create({ text });
    return this.taskRepo.save(task);
  }

  async update(id: number, completed: boolean): Promise<void> {
    await this.taskRepo.update(id, { completed });
  }

  async remove(id: number): Promise<void> {
    await this.taskRepo.delete(id);
  }
}
