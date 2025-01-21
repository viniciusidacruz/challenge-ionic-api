import { PrismaTodosRepository } from "@/repositories/prisma/prisma-todos-repository";
import { UpdateTodoUseCase } from "../update-todo";

export function makeUpdateTodoUseCase() {
  const prismaTodosRepository = new PrismaTodosRepository();
  const updateTodoUseCase = new UpdateTodoUseCase(prismaTodosRepository);

  return updateTodoUseCase;
}
