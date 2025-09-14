import { Controller, Get } from '@nestjs/common';

@Controller('blog')
export class BlogController {
  @Get()
  findAll() {
    return 'This action returns all blog posts';
  }
}
