import { Test } from '@nestjs/testing';
import { ApiReportsController } from './api-reports.controller';

describe('ApiReportsController', () => {
  let controller: ApiReportsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [ApiReportsController],
    }).compile();

    controller = module.get(ApiReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
