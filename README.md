# Unresponsive Node.js Server: Unhandled Asynchronous Operation

This repository demonstrates a common issue in Node.js applications where an asynchronous operation runs for an extended period without proper handling, potentially causing the server to become unresponsive.  The example shows how a long-running task can block the event loop and how to address this using Promises and async/await.

## Bug
The `bug.js` file contains a simple Express.js server with a route that simulates a long-running asynchronous operation using `setTimeout`.  Because the response is sent only after 5 seconds, any requests during this period will block, effectively making the server unresponsive.

## Solution
The `bugSolution.js` file provides a solution that uses `async/await` to make asynchronous operations more readable and to maintain responsiveness. The `await` keyword in the `async` function pauses execution until the promise resolves without blocking the event loop.