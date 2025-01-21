import { PrismaTodosRepository } from "@/repositories/prisma/prisma-todos-repository";
import { FindATodoUseCase } from "../find-a-todo";

export function makeFindTodoUseCase() {
  const prismaTodosRepository = new PrismaTodosRepository();
  const findTodoUseCase = new FindATodoUseCase(prismaTodosRepository);

  return findTodoUseCase;
}
