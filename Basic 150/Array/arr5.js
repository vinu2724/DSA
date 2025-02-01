const arr=[1,2,3,4,5,6]

function leftRotateArrayByOne(arr){
  let first =arr[0]
  for(let i =0;i<arr.length;i++){
    arr[i]=arr[i+1]
    
  }
   arr[arr.length-1]=first;
    return arr;
}
console.log(leftRotateArrayByOne(arr));


const arr2=[1,2,3,4,5,6];

function leftRotateArrayByOne2(arr){
  arr.push(arr.shift());
  return arr;
}
console.log(leftRotateArrayByOne2(arr2));