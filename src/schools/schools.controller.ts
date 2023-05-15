import { Class } from 'src/classes/class.entity';
import { School } from './school.entity';
import { SchoolsService } from './schools.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  // Query,
} from '@nestjs/common';
import { ClassesService } from 'src/classes/classes.service';

@Controller('schools')
export class SchoolsController {
  constructor(
    private schoolsService: SchoolsService,
    private classesService: ClassesService,
  ) {}
  @Get()
  getAllSchools(): Promise<School[]> {
    return this.schoolsService.getAllSchools();
  }

  @Get(':id')
  async getPostById(@Param('id') id: number) {
    const school = await this.schoolsService.getSchoolById(id);
    if (school) {
      return school;
    } else {
      throw new NotFoundException('Id not found');
    }
  }

  @Post()
  createSchool(@Body() school: School): Promise<School> {
    return this.schoolsService.createSchool(school);
  }

  @Delete(':id')
  async deleteSchool(@Param('id') id: number) {
    const school = this.schoolsService.deleteSchool(id);
    if (school) {
      return school;
    } else {
      throw new NotFoundException('Id Not Availble');
    }
  }

  @Patch(':id')
  async updateSchool(
    @Param('id') id: number,
    @Body() updateSchoolData: Partial<School>,
  ) {
    const school = this.schoolsService.updateSchool(id, updateSchoolData);
    if (school) {
      return school;
    } else {
      throw new NotFoundException('Id Not Availble');
    }
  }

  @Get(':id/classes')
  async getClassesBySchoolId(@Param('id') schoolId: number): Promise<Class[]> {
    return this.schoolsService.getClassesBySchoolId(schoolId);
  }
}
