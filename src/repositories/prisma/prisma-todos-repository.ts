import { Prisma, Todo } from "@prisma/client";

import { prisma } from "@/lib/prisma";
import { FindManyInput, TodosRepository } from "../todos-repository";

export class PrismaTodosRepository implements TodosRepository {
  async findById(id: string): Promise<Todo | null> {
    const todo = await prisma.todo.findUnique({
      where: { id },
    });

    return todo;
  }

  async create(data: Prisma.TodoCreateInput): Promise<Todo> {
    const todo = await prisma.todo.create({
      data,
    });

    return todo;
  }

  async update(id: string, data: Prisma.TodoUpdateInput): Promise<Todo> {
    const todo = await prisma.todo.update({
      where: { id },
      data,
    });

    return todo;
  }

  async delete(id: string): Promise<void> {
    await prisma.todo.delete({
      where: { id },
    });
  }

  async findMany({ query, page }: FindManyInput): Promise<Todo[]> {
    const todos = await prisma.todo.findMany({
      take: 10,
      skip: (page - 1) * 10,
      where: query
        ? {
            OR: [{ title: { contains: query, mode: "insensitive" } }],
          }
        : undefined,
    });

    return todos;
  }
}
