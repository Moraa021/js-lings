// Exercise: sleep-breaker
// Function that waits for delay ms, or resolves early if the breaker() function resolves first
function sleepBreaker(delay, breaker) {
  // Promise.race() takes an array of promises and settles as soon as the FIRST promise settles:
  // 1. A timer promise that resolves after delay milliseconds
  // 2. The breaker() promise which can interrupt the sleep early
  return Promise.race([
    new Promise((res) => setTimeout(res, delay)),
    breaker(),
  ]);
}
