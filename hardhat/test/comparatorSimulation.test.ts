import { expect } from "chai";

type Comparator =
  | ">"
  | ">="
  | "<"
  | "<="
  | "==";

function evaluate(
  observed: bigint,
  target: bigint,
  comparator: Comparator
) {
  if (comparator === ">") {
    return observed > target;
  }

  if (comparator === ">=") {
    return observed >= target;
  }

  if (comparator === "<") {
    return observed < target;
  }

  if (comparator === "<=") {
    return observed <= target;
  }

  return observed === target;
}

describe("Local comparator simulation", function () {
  it("should return YES for greater values", function () {
    expect(
      evaluate(5000n, 4000n, ">")
    ).to.equal(true);
  });

  it("should return YES for equal values using >=", function () {
    expect(
      evaluate(4000n, 4000n, ">=")
    ).to.equal(true);
  });

  it("should return NO when greater condition fails", function () {
    expect(
      evaluate(3000n, 4000n, ">")
    ).to.equal(false);
  });

  it("should support less than comparisons", function () {
    expect(
      evaluate(3000n, 4000n, "<")
    ).to.equal(true);
  });

  it("should support equality comparisons", function () {
    expect(
      evaluate(4000n, 4000n, "==")
    ).to.equal(true);
  });

  it("should reject unequal equality values", function () {
    expect(
      evaluate(3999n, 4000n, "==")
    ).to.equal(false);
  });

  it("should support boundary values", function () {
    const result =
      evaluate(
        4000n,
        4000n,
        "<="
      );

    expect(result).to.equal(true);
  });
});
