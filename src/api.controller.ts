import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
  constructor() {}

  @Get('users')
  getHello(): Array<{ id: number; name: string }> {
    return [
      {
        id: 1,
        name: 'John Doe 1',
      },
      {
        id: 2,
        name: 'Jane Doe 2',
      },
    ];
  }
}
