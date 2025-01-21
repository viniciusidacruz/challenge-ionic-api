import { TodosRepository } from "@/repositories/todos-repository";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface DeleteTodoUseCaseInput {
  todoId: string;
}

export class DeleteTodoUseCase {
  constructor(private todosRepository: TodosRepository) {}

  async execute({ todoId }: DeleteTodoUseCaseInput) {
    const todo = await this.todosRepository.findById(todoId);

    if (!todo) {
      throw new ResourceNotFoundError();
    }

    await this.todosRepository.delete(todoId);
  }
}
