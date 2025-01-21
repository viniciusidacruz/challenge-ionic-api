import { app } from "@/app";
import { env } from "@/config/env";

app
  .listen({
    host: "0.0.0.0",
    port: env.PORT,
  })
  .then(() => {
    console.log(`Server is running at http://localhost:${env.PORT} ✅`);
  })
  .catch((err) => {
    console.error(`Error starting server: ${err} ⛔`);

    process.exit(1);
  });
