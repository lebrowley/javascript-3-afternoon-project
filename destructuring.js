/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

const color = carDetails.color
const make = carDetails.make
const model = carDetails.model 
const year = carDetails.year

// I'm not sure if this is what is meant by "use object destructuring". is there a different notation i should have used?



////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) {
  let firstName= obj.firstName
  let lastName= obj.lastName
  let title= obj.title
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}



////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

function totalPopulation(obj){
  let utah = obj.utah
  let california = obj.california
  let texas = obj.texas
  let arizona = obj.arizona
  return utah + california + texas + arizona
}



////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

function ingredients(obj) {
  carb = obj.carb
  fat = obj.fat
  protein = obj.protein
  return Object.values(obj)
}


//this one had me pass in an object, assign its keys to the variable names provided (carb, protein, and fat) and then take that object and make it into an array that contains just the values of the keys in the object. were the two steps connected? did the keys need to be assigned to new variables in order to make an array out of their values? 




////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

function largeNumbers({first, second, third}) {
  if(first < second && first < third){
    return first 
  }else if(second < first && second < third){
    return second
  }else if(third < first && third < second){
    return third
  }
}

//is there a cleaner way of doing this? shorter?


////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

function numberGroups({a, b, c}){
  if(a.length > b.length && a.length > c.length){
    return a
  }else if(b.length > a.length && b.length > c.length){
    return b 
  }else if(c.length > a.length && c.length > a.length){
    return c
  }
}

//again, is there a simpler (fancier) way of writing this?


