


function binarySearch(search_val, arr){
    let upperbound = arr.length-1;
    let lowerbound = 0;
    while(lowerbound<=upperbound){
        let midPoint = Math.floor((lowerbound+upperbound)/2);
        let midVal = arr[midPoint];
        if(search_val===midVal){
            return midPoint;
        }else if(search_val<midPoint){
            upperbound=midPoint-1;
        }else if(search_val>midPoint){
            lowerbound=midPoint+1;
        }

    }
    return null;
}

function buubleSort(arr){
    let unsorted = false;
    let unsorted_until_index = arr.length - 1;
    while(!unsorted){
        unsorted=true;
        for(let i =0; i<=unsorted_until_index;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]=[arr[i+1], arr[i]]
                unsorted=false
            }
        }
        unsorted_until_index-=1;
    }
    return arr
}

function main(){
    let arr = [9,2,4,5,10,44,2,7,1]
    console.log("Before unsort")
    arr = buubleSort(arr)
    console.log("After sorting", arr);
    let searchItem = 44;
    let index = binarySearch(searchItem, arr)
    console.log(index, arr[index]);

}


main();