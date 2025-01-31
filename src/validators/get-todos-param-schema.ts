import { z } from "zod";

export const getTodosParamSchema = z.object({
  q: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
});
