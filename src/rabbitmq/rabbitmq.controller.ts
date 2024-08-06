import { Body, Controller, Get, Post } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq.service';

@Controller('test')
export class RabbitmqController {
  constructor(private readonly rabbitmqService: RabbitmqService) {}

  @Post()
  async getHello(
    @Body() testBody : any
  ): Promise<string> {
    return await this.rabbitmqService.publishFiles(testBody);
  }
}
