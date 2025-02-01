function movenegatives(arr){
  let j = 0;
  for(let i =0;i<arr.length;i++){
    if(arr[i]<0){
      if(i!==j){
        [arr[i],arr[j]]=[arr[j],arr[i]];

      }
      j++;
    }
  }
  return arr;
    
}

let arr=[1, -2, 3, -4, 5, -6, 7];
console.log(movenegatives(arr));

function movenegatives2(arr){
  let negative = arr.filter(num=> num<0);
  let positive = arr.filter(num => num>=0);

   return [...negative,...positive];

}
let arr2=[1, -2, 3, -4, 5, -6, 7]; 
console.log(movenegatives2(arr2));







