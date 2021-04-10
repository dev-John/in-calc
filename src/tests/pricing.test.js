import { HTTP_VERBS } from "../constants/index.js";
import { server } from "../index.js";

const { GET } = HTTP_VERBS;

// Start application before running the test case
beforeAll((done) => {
  jest.setTimeout(10000);
  server.events.on("start", () => {
    done();
  });
});

// Stop application after running the test case
afterAll((done) => {
  server.events.on("stop", () => {
    done();
  });
  server.stop();
});

describe("Integrates tests for the calc API", () => {
  it("GET /get-pricing/80 - should return statusCode 200 and the price of the property", async () => {
    const options = {
      method: GET,
      url: "/get-pricing/80",
    };

    const data = await server.inject(options);
    console.log("🚀 ~ file: pricing.test.js ~ line 30 ~ it ~ data", data);

    expect(data.statusCode).toEqual(200);
    expect(data.result.totalValue).toEqual(784000);
  });

  it("GET /get-pricing/9 - should return statusCode 400 and the error 'A metragem deve estar entre 10 e 10.000 metros'", async () => {
    const options = {
      method: GET,
      url: "/get-pricing/9",
    };

    const data = await server.inject(options);
    console.log("🚀 ~ file: pricing.test.js ~ line 43 ~ it ~ data", data);

    expect(data.statusCode).toEqual(400);
    expect(data.result.message).toEqual(
      "A metragem deve estar entre 10 e 10.000 metros"
    );
  });

  it("GET /get-pricing/10001 - should return statusCode 400 and the error 'A metragem deve estar entre 10 e 10.000 metros'", async () => {
    const options = {
      method: GET,
      url: "/get-pricing/10001",
    };

    const data = await server.inject(options);
    console.log("🚀 ~ file: pricing.test.js ~ line 58 ~ it ~ data", data);

    expect(data.statusCode).toEqual(400);
    expect(data.result.message).toEqual(
      "A metragem deve estar entre 10 e 10.000 metros"
    );
  });
});
