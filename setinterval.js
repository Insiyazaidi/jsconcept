
function fn (a ,b ){
    console.log(a+b)
console.log("Hello Insiya")
}

var cancelable = function (fn , args , t){
    fn(...args)  // immediate calling 
    let id = setInterval(()=>{  // calling continously after every t sec 
        fn(...args)
    } , t)
    return function(){  // this func will be returned and stored in var named storing 
        clearInterval(id) 
    }
}

var storing = cancelable(fn , [2,3] , 3000)  // now storing contains the clearinterval func 

setTimeout(storing , 10000) // calling storing func ie cancel intervaal .. calling stroing after 10sec after which the fn will
// stop executing 

