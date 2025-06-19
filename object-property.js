const students = [
  {id: 21, name: 'Rafi'},
  {id: 24, name: 'Talha'},
  {id: 40, name: 'Dipto'},
  {id: 55, name: 'Shuvo'},
];

//map
const names = students.map(s => s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);

//filter
const bigger = students.filter(s => s.id>30);
console.log(bigger);

//find
const biggerOne = students.find(s => s.id>30);
console.log(biggerOne);



