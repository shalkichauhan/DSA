// let fun= function(ar){
//     for(let i of ar){
//         for(let j=ar.length;j>=0;j--){
//             if(i+ar[j]===0){
//                 return[i,ar[j]]
//             }}}}
//
// let res= fun([-5,-4,-3,0,2,4,6,8])
//
// console.log(res)

////////////////////////////////////
let fun1 = function(arr){

    let left = 0;
    let right = arr.length-1

    while(left<right){
        let sum=arr[left]+arr[right];
        if(sum===0){
            return[arr[left],arr[right]];
        }
        else if(sum>0){
            right--;
        }
        else{
        left++;
    }
}}

let s = fun1([-5,-4,-3,0,2,4,6,8])
console.log(s)
