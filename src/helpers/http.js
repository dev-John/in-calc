import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const codes = [413, 401, 400, 403];

const validateStatus = (status) =>
  (status >= 200 && status < 300) || codes.includes(status);

export const api = axios.create({
  baseURL: process.env.IN_SQUARE_PORT,
  validateStatus,
});
