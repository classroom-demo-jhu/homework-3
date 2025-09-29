#!/usr/bin/env node
import { sumOfMultiples } from '../solution.js';

(async () => {
  let input = '';
  for await (const chunk of process.stdin) input += chunk;

  const n = Number(String(input).trim());
  if (!Number.isFinite(n)) {
    process.exit(1);
    return;
  }

  const result = sumOfMultiples(n);
  if (!Number.isFinite(result)) {
    process.exit(1);
    return;
  }

  // Print only the numeric result for exact comparison in IO tests
  console.log(String(result));
})().catch(() => process.exit(1));
