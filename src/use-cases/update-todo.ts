import { TodosRepository } from "@/repositories/todos-repository";

interface UpdateTodoUseCaseInput {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  finishedAt: string;
}

export class UpdateTodoUseCase {
  constructor(private todosRepository: TodosRepository) {}

  async execute({
    completed,
    description,
    title,
    id,
    finishedAt,
  }: UpdateTodoUseCaseInput) {
    await this.todosRepository.update(id, {
      completed,
      description,
      title,
      finishedAt,
    });
  }
}
