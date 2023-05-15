/* eslint-disable prettier/prettier */
import { Class } from 'src/classes/class.entity';
import { School } from 'src/schools/school.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToOne(() => Class, classes => classes.students)
  @JoinColumn({name: 'classId', referencedColumnName: 'id'})
  class?: Class;
  @ManyToOne(() => School, schools => schools.students)
  @JoinColumn({name: 'schoolId', referencedColumnName: 'id'})
  school: School;

}