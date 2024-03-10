// FIBONACCI WITH LOOP:

function fibonacciLoop(n){

    let arr = [0, 1]
    
    for(let i = 2; i <= n; i++) {
     arr.push(arr[arr.length -1] + arr[arr.length -2])
    }
    
    return n <= 1 ? n : arr[arr.length - 1] 
}


/// FIBONACCI RECURSIVE ///

function fibonacciRecursive(n){

    if(n <= 1){
      return n
    }
  
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
}