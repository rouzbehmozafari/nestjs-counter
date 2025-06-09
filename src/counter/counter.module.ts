import { Module } from '@nestjs/common';
import { CounterController } from './controller/counter.controller';
import {
  GetCounterUseCase,
  IncrementCounterUseCase,
} from './application/use-cases/counter.use-case';
import { InMemoryCounterRepository } from './infrastructure/repositories/counter.repository';

const COUNTER_REPOSITORY = 'COUNTER_REPOSITORY';

@Module({
  controllers: [CounterController],
  providers: [
    GetCounterUseCase,
    IncrementCounterUseCase,
    {
      provide: COUNTER_REPOSITORY,
      useClass: InMemoryCounterRepository,
    },
  ],
})
export class CounterModule {}
