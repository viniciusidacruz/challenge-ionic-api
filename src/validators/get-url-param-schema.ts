import { z } from "zod";

export const getURLParamSchema = z.object({
  id: z.string(),
});
