import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InstructionsService } from './instructions.service';
import { Instruction } from './entities/instruction.entity';
import { CreateInstructionInput } from './dto/create-instruction.input';
import { UpdateInstructionInput } from './dto/update-instruction.input';

@Resolver(() => Instruction)
export class InstructionsResolver {
  constructor(private readonly instructionsService: InstructionsService) {}

  @Mutation(() => Instruction)
  createInstruction(@Args('createInstructionInput') createInstructionInput: CreateInstructionInput) {
    return this.instructionsService.create(createInstructionInput);
  }

  @Query(() => [Instruction], { name: 'instructions' })
  findAll() {
    return this.instructionsService.findAll();
  }

  @Query(() => Instruction, { name: 'instruction' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.instructionsService.findOne(id);
  }

  @Mutation(() => Instruction)
  updateInstruction(@Args('updateInstructionInput') updateInstructionInput: UpdateInstructionInput) {
    return this.instructionsService.update(updateInstructionInput.id, updateInstructionInput);
  }

  @Mutation(() => Instruction)
  removeInstruction(@Args('id', { type: () => Int }) id: number) {
    return this.instructionsService.remove(id);
  }
}
