import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable() // Decorator to mark this class as a provider that can be injected into other classes
export class JwtStrategy extends PassportStrategy(Strategy){
constructor(private configService : ConfigService) {
  super({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract JWT from the Authorization header as a Bearer token
    ignoreExpiration: false, // Do not ignore token expiration
    secretOrKey: configService.get<string>('JWT_SECRET') ||  'JWT_SECRET'// Secret key to validate the JWT, fetched from environment variables
  });
}

async validate(payload: any) {
  return { userId: payload.userId, email: payload.email }; // Return user information from the JWT payload
}
}