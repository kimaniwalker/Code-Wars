function isPangram(string){
    let letters = 'abcdefghijklmnopqrstuvwxyz'.split("")
    string = string.toLowerCase();
    return letters.every(l => string.includes(l))
    
    
  }