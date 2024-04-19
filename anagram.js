// //hello  llheo
//
//
// // let str1 = 'hello';
// // let str2='llhoe'
//
// let myFun=function (str1,str2){
//
//     if(str1.length!=str2.length){
//         return false;
//     }
//     let counter={}
//
//     for(let i of str1){
//         counter[i]=(counter[i] || 0)+1
//
//     }
//     console.log(counter)
//     for(let j of str2) {
//         console.log(' val of j =', j)
//         console.log(' val of counter j = ', counter[j])
//         if (!counter[j]) {
//             return false;
//         }
//
//         counter[j] = counter[j] - 1
//     }
//     return true;
// }
//
// const check = myFun('hello','llhoe')
//
// console.log(check)

function isAnagram(str1,str2){
    if(!str1.length==str2.length){
        return '1 Not an anagram';
    }
    let str1Counter = {}; let str2Counter={};

    for(let key of str1){
        str1Counter[key]=(str1Counter[key]||0)+1}

    for(let key of str2){
        str2Counter[key]=(str2Counter[key]||0)+1}

    //console.log("Str1Counter is = ", str1Counter, "Str2Counter is =", str2Counter)

    for(let key in str1Counter){
        if(!(key in str2Counter)){ return '2 not an anagram'}
        if(str1Counter[key]!==str2Counter[key]){return '3 Not an anagram'}}

    return true
}
console.log(isAnagram('CAT','ATC'))














