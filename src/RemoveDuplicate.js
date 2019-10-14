function splitString(string){
    var newArray = string.split(' ').sort()
    return newArray
}

function removeDuplicateWords(string){
    var newArray = splitString(string)
    console.log(newArray)
    var result = []
newArray.forEach(function(item){
    if(result.includes(item) == false){
        result.push(item)
        console.log(result)
    }  
})
console.log(result.join(','))
return result.join(' ')
}


