// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach((element, index) => {
    if (element === 'Waldo') {
      found(index);
    };
  });
}

function actionWhenFound(position) {
  console.log(`Found Waldo at index ${position}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);