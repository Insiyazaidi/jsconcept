//acc = answer built so far
//curr = current element

var reduce = function(nums, fn, init) {
    if(nums.length==0) return init;
    let i =0;
    let value = init;
    while(i<nums.length){
    value =    fn(value  , nums[i] );
    i++;
    }
    return value;
};

// General Example ....

// let words = ["hi", "hello", "js"];

// let total = words.reduce((acc, curr) => {
//     return acc + curr.length;
// }, 0);

// console.log(total);
