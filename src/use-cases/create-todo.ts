import { TodosRepository } from "@/repositories/todos-repository";

interface CreateTodoUseCaseInput {
  title: string;
  description: string;
  completed: boolean;
  finishedAt: string;
}

export class CreateTodoUseCase {
  constructor(private todosRepository: TodosRepository) {}

  async execute({
    completed,
    description,
    title,
    finishedAt,
  }: CreateTodoUseCaseInput) {
    await this.todosRepository.create({
      completed,
      description,
      title,
      finishedAt,
    });
  }
}
