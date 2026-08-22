import { expect } from "chai";

type Attempt =
  | "SUCCESS"
  | "FAILURE";

function resolveAttempts(
  attempts: Attempt[]
) {
  for (const attempt of attempts) {
    if (attempt === "SUCCESS") {
      return "RESOLVED";
    }
  }

  return "INVALID";
}

describe("Retry scenarios", function () {
  it("should resolve on first attempt", function () {
    expect(
      resolveAttempts([
        "SUCCESS",
        "FAILURE",
        "FAILURE",
      ])
    ).to.equal("RESOLVED");
  });

  it("should resolve on second attempt", function () {
    expect(
      resolveAttempts([
        "FAILURE",
        "SUCCESS",
        "FAILURE",
      ])
    ).to.equal("RESOLVED");
  });

  it("should resolve on third attempt", function () {
    expect(
      resolveAttempts([
        "FAILURE",
        "FAILURE",
        "SUCCESS",
      ])
    ).to.equal("RESOLVED");
  });

  it("should become invalid after all failures", function () {
    expect(
      resolveAttempts([
        "FAILURE",
        "FAILURE",
        "FAILURE",
      ])
    ).to.equal("INVALID");
  });

  it("should stop caring about later attempts after success", function () {
    const result =
      resolveAttempts([
        "SUCCESS",
        "SUCCESS",
        "SUCCESS",
      ]);

    expect(result).to.equal(
      "RESOLVED"
    );
  });

  it("should support a single attempt", function () {
    expect(
      resolveAttempts([
        "SUCCESS",
      ])
    ).to.equal("RESOLVED");
  });
});
