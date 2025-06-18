// undifined paoya zay koyek vabe
//1.. variable er value defined kora na hole
let pakhi;
console.log(pakhi);

//kono function er return use na korle
function add(num1,num2){
  console.log(num1 + num2);

}
const result = add(5,10);
console.log(result);

//funtion e return likhe ki return korbo ta na likhle
function add(num1,num2){
  console.log(num1 + num2);
  return

}
const result1 = add(5,10);
console.log(result1);

//kono parameter pass na korle undefined dekhabe
function add(num1,num2){
  console.log(num1, num2);
  return

}
const result2 = add(5);
console.log(result2);

//object e required property na thakle undefined dekhabe
const premik = {name:"Smart dude", phone: 344434};
console.log(premik.gf);//gf property premik e nei

// undefined is a reserved word ..eti kokhnoi use kora uchit na .
//tobe eti jodi value hishebe declare kora thake tahole output undefined dekhabe

let fun = undefined;
console.log(fun);

let ages = [10,14, 16];
console.log(ages[11]); //11 tomo element array te nai .tai undefined dekhabe

//null mane kono chilo kintu pore nai hoye geche
