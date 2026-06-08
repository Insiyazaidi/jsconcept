var createCounter = function(init) {
   let current = init;  // we made another val named current as it reset func we need to init value original 
    return {  // returned obj with 3 methods 
      increment: function(){  // no parameter as current and init  is already available through closure 
          return ++current; 
      },
        decrement: function(){
         return --current;
      },
        reset: function(){
        current = init;
        return init;
      }

    }
};