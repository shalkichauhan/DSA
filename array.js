
//find sum = 0 of first pair

let myFun = function(arr){
    for(let i of arr){

        for(let j =1;j<arr.length;j++){
            if(i+arr[j]===0){
                return[i , arr[j]];




    }else{
                continue
            }
    }}}

let result=myFun([-5,-4,-3,0,2,4,6,8])

console.log(result)