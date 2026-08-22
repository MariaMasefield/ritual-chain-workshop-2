# Local Resolution Simulation

Because the full Ritual execution environment was not available in my local
setup, I made a small simulator for the parts of resolution that are easier
to isolate.

The goal was not to replace Ritual.

The goal was to understand the logic after an external value has been
obtained.

## Comparison

The first simulation takes:

- observed value
- target value
- comparator

For example:

observed = 4200

target = 4000

comparator = >=

The result is:

YES

## Retry

I also modeled a simple three-attempt flow.

Attempt 1 can fail.

Attempt 2 can fail.

Attempt 3 can succeed.

In that case the market still resolves normally.

If all attempts fail, the simulated final state is Invalid.

## Why I Did This

At first the HTTP + jq + executor path felt like one large black box.

By temporarily replacing the external value with a local value, I could focus
on the comparison and retry behavior.

This made the following distinction clearer:

external execution obtains data

market logic interprets data

## What This Does Not Test

This simulator does not reproduce:

- the real HTTP precompile
- the real jq precompile
- TEE executor selection
- Scheduler callbacks

Those still require the actual Ritual environment.

## What It Helped Me Understand

The retry logic is not retrying the prediction itself.

It is retrying the process of obtaining a valid observation.

Once a valid observation exists, the comparison is deterministic.

That was probably the biggest thing I learned from building this small local
version.
