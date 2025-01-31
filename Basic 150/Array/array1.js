let numbers = [10, 25, 3, 99, 67, 5];

function minmax(numbers){
  let min=numbers[0];
  let  max=numbers[0];


  for(let i = 0; i<numbers.length;i++){
    if(numbers[i]<min) min=numbers[i];
    if(numbers[i]>max) max=numbers[i];
  }
  return {min:min,max:max};
}
console.log(minmax(numbers));

function minmax2(numbers){
  numbers.sort((a,b)=>a-b);
  return {min:numbers[0],max:numbers[numbers.length-1]}
}
console.log(minmax2(numbers));

function minmax3(numbers){
   return{min:Math.min(...numbers),max:Math.max(...numbers)};
}
console.log(minmax3(numbers));