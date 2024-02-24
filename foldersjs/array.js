class ArrayManipulator {

    constructor(){

    }
    manipulate (arr1,arr2){
        if(arr1.length!=arr2.length){
            return("so the length is not the same")
        }else{
            let obj = {}
            for (let i in arr1) {
                obj[arr1[i]] = arr2[i]
            }
            return obj
        }
        

    }
    //should remove at least one element from the array `arr`
removeAtLeastOne(arr) {
    let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
    arr.splice(0, numItemsToRemove)
    return arr
}

}
module.exports= ArrayManipulator