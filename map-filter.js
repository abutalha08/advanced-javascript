//map hocche array er majhe loop kore proti ta element niye kono kichu kora as like addition,division,multiplication.kora shehse result hishebe arekta array diye dibe

//filter o array diye dibe
//find shudhu ekta element diye dibe 

// const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   const result = element * element;
//   output.push(result);
// }
// console.log(output);

//uporer same jinish korbo using map
const numbers = [3, 4, 5, 6, 7, 8];

// map er vitore jodi ekta function ke pass kori tahole shey 3 ta perameter nibe.
//1.element,2.index,3.array

// const output = numbers.map(function(element,index,array){ 
//   console.log(element,index,array);
// });


//map  use korar 1st way

// function square (element){
//   return element * element;
// }
// const output = numbers.map(square);
// console.log(output);

// map use korar 2nd way
const output = numbers.map(function(element){ // ekhane function ta ke () e dhukiye diyechi
  return element * element
});

console.log(output);

//arrow function
//1.
// function square (element){
//   return element * element;
// }

//2
// const square = element => element * element;
//3
// const square = x => x * x;

//uporer 3 ta arrow function i same

//using arrow function in map
const result = numbers.map(x => x * x);
console.log(result);

//filter
//filter er kaj hocche array er majhe j jinish gula ache  shekhan theke jei condition ta fullfill korbe shey gula k dib
//filter ekta array return korbe
const bigger = numbers.filter(x => x>5);
console.log(bigger);

//find 
// find hocche first condition j fill up korbe sheta kei output hishebe dibe

const isThere = numbers.find(x => x>5);
console.log(isThere); //array te 5 er boro 6,7,8 thakleo fist 6 conditon fill up korse tai output e 6 dekhaise