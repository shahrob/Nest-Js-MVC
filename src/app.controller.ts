import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getApiInfo();
  }

  @Get('health')
  getHealth(): any {
    return {
      status: 'OK',
      timestamp: new Date().toISOString(),
    };
  }
}
