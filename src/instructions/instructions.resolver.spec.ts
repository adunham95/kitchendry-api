import { Test, TestingModule } from '@nestjs/testing';
import { InstructionsResolver } from './instructions.resolver';
import { InstructionsService } from './instructions.service';

describe('InstructionsResolver', () => {
  let resolver: InstructionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstructionsResolver, InstructionsService],
    }).compile();

    resolver = module.get<InstructionsResolver>(InstructionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
