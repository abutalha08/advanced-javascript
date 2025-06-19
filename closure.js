//closure hocche kono ekta function theke jodi kono arekta function k call kori othoba return kori tahole shey ekta closed environment create kore fele and  shey nijer  external variable er reference rekhe dey..etakei motamuti closure bole


function stopwatch(){
  let count = 0;
  return function(){
    count++;
    return count;
  }
}

const clock1 = stopwatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopwatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());
