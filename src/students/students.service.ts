import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { Class } from 'src/classes/class.entity';
import { School } from 'src/schools/school.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
    @InjectRepository(Class)
    private classRepository: Repository<Class>,
    @InjectRepository(School)
    private schoolRepository: Repository<School>,
  ) {}
  async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async createStudent(student: Student): Promise<Student> {
    return this.studentRepository.save(student);
  }
  // async getStudentById(id: number): Promise<Student | undefined> {
  //   if (!id) {
  //     throw new NotFoundException('id not found ');
  //   } else {
  //     return this.studentRepository.findOne({ where: { id } });
  //   }
  // }
  async deleteStudent(id: number): Promise<Student | unknown> {
    return this.studentRepository.delete(id);
  }

  async updateStudent(
    id: number,
    updateStudentData: Partial<Student>,
  ): Promise<Student | unknown> {
    await this.studentRepository.update(id, updateStudentData);
    const updatedStudent = await this.studentRepository.findOne({
      where: { id },
    });
    return updatedStudent;
  }
  async getStudentById(id: number): Promise<Student> {
    return this.studentRepository
      .createQueryBuilder('student')
      .leftJoinAndSelect('student.school', 'school')
      .leftJoinAndSelect('student.class', 'class')
      .where('student.id = :id', { id })
      .getOne();
  }
  async getStudentDetails(
    classId: number,
    schoolId: number,
  ): Promise<Student[]> {
    return this.studentRepository
      .createQueryBuilder('student')
      .leftJoinAndSelect('student.class', 'class')
      .leftJoinAndSelect('student.school', 'school')
      .where('class.id = :classId', { classId })
      .andWhere('school.id = :schoolId', { schoolId })
      .getMany();
  }
}
