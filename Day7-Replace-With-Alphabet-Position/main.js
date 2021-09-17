function alphabetPosition(text) {

    let alphabet = []
    let string = text.toLowerCase().split("")
    
    string.map(letter => {
      (letter.charCodeAt(0)- 96 >= 27 || letter.charCodeAt(0) - 96 <=0  ? null : alphabet.push(letter.charCodeAt(0) - 96)) 
    })
    
    
     
    return alphabet.join(" "); 
}