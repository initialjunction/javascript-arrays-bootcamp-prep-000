var chocolateBars = [
  'snickers', 
  'hundred grand', 
  'kitkat', 
  'skittles'
  ];
  
  function addElementToBeginningOfArray (array, element) {
    const myArray = ["item 1", "item 2"];
    const newArray = [element, ...myArray];
  }
  
  function destructivelyAddElementToBeginningOfArray (array, element) {
    var myArray = myArray.unshift(element)
  }