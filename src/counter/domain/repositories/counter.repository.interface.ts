import { Counter } from '../entities/counter.entity';

export interface CounterRepository {
  getCounter(): Counter;
}
