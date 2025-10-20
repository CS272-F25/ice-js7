const numbers = [1, 1, 2, 3, 5, 8, 13, 21];

// print whether there are any odd numbers
// (true or false)
for (const num of numbers) {
  if (num % 2 !== 0) {
    console.log("true");
    break;
  }
}

// print all the odd numbers
// use a continue!
for (const num of numbers) {
  if (num % 2 === 0) {
    continue;
  }
  console.log(num);
}

for (const num of numbers) {
  for (let i = 0; i < 10; i++) {
    break;
  }
}
