function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}

function doToElementsInArray(array, callbackFunction) {
  array.forEach(callbackFunction)
}

var animals = ['dog', 'fish', 'cat']

doToElementsInArray(animals, changeCompletely)
