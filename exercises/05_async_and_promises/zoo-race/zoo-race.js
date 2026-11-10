// Exercise: zoo-race
// Function that creates a Promise representing an animal running a race over a given distance
function animal(name, maxSpeed, maxSpeedRange, midSpeed, midSpeedRange, speed, distance) {
  // Calculate how much distance is covered in the first segment (at maxSpeed)
  const d1 = Math.min(distance, maxSpeedRange);
  // Calculate how much distance is covered in the second segment (at midSpeed)
  const d2 = Math.min(Math.max(0, distance - maxSpeedRange), midSpeedRange);
  // Calculate the remaining distance covered in the third segment (at fallback speed)
  const d3 = Math.max(0, distance - maxSpeedRange - midSpeedRange);
  // Total time is the sum of (distance / speed) for all 3 segments
  const time = d1 / maxSpeed + d2 / midSpeed + d3 / speed;
  // Return a Promise that resolves with the animal's name after "time" milliseconds
  return new Promise((res) => setTimeout(() => res(name), time));
}

// Function that races an array of animal Promises and resolves with the winner's name
function zooRace(animals) {
  // Promise.race() resolves with the value of whichever animal Promise finishes first
  return Promise.race(animals);
}
