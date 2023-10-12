function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array\
    let sum=0
    marks.forEach(mark => { sum+=mark})
    return Math.floor(sum/marks.length)
  }