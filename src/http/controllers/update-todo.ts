import { FastifyReply, FastifyRequest } from "fastify";

import { getURLParamSchema } from "@/validators/get-url-param-schema";
import { registerTodoSchema } from "@/validators/register-todo-schema";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeUpdateTodoUseCase } from "@/use-cases/factories/make-update-todo-use-case";

export async function updateTodo(request: FastifyRequest, reply: FastifyReply) {
  const { completed, description, finishedAt, title } =
    registerTodoSchema.parse(request.body);
  const { id } = getURLParamSchema.parse(request.params);

  try {
    const updateTodoUseCase = makeUpdateTodoUseCase();

    await updateTodoUseCase.execute({
      completed,
      description,
      title,
      id,
      finishedAt,
    });
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: error.message });
    }

    throw error;
  }

  return reply.status(200).send();
}
