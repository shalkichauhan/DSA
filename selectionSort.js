function selectionSort(arr){
    for(var i=0;i<arr.length;i++){
        var small =arr[i];
        var placeHolder;
        var temp;
        for(var j=i+1;j<arr.length;j++){
            if(arr[j]<small){
                small=arr[j];
                placeHolder=j;
            }
            temp=arr[i];
            arr[i]=small;
            arr[placeHolder]=temp;
        }
    }

return arr
}


console.log(selectionSort([3,2,3,5,4,8,6,4]))

