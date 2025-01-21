import { Prisma, Todo } from "@prisma/client";

export interface FindManyInput {
  page: number;
  query?: string;
}

export interface TodosRepository {
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Todo | null>;
  create(data: Prisma.TodoCreateInput): Promise<Todo>;
  findMany({ query, page }: FindManyInput): Promise<Todo[]>;
  update(id: string, data: Prisma.TodoUpdateInput): Promise<Todo>;
}
