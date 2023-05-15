import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Class } from './class.entity';
import { Repository } from 'typeorm';
import { Student } from 'src/students/student.entity';

@Injectable()
export class ClassesService {
  constructor(
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}
  async getAllClasses(): Promise<Class[]> {
    return this.classRepository.find();
  }

  async createClass(clas: Class): Promise<Class> {
    return this.classRepository.save(clas);
  }
  async getClassById(id: number): Promise<Class | undefined> {
    return this.classRepository.findOne({ where: { id } });
  }

  async deleteClass(id: number): Promise<Class[] | unknown> {
    const clas = this.classRepository.findOne({ where: { id } });
    if (!clas) {
      throw new NotFoundException('id not found ');
    } else {
      return this.classRepository.delete(await clas);
    }
  }

  async getStudentsByClassId(classId: number): Promise<Student[] | undefined> {
    const data1 = await this.studentRepository.find({
      where: { class: { id: classId } },
    });
    // console.log(data1);
    return data1;
  }

  async updateClass(
    id: number,
    updateClassData: Partial<Class>,
  ): Promise<Class | unknown> {
    await this.classRepository.update(id, updateClassData);
    const updatedClass = await this.classRepository.findOne({ where: { id } });
    return updatedClass;
  }
}
