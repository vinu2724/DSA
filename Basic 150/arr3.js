const arr = [34,23,45,23,45,99]

const secondLargest = ((arr)=>{
   if(arr.length<2) return null;
   let first = -Infinity ;let second = -Infinity;
   
   for(let num of arr){
    if(num>first){
      second=first;
      first =num;
    }else{
      second=num;
    }
  }
  return second === -Infinity? null: second;
})
console.log(secondLargest(arr))

const arr2=[23,45,67,54,43,32,78];

const secondLargest2=((arr)=>{
  if(arr.length<2) return null;

  arr = [...new Set(arr)];
  arr.sort((a,b)=>(b-a));
  return arr[1];
})

console.log(secondLargest2(arr2));


const arr3=[34,23,,45,56,34,54,99,43,32,32]

const secondLargest3 =((arr)=>{
  let max = Math.max(...arr);

  arr = arr.filter(num=> num!==max);

  return Math.max(...arr);
})

console.log(secondLargest3(arr3))


  