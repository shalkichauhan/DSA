//function which accepts 2 array
function same (array1, array2){
const frequencyCounter1 = {}
const frequencyCounter2 = {}
    if(array1.length!== array2.length){
        return false
    }
    for(let value of array1){
        frequencyCounter1[value]=(frequencyCounter1[value]+1 || 1);
    }
    for(let value of array2 ){
        frequencyCounter2[value]= (frequencyCounter2[value]+1 || 1);
    }
    for(let key in frequencyCounter1){
        if(!(key*key in frequencyCounter2)){
            return false
        }
        if(!frequencyCounter1[key]===frequencyCounter2[key*key]){
            return false;
        }
    }
        return true;

}

//build hash table for each object

//if the frequency is not same, return false,

//if the array size is not same, return false.

//function call which sends 2 arrays.
const array1 = [1,2,3]
const array2 = [4,1,9]
console.log('Result--->',same(array1, array2))