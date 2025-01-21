import { FastifyReply, FastifyRequest } from "fastify";

import { getURLParamSchema } from "@/validators/get-url-param-schema";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeDeleteTodoUseCase } from "@/use-cases/factories/make-delete-event-use-case";

export async function deleteTodo(request: FastifyRequest, reply: FastifyReply) {
  const { id } = getURLParamSchema.parse(request.params);

  try {
    const deleteTodoUseCase = makeDeleteTodoUseCase();

    await deleteTodoUseCase.execute({ todoId: id });

    return reply.status(200).send();
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: error.message });
    }

    throw error;
  }
}
