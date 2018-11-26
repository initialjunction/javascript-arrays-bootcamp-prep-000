var chocolateBars = [
  'snickers', 
  'hundred grand', 
  'kitkat', 
  'skittles'
  ];
  
  function addElementToBeginningOfArray(array, element) {
   return [element, ...array];
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    return array.unshift(element);
  }
  
  function addElementToEndofArray() {
    const myArray = [1];
    const newArray = myArray.push("foo");
  }
  
  function destructivelyAddElementToEndOfArray() {
    
  }