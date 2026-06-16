 async function fn(a,b){
    await new Promise ((resolve , reject)=>{
        setTimeout(resolve, 3000)
    })
    console.log(a+b)
    console.log("Hi I am async function")
 }

 var racing = function(fn , t){
   return  async function(...args){  // this is async func , promise will be returned 
 let fnpromise = fn(...args)   // fn is already async so it will return promise no need to create a promise 
 let timerpromise = new Promise((resolve , reject)=>{
setTimeout(()=>reject("Time out") , t)
 })
return  Promise.race([fnpromise , timerpromise]) // so here it will return promise 
    }
 }

 var storing = racing(fn , 5000)
 storing(3,4)


 // async ⇒ function always returns a Promise.
 // await ⇒ pauses inside the async function until a Promise settles.