import { PrismaTodosRepository } from "@/repositories/prisma/prisma-todos-repository";
import { FindTodosUseCase } from "../find-todos";

export function makeFindTodosUseCase() {
  const prismaTodosRepository = new PrismaTodosRepository();
  const findTodosUseCase = new FindTodosUseCase(prismaTodosRepository);

  return findTodosUseCase;
}
