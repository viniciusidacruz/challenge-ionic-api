import { TodosRepository } from "@/repositories/todos-repository";

interface FindTodosUseCaseInput {
  page: number;
  query?: string;
}

export class FindTodosUseCase {
  constructor(private todosRepository: TodosRepository) {}

  async execute({ page, query }: FindTodosUseCaseInput) {
    const todos = await this.todosRepository.findMany({
      page,
      query,
    });

    console.log("NESSE NIVEL: ", todos);

    return todos;
  }
}
