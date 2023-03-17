
// function fuct(n){
//     if(n==1){
//         return 1
//     }
//     return n*fuct(n-1)
// }
// console.log(fuct(5));

// function doubleFuct(n){
//     if(n==1){
//         return 1
//     }
//     return n*doubleFuct(n-2)
// }
// console.log(doubleFuct(9));

// function sumFuct(n){
//     if(n==1){
//         return 1
//     }
//     return n+sumFuct(n-1)
// }
// console.log(sumFuct(5));

// function sumFuct(n,cnt=0){
//     if(n.length==cnt){
//         return cnt
//     }
//     return sumFuct(n,cnt+1)
// }
// console.log(sumFuct("apple"));


// function sumFuct(n){
//     if(n<=1){
//         return n
//     }
//     return sumFuct(n-2) + sumFuct(n-1)
// }
// console.log(sumFuct(8));

                        // closure

//  function sumFuct(n){
//     return function(){
//          return n
//     }
// }
// let f1=sumFuct("apple")
// console.log(f1());

//  function sumFuct(n){
//     return function(b){
//          return n+b
//     }
// }
// let f1=sumFuct(1)
// console.log(f1(3));


//  function sumFuct(n){
//     return function(b){
//          return n+b
//     }
// }

// console.log(sumFuct(10)(20));
 

// function sumFuct(n){
//     return function(b){
//          return n+b
//     }
// }

// console.log(sumFuct("even")("ly"));


// function sumFuct(a,b){
//     return function(c,d){
//          return function(e,f){
//             return a*c*e+b+d+f
//          }
//     }
// }

// console.log(sumFuct(1,2)(1,1)(2,3));
    
// function powRec(a,b){
//      if(b==1) {
//         return a
//      }
//      return a*powRec(a,b-1)
// }
// console.log(powRec(2,4));



// function smallestDivRec(a,b,sum=a+b){
//     if(a%sum==0 && b%sum==0) {
//        return sum
//     }
//     return smallestDivRec(a,b,sum-1)
// }
// console.log(smallestDivRec(32,8));

// function even(n) {
//     if(n==1) {
//         return "Even"
//     }
//     else if(n==0){
//         return "Odd"
//     }
    
//     return even(n-1)
// }
// console.log(even(200));