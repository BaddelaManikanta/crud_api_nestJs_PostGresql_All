/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from "typeorm";
import { Student } from './student.entity';

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {

}