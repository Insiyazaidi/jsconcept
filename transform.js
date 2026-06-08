var map = function(arr, fn) {
    let i=0;
    let newarr= [];
    while(i<arr.length){
      newarr[i] =   fn(arr[i] , i);
      i++;
    }
    return newarr;
};