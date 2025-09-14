import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register-new-user')
  async register(@Body()registerDto : RegisterDto){
    return this.authService.register(registerDto);
  }
}
