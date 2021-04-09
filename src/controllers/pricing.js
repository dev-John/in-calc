import { getMeterPrice } from "../services/pricing.js";

export async function calculatePrice(squareMeters) {
  const { data } = await getMeterPrice();

  return data.value * squareMeters;
}
