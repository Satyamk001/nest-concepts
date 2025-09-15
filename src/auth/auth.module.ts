import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [PrismaModule,
    PassportModule,// Import PassportModule to handle authentication strategies
    JwtModule.registerAsync({ // Asynchronous registration of the JWT module to allow dynamic configuration
      imports: [ConfigModule],// Import ConfigModule to access environment variables
      useFactory: // useFactory : A factory function that returns the configuration object for the JWT module
        async (configService : ConfigService) => ({
        secret: configService.get('JTW_SECRET'),
        signOptions: { expiresIn: '60m' },
      }),
      inject: [ConfigService],// Inject ConfigService to access environment variables
    }),
    ConfigModule
  ],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
  controllers: [AuthController],
})
export class AuthModule {}
