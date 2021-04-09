import { api } from "../helpers/http.js";

export function getMeterPrice() {
  return api.get("/get-meter-price");
}
