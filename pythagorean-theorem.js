var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map((values) => {
  xSquare = Math.pow(values.x, 2);
  ySquare = Math.pow(values.y, 2);
  return Math.sqrt(xSquare + ySquare);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);