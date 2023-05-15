import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Student } from './student.entity';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}
  @Get()
  getAllClasses(): Promise<Student[]> {
    return this.studentsService.getAllStudents();
  }

  @Get(':id')
  async getPostById(@Param('id') id: number) {
    const student = await this.studentsService.getStudentById(id);
    if (student) {
      return student;
    } else {
      throw new NotFoundException('Post not found');
    }
  }

  @Post()
  createStudent(@Body() student: Student): Promise<Student> {
    return this.studentsService.createStudent(student);
  }
  @Delete(':id')
  async deleteStudent(@Param('id') id: number) {
    const student = this.studentsService.deleteStudent(id);
    if (student) {
      return student;
    } else {
      throw new NotFoundException('Id Not Availble');
    }
  }

  @Patch(':id')
  async updateStudent(
    @Param('id') id: number,
    @Body() updateStudentData: Partial<Student>,
  ) {
    const student = this.studentsService.updateStudent(id, updateStudentData);
    if (student) {
      return student;
    } else {
      throw new NotFoundException('Id Not Availble');
    }
  }
}
