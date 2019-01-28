import { Quote } from "./quote";

describe("Quote", () => {
  it("should create an instance", () => {
    expect(new Quote(1, "", "", "", 1, 1, new Date(2019, 26, 1))).toBeTruthy();
  });
});
