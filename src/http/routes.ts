import { z } from "zod";

import { FastifyTypedInstance } from "@/interfaces/fastify-instance";
import { registerTodoSchema } from "@/validators/register-todo-schema";

import { todo } from "./controllers/todo";
import { todos } from "./controllers/todos";
import { deleteTodo } from "./controllers/delete-todo";
import { updateTodo } from "./controllers/update-todo";
import { registerTodos } from "./controllers/create-todo";
import { authenticate } from "./controllers/authenticate";
import { authenticateBodySchema } from "@/validators/authenticate-body-schema";

export async function appRoutes(app: FastifyTypedInstance) {
  app.post(
    "/session",
    {
      schema: {
        tags: ["Authenticate"],
        description: "Sign in a user",
        body: authenticateBodySchema,
        response: {
          200: z.object({
            id: z.string(),
          }),
        },
      },
    },
    authenticate
  );

  app.post(
    "/todos/create",
    {
      schema: {
        tags: ["Todos"],
        description: "Create a new todo",
        body: registerTodoSchema,
        response: {
          201: z.null().describe("Todo created successfully"),
        },
      },
    },
    registerTodos
  );

  app.get(
    "/todos",
    {
      schema: {
        tags: ["Todos"],
        description: "Find all todos",
        response: {
          200: z.array(
            z.object({
              description: z.string(),
              completed: z.boolean(),
              finishedAt: z.date(),
              title: z.string(),
              id: z.string(),
              createdAt: z.date(),
            })
          ),
        },
      },
    },
    todos
  );

  app.get(
    "/todo/:id/details",
    {
      schema: {
        tags: ["Todos"],
        description: "Find a todo by id",
        response: {
          200: z.object({
            description: z.string(),
            completed: z.boolean(),
            finishedAt: z.date(),
            title: z.string(),
            id: z.string(),
            createdAt: z.date(),
          }),
        },
      },
    },
    todo
  );

  app.delete(
    "/todo/:id/delete",
    {
      schema: {
        tags: ["Todos"],
        description: "Delete a todo",
        response: {
          200: z.null().describe("Todo deleted successfully"),
        },
      },
    },
    deleteTodo
  );

  app.put(
    "/todo/:id/update",
    {
      schema: {
        tags: ["Todos"],
        description: "Update a todo",
        body: registerTodoSchema,
        response: {
          200: z.null().describe("Todo updated successfully"),
        },
      },
    },
    updateTodo
  );
}
