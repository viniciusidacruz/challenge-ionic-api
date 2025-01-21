import { PrismaTodosRepository } from "@/repositories/prisma/prisma-todos-repository";
import { DeleteTodoUseCase } from "../delete-todo";

export function makeDeleteTodoUseCase() {
  const prismaTodosRepository = new PrismaTodosRepository();
  const deleteTodoUseCase = new DeleteTodoUseCase(prismaTodosRepository);

  return deleteTodoUseCase;
}
