import { Module } from '@nestjs/common';
import { SchoolsController } from './schools.controller';
import { SchoolsService } from './schools.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { School } from './school.entity';
import { ClassesModule } from 'src/classes/classes.module';
import { Class } from 'src/classes/class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([School, Class]), ClassesModule],

  controllers: [SchoolsController],
  providers: [SchoolsService],
})
export class SchoolsModule {}
