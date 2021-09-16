function spinWords(string){
  
    const phrase = string.split(' ')
    let word = phrase.map(w => (w.length > 4 ? w.split('').reverse().join('') : w))
    
   
    
    console.log('word', word)
    return word.join(' ')
    
}
    

