var compose = function(functions) {
    let i =functions.length-1;
    return function(x) {
        while(i>=0){
           let current = functions[i]; 
             x = current(x);
             i--;
        }
        return x;
    }
};