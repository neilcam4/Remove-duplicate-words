function splitString(string){
    var newArray = string.split(' ').sort()
    return newArray
}

function removeDuplicateWords(string){
    var newArray = splitString(string)
    var result = []
if(newArray.length > 0){
    result.push(newArray[0])
}
    return result
}
