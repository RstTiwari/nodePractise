const { parentPort } = require("worker_threads");

let count = 0;
for (let i = 0; i < 20_0000_000_00; i++) {
  count++;
}

parentPort.postMessage(count)
