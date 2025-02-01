//remove duplicate from the arry 

const arr=[34,34,56,23,23,45,78,65]

function removeDuplicate(arr){
  if(arr.length==0) return null;
let index =0;
  for(let i = 1;i<arr.length;i++){
    if(arr[index]!==arr[i]){
      index++;
      arr[index]=arr[i];

    }
  }
 return arr.slice(0,index+1);


}

console.log(removeDuplicate(arr));

const arr2=[34,34,56,23,23,45,78,65]
function removeDuplicate2(arr){
  return [...new Set(arr)];

}
console.log(removeDuplicate2(arr2))

const arr3=[34,34,56,23,23,45,78,65];

function removeDuplicate3(arr){
  return arr.filter((num,index)=>num !== arr[index-1])
}

console.log(removeDuplicate3(arr3));
