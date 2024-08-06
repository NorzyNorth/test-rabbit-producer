/* eslint-disable camelcase */
import { Injectable } from '@nestjs/common';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { HttpException } from '@nestjs/common';

@Injectable()
export class RabbitmqService {
    constructor(
        private amqpConnection: AmqpConnection
    ) { }
    async publishFiles(testBody : any): Promise<string> {
        try {
            const  boolka = await this.amqpConnection.publish('logger_microservice', 'logger_microservice', testBody);
            console.log(boolka)
            return `${boolka}`
        } catch (error) {
            console.log(error)
            throw new HttpException(
                'Не удалось отправить данные, попробуйте позже', 500
            );
        }
    }
}