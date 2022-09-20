// function deepClone(obj){
//     return JSON.parse(JSON.stringify(obj))
// }

function deepClone(obj){
  if(typeof(obj) != 'object' && !Array.isArray(obj)) {
    return obj
  }
  if(Array.isArray(obj)) {
    let newObj = new Array()

    for(let key in obj) {
      if(typeof(obj[key]) == 'object') {
        let tmpObj = new Object()
        let tmp = obj[key]
        tmpObj = deepClone(tmp)
        newObj[key] = tmpObj
        
      }
      else if(Array.isArray(obj[key])) {
        let newArr = new Array()
        let tmp = obj[key]
        newArr.push(deepClone(tmp))
        newObj[key] = newArr
      }
      else {
        newObj[key] = deepClone(obj[key])
      }
    }
    return newObj 
  }

  let newObj = new Object()

  for(let key in obj) {
    if(typeof(obj[key]) == 'object') {
      let tmpObj = new Object()
      let tmp = obj[key]
      tmpObj = deepClone(tmp)
      newObj[key] = tmpObj
      
    }
    else if(Array.isArray(obj[key])) {
      let newArr = new Array()
      let tmp = obj[key]
      newArr.push(deepClone(tmp))
      newObj[key] = newArr
    }
    else {
      newObj[key] = deepClone(obj[key])
    }
  }
  return newObj 
}

const obj = [{
    a: ['A'],
    b: {
      d: 'D',
      e: 'E',
      f: {
        j: 'J',
        k: {
          i: 'I',
          h: 'H'
        }
      },
      g: 'G'
    },
    l: [{m: 'L'}, 'A', 'B']
}];

console.log(deepClone(obj))