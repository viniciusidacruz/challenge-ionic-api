import { FastifyReply, FastifyRequest } from "fastify";

import { getTodosParamSchema } from "@/validators/get-todos-param-schema";
import { makeFindTodosUseCase } from "@/use-cases/factories/make-find-todos-use-case";

export async function todos(request: FastifyRequest, reply: FastifyReply) {
  const { page, q } = getTodosParamSchema.parse(request.query);

  try {
    const findTodosUseCase = makeFindTodosUseCase();

    const todos = await findTodosUseCase.execute({
      page,
      query: q,
    });

    console.log("todos: ", todos);

    return reply.status(200).send(todos);
  } catch (error) {
    throw error;
  }
}
