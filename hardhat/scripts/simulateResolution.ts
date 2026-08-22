type Comparator =
  | "GREATER_THAN"
  | "GREATER_THAN_OR_EQUAL"
  | "LESS_THAN"
  | "LESS_THAN_OR_EQUAL"
  | "EQUAL";

function compare(
  observed: bigint,
  target: bigint,
  comparator: Comparator
): boolean {
  switch (comparator) {
    case "GREATER_THAN":
      return observed > target;

    case "GREATER_THAN_OR_EQUAL":
      return observed >= target;

    case "LESS_THAN":
      return observed < target;

    case "LESS_THAN_OR_EQUAL":
      return observed <= target;

    case "EQUAL":
      return observed === target;
  }
}

async function main() {
  const observed = 4200n;

  const target = 4000n;

  const comparator:
    Comparator =
    "GREATER_THAN_OR_EQUAL";

  console.log(
    "=== Local Resolution Simulation ==="
  );

  console.log(
    "Observed value:",
    observed.toString()
  );

  console.log(
    "Target value:",
    target.toString()
  );

  console.log(
    "Comparator:",
    comparator
  );

  const result = compare(
    observed,
    target,
    comparator
  );

  console.log("");

  console.log(
    "Market result:",
    result ? "YES" : "NO"
  );

  console.log("");

  console.log(
    "This script simulates only the comparison stage."
  );

  console.log(
    "HTTP and jq execution are not reproduced here."
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
