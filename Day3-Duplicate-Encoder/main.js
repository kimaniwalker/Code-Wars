function duplicateEncode(word){
    let letterArray = word.toLowerCase().split("")
    let output = []
    
    for (i in letterArray) {
      output.push(word.toLowerCase().split(letterArray[i]).length - 1 <= 1 ? "(" : ")" )
    }
    
    console.log(letterArray)
    console.log(output)
 
  return output.join("")
}