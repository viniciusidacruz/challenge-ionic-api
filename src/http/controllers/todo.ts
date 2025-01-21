import { FastifyReply, FastifyRequest } from "fastify";

import { getURLParamSchema } from "@/validators/get-url-param-schema";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeFindTodoUseCase } from "@/use-cases/factories/make-find-todo-use-case";

export async function todo(request: FastifyRequest, reply: FastifyReply) {
  const { id } = getURLParamSchema.parse(request.params);

  try {
    const findTodoUseCase = makeFindTodoUseCase();

    const event = await findTodoUseCase.execute({ todoId: id });

    return reply.status(200).send(event);
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: error.message });
    }

    throw error;
  }
}
