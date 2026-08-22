type AttemptResult =
  | "SUCCESS"
  | "HTTP_FAILURE"
  | "JQ_FAILURE"
  | "INVALID_VALUE";

const attempts: AttemptResult[] = [
  "HTTP_FAILURE",
  "JQ_FAILURE",
  "SUCCESS",
];

function runAttempt(
  index: number,
  result: AttemptResult
) {
  console.log(
    `Attempt ${index + 1}`
  );

  console.log(
    "Result:",
    result
  );

  if (result === "SUCCESS") {
    console.log(
      "Resolution succeeded."
    );

    return true;
  }

  console.log(
    "Resolution attempt failed."
  );

  console.log(
    "Another scheduled attempt may continue."
  );

  return false;
}

async function main() {
  console.log(
    "=== Resolution Retry Simulation ==="
  );

  let resolved = false;

  for (
    let i = 0;
    i < attempts.length;
    i++
  ) {
    resolved = runAttempt(
      i,
      attempts[i]
    );

    if (resolved) {
      break;
    }

    console.log("");
  }

  console.log("");

  if (resolved) {
    console.log(
      "Final market state: RESOLVED"
    );
  } else {
    console.log(
      "Final market state: INVALID"
    );
  }

  console.log("");

  console.log(
    "This is a local model of retry behavior."
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
