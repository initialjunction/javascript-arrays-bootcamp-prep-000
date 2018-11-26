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
    someArray = ["foo", ...someArray];
    return someArray;
  }