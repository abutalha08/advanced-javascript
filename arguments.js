function add(num1, num2){
   const array = [...arguments];
  console.log(array);

  let total = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
     total += element;
    }
    return total;
}

const result = add(4,6,8);
console.log(result);