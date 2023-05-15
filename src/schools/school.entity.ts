/* eslint-disable prettier/prettier */
import { Class } from 'src/classes/class.entity';
import { Student } from 'src/students/student.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
@Entity()
export class School {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  
  @OneToMany(() => Class, classes => classes.school )
  classes?: Class
  @OneToMany(() => Student, students=> students.school)
  students?: Student
}