var expect = function(val) {   // expect(5).notToBe(null) - expect(5) should return an object so that
//  .notobe can be access present inside object 
return {   // returns an object containing tobe and notobe 
    toBe: function(otherval){
if(val===otherval){
    return true
}
else{
    throw new Error("Not Equal");  // Error/exception generate karo aur normal execution ko rok do
    } 
},
      notToBe: function(otherval){
if(val!==otherval){
    return true
}
else{
   throw new Error("Equal");
}
    }

}
};