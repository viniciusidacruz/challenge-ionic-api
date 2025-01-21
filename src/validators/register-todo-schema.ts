import { z } from "zod";

export const registerTodoSchema = z.object({
  completed: z.boolean(),
  description: z.string(),
  finishedAt: z.string(),
  title: z.string(),
});
