
// CLOSURE is when function  remembers variable from its outer function and can access them even if outer func has finished executing 

function outer(){
    let x = 10;
   return function inner(){
        console.log(x)
        x=x+1;
    }

}

 const storingfunc = outer(); // calling outer only once ... x is created  and it return inner func 
 storingfunc(); // storingfunc contain inner func inside it 
  storingfunc();
   storingfunc();
   // when we call storingfunc 3 times .. inner func executes 3 times 
   // this inner func remember x variable from outer func and can be accessed 