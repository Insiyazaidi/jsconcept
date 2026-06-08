var filter = function(arr, fn) {
    let filteredarr =[];
    let i =0;
    let j=0;
    while(i<arr.length){
      let value =   fn(arr[i] , i);
      if(Boolean(value)==true){
        filteredarr[j] = arr[i];
        j++;
      }
      i++;
    }
    return filteredarr;
};