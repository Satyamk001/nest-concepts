import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import any = jasmine.any;

@Injectable()
export class DestinationsService {
  constructor(private prismaService : PrismaService) {
  }

  async create(userId : number, createDestinationDto: CreateDestinationDto) {
    return this.prismaService.destination.create({
      data : {
        ...createDestinationDto,
        userId,
      }
    })
  }

  async findAll(userId : number) {
    return this.prismaService.destination.findMany({
      where : {
        userId,
      }
    })
  }

  async findOne(userId : number, id : number) {
    return this.prismaService.destination.findFirst({
      where : {
        userId,
        id,
      }
    })
  }
}
