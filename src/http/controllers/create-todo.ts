import { FastifyReply, FastifyRequest } from "fastify";

import { registerTodoSchema } from "@/validators/register-todo-schema";
import { makeCreateTodoUseCase } from "@/use-cases/factories/make-create-todo-use-case";

export async function registerTodos(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const { completed, description, finishedAt, title } =
    registerTodoSchema.parse(request.body);

  try {
    const createTodoUseCase = makeCreateTodoUseCase();

    await createTodoUseCase.execute({
      completed,
      description,
      finishedAt,
      title,
    });
  } catch (error) {
    throw error;
  }

  return reply.status(201).send();
}
