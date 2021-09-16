function printerError(s) {
    let length = s.split("").length
    let errcount = 0
    let print = s.split("")
    
    for (let i = 0 ; i < print.length; i++){
      (print[i] > "m" ? errcount++ : null)
      
    }
    return errcount + '/' + length
  }