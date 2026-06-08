// function outer(){   // function returning another function 
//   let name = "Insiya" 
//  return  function inner(){
//     console.log(name)
//   }
//   inner();  // inside outer we are calling inner  - first method

// }
// outer(); // calling outer 


function outer(){
  let name = "faiz"
  return function inner(){  // now this outer func is returning another func 
    console.log(name)
  }
}

 const storingretfunc = outer(); // as outer is returning a func we need to store it somewahere 
 storingretfunc(); // now calling that func we stored in storingretfunc