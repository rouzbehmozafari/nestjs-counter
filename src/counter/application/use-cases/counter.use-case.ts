import { Injectable, Inject } from '@nestjs/common';
import { CounterRepository } from 'src/counter/domain/repositories/counter.repository.interface';
import { CounterResponseDto } from '../dtos/counter-response.dto';

const COUNTER_REPOSITORY = 'COUNTER_REPOSITORY';

@Injectable()
export class GetCounterUseCase {
  constructor(
    @Inject(COUNTER_REPOSITORY)
    private readonly counterRepository: CounterRepository,
  ) {}

  getCounter(): CounterResponseDto {
    const counter = this.counterRepository.getCounter();

    return new CounterResponseDto(counter.value);
  }
}

@Injectable()
export class IncrementCounterUseCase {
  constructor(
    @Inject(COUNTER_REPOSITORY)
    private readonly counterRepository: CounterRepository,
  ) {}

  incrementCounter(): CounterResponseDto {
    const counter = this.counterRepository.getCounter();

    counter.increment();

    return new CounterResponseDto(counter.value);
  }
}
