function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

// const createMultiplier = (factor) => (number) => number * factor;

let multiplier;

multiplier = createMultiplier(2);
console.log(multiplier(5)); // will return 10

multiplier = createMultiplier(3);
console.log(multiplier(5)); // will return 15

multiplier = createMultiplier(0.5);
console.log(multiplier(10)); // will return  5