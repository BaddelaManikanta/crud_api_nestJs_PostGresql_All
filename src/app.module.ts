import { Module } from '@nestjs/common';
import { SchoolsModule } from './schools/schools.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './schools/school.entity';
import { ClassesModule } from './classes/classes.module';
import { StudentsModule } from './students/students.module';
import { Class } from './classes/class.entity';
import { Student } from './students/student.entity';

@Module({
  imports: [
    SchoolsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Dhaivik@2002',
      database: 'project',
      autoLoadEntities: true,
      entities: [School, Class, Student],
      synchronize: true,
    }),
    ClassesModule,
    StudentsModule,
  ],
})
export class AppModule {}
