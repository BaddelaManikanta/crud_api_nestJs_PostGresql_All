import { Module } from '@nestjs/common';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';
import { Class } from './class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/students/student.entity';
import { StudentsModule } from 'src/students/students.module';

@Module({
  imports: [TypeOrmModule.forFeature([Class, Student]), StudentsModule],
  controllers: [ClassesController],
  providers: [ClassesService],
  exports: [ClassesService],
})
export class ClassesModule {}
