import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './tasks.entity';

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
    const newTask = this.taskRepo.create({ text });
    return this.taskRepo.save(newTask);
  }

  async update(id: number, data: Partial<Task>): Promise<void> {
    await this.taskRepo.update(id, data);
  }

  async remove(id: number): Promise<void> {
    await this.taskRepo.delete(id);
  }
}
