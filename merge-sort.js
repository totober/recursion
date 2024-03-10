// MERGE SORT ALGORITHM

function mergeSort(arr){

    let half = arr.length / 2

    if(arr.length === 1) {
        return arr
    }

    let left = arr.splice(0, half)
    let right = arr

    return merge(mergeSort(left), mergeSort(right))
}


function merge(left, right) {

let mergedArr = []

    let l = 0
    let r = 0;

    while (left.length > l && right.length > r){

        if(left[l] < right[r]){

            mergedArr.push(left[l])
            l++
        } 
        
        if(right[r] <= left[l]){

            mergedArr.push(right[r])
            r++
        }
    }

     while(left.length > l) {

        mergedArr.push(left[l])
        l++
    }

    while(right.length > r) {
        mergedArr.push(right[r])
        r++
    }

    return mergedArr
}