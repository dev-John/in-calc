import dotenv from "dotenv";
import qs from "qs";
import Hapi from "@hapi/hapi";
import Inert from "@hapi/inert";
import Vision from "@hapi/vision";
import HapiSwagger from "hapi-swagger";

import routes from "./routes/index.js";
import { swaggerOptions } from "./config/swagger.js";

dotenv.config();

export const server = new Hapi.server({
  port: process.env.PORT || 3000,
  // host: "0.0.0.0", // removido pois o heroku nao aceita a propriedade
  routes: { cors: { origin: ["*"], credentials: true } },
  query: { parser: (query) => qs.parse(query) },
});

await server.register([
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: swaggerOptions,
  },
]);

server.route(routes);

const init = async () => {
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);

  throw new Error("Ocorreu um erro na execução do servidor");
});

init();
