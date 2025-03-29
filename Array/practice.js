//Array declaration

let arr1 = [1,2,3,4,5,6];
let arr2 = new Array();

//Accesing the elements in the Array

console.log(arr1[1])

arr2.push(2,3,4)

//modifiying the element in the Array

arr1[2]= 4;
console.log(arr1)

//length of the array

console.log(arr1.length)

//looping through a array

for(let i = 0;i<arr1.length;i++){
   console.log(arr1[i])
}

arr1.forEach(element => {
  console.log(element)
});

arr1.map((ele)=>{
  console.log(ele)
})



console.log("------------------")
let  removedElement= arr1.shift();
arr1.unshift(78);
console.log(removedElement)

console.log(arr1)

console.log(arr1.slice(1,4 ))

console.log(arr1.splice(3,2,5,4,3))

console.log(arr1)

console.log("-----------------")


console.log(arr2)

console.log(arr1.concat(arr2))
console.log([...arr1,...arr2]);

console.log(arr1.filter(ele => ele!==2))


console.log(arr1.indexOf(78))
console.log(arr1.indexOf(99))
 


let sortedArray = [10,20,30,40,50];

//binary search 

function binarySearch(arr,target){
  let left = 0 ;
   let right = arr.length -1;
  
   while( left<right){

    let mid = Math.floor(left+right/2);
     if(arr[mid]===target){
      return mid
     }
    else if(arr[mid]<target){
        left= mid+1;

    }else{
      right =mid -1;

    }

    return false;
   }

}
console.log("-----------------")
console.log(binarySearch(sortedArray,389))


const unSortedArray = [20,10, 40,30,60,50];

unSortedArray.sort((a,b)=>(a-b))
console.log(unSortedArray)

const unSortedArray2= [100,90,43,56,45,34,78];

function quickSorting(arr){
  if( arr.length<2) return arr;
   
  let pivot = arr[arr.length-1];
  let left = arr.filter((el)=>el<pivot);
  let right = arr.filter((el)=>el>pivot);

  return [...quickSorting(left),pivot,...quickSorting(right)]
}
console.log("--------------")
console.log(quickSorting(unSortedArray2))


// 2 pointer technique
function findPairWithSum(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]];
    else if (sum < target) left++;
    else right--;
  }

  return "No pair found";
}

console.log(findPairWithSum([1, 2, 3, 4, 6, 8], 10)); 