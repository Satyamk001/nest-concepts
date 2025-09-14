import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // MAKES THE MODULE GLOBALLY SCOPED
@Module({
  providers: [PrismaService], //REGISTERING THE SERVICE IN THIS MODULE
  exports: [PrismaService], // EXPORTING THE SERVICE TO MAKE IT AVAILABLE IN OTHER MODULES
})
export class PrismaModule {}
