import { Injectable } from '@nestjs/common';
import { School } from './school.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Class } from 'src/classes/class.entity';
// import { sendResponse } from 'src/response.service';

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(School)
    private schoolRepository: Repository<School>,
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
  ) {}
  async getAllSchools(): Promise<School[]> {
    return this.schoolRepository.find();
  }

  async createSchool(school: School): Promise<School> {
    return this.schoolRepository.save(school);
  }

  async getSchoolById(id: number): Promise<School | undefined> {
    return this.schoolRepository.findOne({ where: { id } });
  }

  async getClassesBySchoolId(schoolId: number): Promise<Class[] | undefined> {
    const data1 = await this.classRepository.find({
      where: { school: { id: schoolId } },
    });
    // console.log(data1);
    return data1;
  }

  async deleteSchool(id: number): Promise<School | unknown> {
    return this.schoolRepository.delete(id);
  }

  async updateSchool(
    id: number,
    updateSchoolData: Partial<School>,
  ): Promise<School | unknown> {
    await this.schoolRepository.update(id, updateSchoolData);
    const updatedSchool = await this.schoolRepository.findOne({
      where: { id },
    });
    return updatedSchool;
  }

  // async getSchoolById(id: string) {
  //   const school = this.schoolRepository.find(parseInt(id));
  //   if (!school) {
  //     return sendResponse(404, 'Error', 'Id Not Found');
  //   } else {
  //     return school;
  //   }
}
