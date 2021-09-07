import { Test } from '@nestjs/testing';
import { BeReportsController } from './be-reports.controller';

describe('BeReportsController', () => {
  let controller: BeReportsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [BeReportsController],
    }).compile();

    controller = module.get(BeReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
