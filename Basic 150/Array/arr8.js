function union(arr1,arr2){
  let i=0;
  let j=0;
  let result=[]

  while(i<arr1.length && j<arr2.length){
    if(arr1[i]<arr2[j]){
      result.push(arr1[i]);
      i++;
    }else if (arr2[j]<arr1[i]){
      result.push(arr2[j]);
      j++;
    }else{
      result.push(arr1[i]);
      i++;
      j++;
    }
  }
  while(i<arr1.length) result.push(arr1[i++]);
  while(j<arr2.length) result.push(arr2[j++]);

  return [...new Set(result)]
}

let arr1= [2,3,4,5,6,7,8,9];
let arr2= [45,50,61,70,80,100];

console.log(union(arr1, arr2));

function union2(arr1,arr2){
    let result =[...arr1,...arr2].sort((a,b)=>(a-b));
    return [...new Set(result)]
  
  
}


let arr11= [2,3,4,5,6,7,8,9];
let arr22= [45,50,61,70,80,100];
console.log(union2(arr11,arr22));