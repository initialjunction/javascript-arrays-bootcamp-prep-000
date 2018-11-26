var chocolateBars = [
  'snickers', 
  'hundred grand', 
  'kitkat', 
  'skittles'
  ];
  
  function addElementToBeginningOfArray(array, element) {
    const someArray = [1];
    const newArray = ["foo", ...someArray];
    return newArray;
  }
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    var someArray = [1];
    someArray = someArray.unshift("foo");
    return someArray;
  }
  
  function addElementToEndofArray() {
    const myArray = [1];
    const newArray = myArray.push("foo");
  }
  
  function destructivelyAddElementToEndOfArray() {
    
  }