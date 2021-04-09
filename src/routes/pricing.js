import Joi from "joi";
import failAction from "../utils/fail-action.js";
import { HTTP_CODES, RESPONSE_STATUS, HTTP_VERBS } from "../constants/index.js";
import { calculatePrice } from "../controllers/pricing.js";

const { GET } = HTTP_VERBS;

export default [
  {
    method: GET,
    path: "/get-pricing/{squareMeters}",

    options: {
      validate: {
        params: Joi.object({
          squareMeters: Joi.number()
            .min(10)
            .max(10000)
            .required()
            .error(new Error("A metragem deve estar entre 10 e 10.000 metros")),
        }),

        failAction,
      },
    },

    async handler(req, h) {
      const { squareMeters } = req.params;

      try {
        const totalValue = await calculatePrice(squareMeters);

        return h.response({ status: RESPONSE_STATUS.SUCCESS, totalValue });
      } catch (error) {
        return h
          .response({ status: RESPONSE_STATUS.FAIL, message: error.message })
          .code(HTTP_CODES.FAIL_VALIDATION);
      }
    },
  },
];
