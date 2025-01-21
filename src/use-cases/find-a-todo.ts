import { TodosRepository } from "@/repositories/todos-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface FindATodoUseCaseInput {
  todoId: string;
}

export class FindATodoUseCase {
  constructor(private todosRepository: TodosRepository) {}

  async execute({ todoId }: FindATodoUseCaseInput) {
    const todo = await this.todosRepository.findById(todoId);

    if (!todo) {
      throw new ResourceNotFoundError();
    }

    return todo;
  }
}
