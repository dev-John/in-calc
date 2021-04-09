import dotenv from "dotenv";
import qs from "qs";
import Hapi from "@hapi/hapi";

import routes from "./routes/index.js";

dotenv.config();

export async function init() {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: "localhost", // removido pois o heroku nao aceita a propriedade
    routes: { cors: { origin: ["*"], credentials: true } },
    query: { parser: (query) => qs.parse(query) },
  });

  server.route(routes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
}

process.on("unhandledRejection", (err) => {
  console.log(err);

  throw new Error("Ocorreu um erro na execução do servidor");
});

init();
