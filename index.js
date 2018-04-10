// Add your doToElementsInArray() function here:

function changeCompletely(element, index, array) {
  array[index] = element + '!!!'
}

// Add your changeCompletely() function here:

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
