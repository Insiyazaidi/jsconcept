 function fn (a,b){
 return a+b;
 }
 
 var cancellable =  function(fn , args , t ){  // we have a function -fn , argumnets , t 
  let id =   setTimeout(()=>     // set time out ek id return krega jiski help se hm  yeh fn stop krskte h 
    console.log(fn(...args)) , t)


    return function(){  // yeh function hm return krdege jo  cancel m store hojaiga 
        clearTimeout(id);
    }

 }

  var cancel =   cancellable(fn , [2,3] , 3000 )

  setTimeout(cancel , 9000);  // fn - run hoga is toh ek dm generate hojaigi bhlegi hi result t sec baad aai 
  // agr cancel phle call out hogya toh fn ka result show hi nhi hoga 

  // agr cancel m time maine less than t likha toh vo phle cancel krdega result show hone se 