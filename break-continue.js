const nums = [1,2,3,4,5,6,7,8,9];
for(let i = 0; i<nums.length;i++){
  if(nums[i]>6){
    break;
  }
  console.log(nums[i]);
}

 console.log('\n');

const num1 = [1,-2,3,-4,5,-6,7,-8,9];
for(let i = 0; i<num1.length;i++){
  if(num1[i]<0){
    continue; //means skip ..ekahne 0 er choto shob negative value skip hoye jabe
  }
  console.log(num1[i]);
}