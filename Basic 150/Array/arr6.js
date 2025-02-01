function reverse(arr,start,end){
  while(start<end){

    [arr[start],arr[end]]=[arr[end],arr[start]];
    start++;
    end--;
  }
}

function leftRotateByKElements(arr,k){
  let n =arr.length;
  k=k%n;

  reverse(arr,0,k-1);
  reverse(arr,k,n-1);
  reverse(arr,0,n-1);

  return arr;
}

let arr=[1,2,3,4,5,6,7];
console.log(leftRotateByKElements(arr,3))

let arr2=[1,2,3,4,5,6,7];
function leftRotateByKElements2(arr,k){
  k=k%arr.length;
  return arr.slice(k).concat(arr.slice(0,k));
}

console.log(leftRotateByKElements2(arr2,3))

