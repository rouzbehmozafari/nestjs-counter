import { Controller, Get, Post } from '@nestjs/common';
import { CounterResponseDto } from '../application/dtos/counter-response.dto';
import {
  GetCounterUseCase,
  IncrementCounterUseCase,
} from '../application/use-cases/counter.use-case';

@Controller('counter')
export class CounterController {
  constructor(
    private readonly getCounterUseCase: GetCounterUseCase,
    private readonly incrementCounterUseCase: IncrementCounterUseCase,
  ) {}

  @Get()
  getCounter(): CounterResponseDto {
    return this.getCounterUseCase.getCounter();
  }

  @Post('/increment')
  incrementCounter(): CounterResponseDto {
    return this.incrementCounterUseCase.incrementCounter();
  }
}
