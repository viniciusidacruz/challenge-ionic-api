import { PrismaTodosRepository } from "@/repositories/prisma/prisma-todos-repository";
import { CreateTodoUseCase } from "../create-todo";

export function makeCreateTodoUseCase() {
  const prismaTodosRepository = new PrismaTodosRepository();
  const createTodoUseCase = new CreateTodoUseCase(prismaTodosRepository);

  return createTodoUseCase;
}
