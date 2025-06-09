import { Injectable } from '@nestjs/common';
import { Counter } from '../../domain/entities/counter.entity';
import { CounterRepository } from '../../domain/repositories/counter.repository.interface';

@Injectable()
export class InMemoryCounterRepository implements CounterRepository {
  private counter: Counter = new Counter(0);

  getCounter(): Counter {
    return this.counter;
  }
}
