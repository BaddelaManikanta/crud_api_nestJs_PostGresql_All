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
import { ClassesService } from './classes.service';
import { Class } from './class.entity';
import { Student } from 'src/students/student.entity';

@Controller('classes')
export class ClassesController {
  constructor(private classesService: ClassesService) {}
  @Get()
  getAllClasses(): Promise<Class[]> {
    return this.classesService.getAllClasses();
  }

  @Get(':id')
  async getPostById(@Param('id') id: number) {
    const school = await this.classesService.getClassById(id);
    if (school) {
      return school;
    } else {
      throw new NotFoundException('Post not found');
    }
  }

  @Post()
  createSchool(@Body() clas: Class): Promise<Class> {
    return this.classesService.createClass(clas);
  }
  @Delete(':id')
  async deleteClass(@Param('id') id: number) {
    return this.classesService.deleteClass(id);
  }

  @Patch(':id')
  async updateClass(
    @Param('id') id: number,
    @Body() updateClassData: Partial<Class>,
  ) {
    const clas = this.classesService.updateClass(id, updateClassData);
    if (clas) {
      return clas;
    } else {
      throw new NotFoundException('Id Not Availble');
    }
  }

  @Get(':id/students')
  getStudentsByClassId(@Param('id') id: number): Promise<Student[]> {
    return this.classesService.getStudentsByClassId(id);
  }
}
