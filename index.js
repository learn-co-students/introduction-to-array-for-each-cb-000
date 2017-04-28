

function changeCompletely(element, index, array){
  array.forEach(element => {
    array[index] = element
  })

  return array
}

function doToElementsInArray(array, callback) {
  array.forEach(callback);

  return array; 
}
