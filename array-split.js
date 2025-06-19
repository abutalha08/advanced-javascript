const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5);//means 2nd index theke 5 index er ag obdi
console.log(part);

const removed = nums.splice(2,5,15);//2,5 means 2nd index theke 3 ta remove korbe and ,15 means add 15 
console.log(removed);
console.log(nums);

const together = nums.join(",");
console.log(together);