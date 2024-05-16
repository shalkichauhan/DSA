//write a function that accepts two strings

const isAnagram = function(str1,str2) {

    if(str1.length!==str2.length) return false;

    let frequencyCounter1 ={}, frequencyCounter2 ={};

    for(let item of str1){
        frequencyCounter1[item] = (frequencyCounter1[item] +1 || 1);
    }
    console.log(frequencyCounter1)
    for(let item of str2){
        frequencyCounter2[item] = (frequencyCounter2[item] +1 || 1);
    }
    console.log(frequencyCounter2)
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false;
        }
        if(!(frequencyCounter1[key]===frequencyCounter2[key])){
            return false;
        }


    }
    return true

//Iterate over object 1 to see if object 2 has same keys? and check if object 2 has same coresponding values?
// return true if yes


}

console.log(isAnagram("app","ppa"))

