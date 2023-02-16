import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.register([
      {
        name: process.env.RABBIT_MQ_SERVICE_NAME,
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBIT_MQ_URL],
          queue: process.env.RABBIT_MQ_URL,
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
})
export class RmqModule {}
