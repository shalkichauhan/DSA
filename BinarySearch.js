// function binarySearch(arr, num){
//     let left = 0;
//     let right = arr.length-1;
//     let middle = Math.floor(left+right)/2
//     while(arr[middle]!==num && left<=right){
//         console.log(left,middle,right)
//         if(num<arr[middle]){
//             right = middle-1;
//         } else{
//             left = middle+1;}
//         middle = Math.floor(left+right)/2}
//     if(arr[middle] === num){
//         return middle;
//     }else{
//         return -1}}
// console.log(binarySearch([0,1,2,3,4,5,6,7,8,9,10], 6))


function binarySearch(arr, num) {

    let left = 0;
    let right = arr.length - 1
    let middle = Math.floor((left+right)/2)
    if(num>arr[right] || num<arr[left]){
        return -1
    }
    while(arr[middle]!==num && left<=right){

        if(num<arr[middle]){
            right = middle-1;
        }else{
            left =middle+1
        }
        middle = Math.floor((left+right)/2)
    }
    if(left>right){
        return -1;
    }else{
        return middle
    }
}
console.log(binarySearch([0,3,5,6,7,11,13,14,17],29))