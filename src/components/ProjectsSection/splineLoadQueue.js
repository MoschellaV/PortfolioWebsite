const queue = [];
let isRunning = false;
let isQueueEnabled = false;

const STAGGER_MS = 1200;
export const QUEUE_START_DELAY_MS = 3000;

function pump() {
  if (!isQueueEnabled || isRunning || queue.length === 0) return;

  isRunning = true;
  const { task, resolve, reject } = queue.shift();

  Promise.resolve()
    .then(task)
    .then(resolve, reject)
    .finally(() => {
      setTimeout(() => {
        isRunning = false;
        pump();
      }, STAGGER_MS);
    });
}

export function enableSplineQueue() {
  if (isQueueEnabled) return;
  isQueueEnabled = true;
  pump();
}

export function scheduleSplineLoad(task, order = 0) {
  return new Promise((resolve, reject) => {
    const item = { task, resolve, reject, order };
    const insertAt = queue.findIndex((entry) => entry.order > order);

    if (insertAt === -1) {
      queue.push(item);
    } else {
      queue.splice(insertAt, 0, item);
    }

    pump();
  });
}
