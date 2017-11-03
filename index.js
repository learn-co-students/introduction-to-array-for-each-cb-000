// Add your doToElementsInArray() function here:
var doToElementsInArray = (arr, cb) => arr.forEach(cb);
// Add your changeCompletely() function here:
var changeCompletely = (element, index, array) => {
  array[index] =
    Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
};
