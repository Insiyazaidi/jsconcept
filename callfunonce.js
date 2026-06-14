

function add (a,b){   // DEFINED A FUNCTION 
    return a+b;
}

var storing = function(fn){  // in this parameter is a function - add 
let count = 1;
return function(...args){
    if(count==1){
        count++;
        return fn(...args);
    }
    else{
        return undefined
    }
}

}
 let calling = storing(add); // Yahan add execute nahi ho raha.Hum sirf function ko pass kar rahe hain

// this storing func will return the func inside it and will be stored inside calling 


//let calling = function(...args){    //   (...args)  ---- Arguments ko collect karta hai.
// if(count==1){
 //       count++;
//         return fn(...args);   //       return  add(3,5);
//     }
//     else{
//         return undefined;
//     }
// }



 console.log(calling(3,5));
 console.log(calling(1,5)); 
 console.log(calling(6,5));
