/* eslint-disable prettier/prettier */
import { School } from 'src/schools/school.entity';
import { Student } from 'src/students/student.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
@Entity()
export class Class {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToOne(() => School, schools => schools.classes)
  @JoinColumn({name: 'schoolId', referencedColumnName: 'id'})
  school?: School
  @OneToMany(() => Student, students=> students.class)
  students?: Student


}