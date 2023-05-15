import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Class } from 'src/classes/class.entity';
import { School } from 'src/schools/school.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Class, School])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
