let arr=[1,2,3,4,5,6];
function reverseArray(arr){
  //two pointer approach 
  let start = 0;
  let end = arr.length - 1; 
  while(start<end )
  {
    [arr[start],arr[end]]=[arr[end],arr[start]];
    start++;
    end--;
  }
console.log(arr);

}
reverseArray(arr);



const arr2=[1,2,3,4,5,6];
const reverseArray2=((arr)=>{
  let tempArr = [];
  for(let i = arr.length-1;i>=0;i--){
      tempArr.push(arr[i]);
  }
     return tempArr;
})
console.log(reverseArray2(arr2))

const arr3 = [1,2,3,4,5,6]
function reverseArray3(arr){
  return arr.reverse();

}
console.log(reverseArray3(arr3));