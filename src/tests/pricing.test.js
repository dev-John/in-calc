import supertest from "supertest";
import { app } from "../index.js";

describe("Integrated tests for the calc", () => {
  it("GET /get-pricing/ - shall return statusCode 200", async () => {
    const response = await supertest(app).get("/get-pricing");

    expect(response.status).toEqual(200);
  });
});
