var countdownGenerator = function (x) {
  let count = x;

  return function() {
    let output = ''
    if (count > 0) {
      output = `T-minus ${count}`;
    } else if (count === 0) {
      output = `Blast Off!`
    } else {
      output = `Rockets already gone, bub!`
    }
    count --;
    console.log(output)
    return output;
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
