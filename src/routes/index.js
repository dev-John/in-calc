import pricing from "./pricing.js";

export default [
  ...pricing,
  {
    method: "*",
    path: "/",
    handler: () => "Welcome to the in-calc API",
  },
  {
    method: "*",
    path: "/{any*}",
    handler: () => "Erro 404, a pagina solicitada não existe",
  },
];
