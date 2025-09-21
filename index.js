import { sumOfMultiples } from './solution.js';

// Simple tests
const testCases = [
  { limit: 10, expected: 23 },
  { limit: 20, expected: 78 },
  { limit: 1000, expected: 233168 },
];

let allTestsPassed = true;

testCases.forEach(test => {
  const result = sumOfMultiples(test.limit);
  if (result === test.expected) {
    console.log(`Test passed for limit ${test.limit}.`);
  } else {
    console.error(`Test failed for limit ${test.limit}. Expected ${test.expected}, but got ${result}.`);
    allTestsPassed = false;
  }
});

if (allTestsPassed) {
  console.log("\nAll tests passed! Great job!");
} else {
  console.log("\nSome tests failed. Keep trying!");
}
