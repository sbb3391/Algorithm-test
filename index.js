
// Trying to get time complexity to O(n) - linear time

// time complexity O(n)
// space complexity O(n)
const averagesRefactor = (windowSize, arr) => {
  if (arr.length === 0) return [0]
  if (arr.length === 1) return [arr[0]]


  let averagesArr = [arr[0]]
  let accumulator = arr[0]
  let weightedSum = 0

  for (i = 1; i <= arr.length - 1; i++) {
    if (i  >= windowSize) {
      weightedSum += arr[i]
      weightedSum -= arr[i - windowSize]

      averagesArr.push(weightedSum/windowSize)
    } else {
      accumulator += arr[i]
      averagesArr.push(accumulator/(i + 1))

      if ( i > i - windowSize + 1 ) {
        weightedSum += arr[i]
      }
      
    }
  }


  return averagesArr
}

// time complexity O(n^2)
// space complexity O(n^2)

const averages = (windowSize, arr) => {

  if (arr.length === 0) return [0]
  if (arr.length === 1) return [arr[0]]

  let averagesArr = [arr[0]]
  let accumulator = arr[0]

  for (i = 1; i <= arr.length - 1; i++) {
    if (i  >= windowSize) {
      let index = i
      let weightedSum = 0

      while( index > i - windowSize ) {
        weightedSum += arr[index]

        index--
      }
      
      averagesArr.push(weightedSum/windowSize)

    } else {
      accumulator += arr[i]
      averagesArr.push(accumulator/(i + 1))
      
    }
  }


  return averagesArr
}

/* potential problems
  - wrong data input types (i.e argument one is not a number, argument 2 is not an array)
  - the values array has a length of zero or one, this is handled in my example
  - the WindowSize is 0, the array values are going to be NaN because they are divided by zero; 0 should not be a valid input for windowSize

*/
