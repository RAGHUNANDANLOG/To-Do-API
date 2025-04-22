// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { TasksModule } from './tasks/tasks.module';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/tasks.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'todo_app',
      autoLoadEntities: true,
      synchronize: true, // set to false in production
    }),
    TasksModule,
  ],
})
export class AppModule {}
// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { TasksModule } from './tasks/tasks.module';
// import { Task } from './tasks/tasks.entity';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'sqlite',
//       database: 'tasks.db',
//       entities: [Task],
//       synchronize: true,
//     }),
//     TasksModule,
//   ],
// })
// export class AppModule {}


