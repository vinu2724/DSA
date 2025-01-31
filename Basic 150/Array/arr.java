import java.util.*;

class arr{
  public static int[] minmax(int[] arr){
    int min =arr[0];
    int max =arr[0];
    for(int i=0;i<arr.length;i++){
      if(arr[i]<min) min = arr[i];
      if(arr[i]>max) max = arr[i];

    }
    return new int[]{min,max};
  }



  public static void main(String[] args){
    int[] arr = {1,2,3,4,5};
    int[] result = minmax(arr);
    System.out.println(
      "min : " +result[0] + " max : " +result[1] 
    );
    int[] arr2 = {1,2,3,4,5};
    Arrays.sort(arr2);
    System.out.println("min : " +arr2[0] + " max : " +arr2[arr2.length-1]);

  }
}