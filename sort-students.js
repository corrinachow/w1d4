var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort((a, b) => {
  nameA = a.name.toUpperCase();
  nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  } if (nameA > nameB) {
    return 1;
  } else if (nameA === nameB) {
    return b.age - a.age;
  }
});
console.log(students);