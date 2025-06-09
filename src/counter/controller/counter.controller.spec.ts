import { Test, TestingModule } from '@nestjs/testing'
import { CounterController } from './counter.controller'
import {
  GetCounterUseCase,
  IncrementCounterUseCase,
} from '../application/use-cases/counter.use-case'
import { CounterResponseDto } from '../application/dtos/counter-response.dto'

describe('CounterController', () => {
  let controller: CounterController
  let getCounterUseCase: GetCounterUseCase
  let incrementCounterUseCase: IncrementCounterUseCase

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CounterController],
      providers: [
        {
          provide: GetCounterUseCase,
          useValue: {
            getCounter: jest.fn(),
          },
        },
        {
          provide: IncrementCounterUseCase,
          useValue: {
            incrementCounter: jest.fn(),
          },
        },
      ],
    }).compile()

    controller = module.get<CounterController>(CounterController)
    getCounterUseCase = module.get<GetCounterUseCase>(GetCounterUseCase)
    incrementCounterUseCase = module.get<IncrementCounterUseCase>(
      IncrementCounterUseCase,
    )
  })

  describe('getCounter', () => {
    it('should return counter value', () => {
      const expectedResult = new CounterResponseDto(5)
      jest
        .spyOn(getCounterUseCase, 'getCounter')
        .mockReturnValue(expectedResult)

      const result = controller.getCounter()

      expect(getCounterUseCase.getCounter).toHaveBeenCalled()
      expect(result).toBe(expectedResult)
    })

    it('should return counter value of 0 when counter is at initial state', () => {
      const expectedResult = new CounterResponseDto(0)
      jest
        .spyOn(getCounterUseCase, 'getCounter')
        .mockReturnValue(expectedResult)

      const result = controller.getCounter()

      expect(getCounterUseCase.getCounter).toHaveBeenCalled()
      expect(result).toBe(expectedResult)
    })
  })

  describe('incrementCounter', () => {
    it('should increment counter and return new value', () => {
      const expectedResult = new CounterResponseDto(6)
      jest
        .spyOn(incrementCounterUseCase, 'incrementCounter')
        .mockReturnValue(expectedResult)

      const result = controller.incrementCounter()

      expect(incrementCounterUseCase.incrementCounter).toHaveBeenCalled()
      expect(result).toBe(expectedResult)
    })

    it('should increment counter from 0 to 1', () => {
      const expectedResult = new CounterResponseDto(1)
      jest
        .spyOn(incrementCounterUseCase, 'incrementCounter')
        .mockReturnValue(expectedResult)

      const result = controller.incrementCounter()

      expect(incrementCounterUseCase.incrementCounter).toHaveBeenCalled()
      expect(result).toBe(expectedResult)
    })
  })
})
