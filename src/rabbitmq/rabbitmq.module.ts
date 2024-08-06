import { Module } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { RabbitmqController } from './rabbitmq.controller';

@Module({
    imports: [
        RabbitMQModule.forRoot(RabbitMQModule, {
            exchanges: [
                {
                    name: 'testExchange',
                    type: 'direct',
                },
            ],
            uri: 'amqp://user:password@localhost:5672',
            connectionInitOptions: { wait: false },
        }),
    ],
    providers: [RabbitmqService],
    controllers:[RabbitmqController],
    exports: [RabbitmqService]
})
export class RabbitmqModule { }
