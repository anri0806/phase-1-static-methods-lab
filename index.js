class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    
    let result = []
    let splittedWords = string.split(' ')
    for(let i = 0; i < splittedWords.length; i++)
      if(i === 0) {
        result.push(this.capitalize(splittedWords[i]))
      } else {
        if(exceptions.includes(splittedWords[i])) {
          result.push(splittedWords[i])
        } else {
          result.push(this.capitalize(splittedWords[i]))
        }
      }
    
    return result.join(' ')
  }
}

