/*
  Once you complete a problem, refresh ./for-in-delete.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

/*
  First we'll look at the difference between accessing property values in a for in loop and accessing the property name in a for in loop.
  In the example below, we are accessing the property values. Uncomment the code below, run it and look at what prints in the console.
*/

var values = {
  one: 'These',
  two: ' are',
  three: ' the',
  four: ' property',
  five: ' values.'
} 

for(var key in values) {
  console.log(values[key])
}

/*
  In this next example, we are accessing the property names themselves. Uncomment the code below, run it and look at what prints in the console.
*/

for(var key in values) {
  console.log(key)
}



////////// PROBLEM 1 //////////

/*
  Inside the function showValues, write a for in loop that concatenates each of the property values and returns the concatenated string.
*/

function showValues(object) {
  let string = ""
  for(let key in object) {
      string += object[key]
    } 
    return string
  }





////////// PROBLEM 2 //////////

/*
  Write a function called greaterThan10 that takes in an object. 
  Write a for in loop that loops over the object and changes any value that is greater than 10 to 0. 
  Return the updated object.
*/


function greaterThan10(object){
  for(let key in object) {
    if (object[key] > 10){
      object[key] = 0
    }
  }
  return object
}

//because I need to access the info ON the key, I need to tell it to dig down into those levels. so go to object and then go into the key on that object. see if the info on that key is greater than 10. if it is, reset it to equal 0. i have to use bracket notation because the actual names of the keys are unknown but i told it in my for in loop that we're going to call those "key". since key is a variable, have to use bracket notation in order for it to know i want to go into the keys on the object.



////////// PROBLEM 3 //////////

/*
  Write a function called double that takes in an object.
  Write a for in loop that loops over the object and changes every value to be itself multipled by 2.
  Return the updated object.
*/

function double(object){
  for(let key in object){
    object[key] = object[key] * 2
  }
  return object
}



////////// PROBLEM 4 //////////

/*
  Write a function called secrets that will take in an object.
  Create an empty string variable.
  Write a for in loop that loops over the object.
  If the property name starts with an 'sh', concatenate the value to the string variable.
  By the end of the for in loop, you should have a sentence, return that sentence.
*/

function secrets(object){
  let string= ""
  for(let key in object){
    if(key.startsWith('sh')){
      string += object[key]
  
    }}
    return string
  }
 

  // why didn't we need object[key] in the if statement??
  //this works on repl..... why doesn't it work here?


/* 
  Sometimes it's needed to delete object properties. 
  All you need is the word delete before a reference to the object property value. 
  Uncomment the example below to see a for in loop deleting all the properties inside an object.
*/

var deleteAllThethings = {
  one: 1,
  two: 2,
  three: 3
}

for(var key in deleteAllThethings) {
  delete deleteAllThethings[key]
}

console.log(deleteAllThethings)



////////// PROBLEM 5 //////////

/*
  Write a function called removePassword that takes in an object.
  Delete the property password and return the object.
*/

function removePassword(obj){
  delete obj.password
  return obj
}





////////// PROBLEM 6 //////////

// Do not edit the code below.
var deleteTheBigNumbers = {
  first: 10,
  second: 20,
  third: 110,
  fourth: 200
}
// Do not edit the code above.

/*
  Write a for in loop that deletes every property from the object deleteTheBigNumbers whose value is greater than 100.
*/


  for(var key in deleteTheBigNumbers){
    if(deleteTheBigNumbers[key] > 100){
      delete deleteTheBigNumbers[key]
    }
  }


////////// PROBLEM 7 //////////

/*
  Write a function called startsWithK that takes an object as a parameter.
  Write a for in loop to loop over the object.
  If any property name starts with k, delete that property.
  Return the updated object.
*/


function startsWithK(object){
  for(let key in object){
    if(key.startsWith("k"))
    delete object[key]
  }
  return object
}

//this works on repl; why doesn't it work here?

// i want to get into the object and then to the keys and then into the first indexed character of that string (the value on the key). if it is equal to k, i want the entire key deleted from the object


////////// PROBLEM 8 //////////

/*
  Write a function called hiddenTreasure that takes in an object.
  Write a for in loop that loops over this object. Each property will have a sentence as it's value.
  If the property value does not contain the word 'treasure', delete the property.
  Return the updated object.

  (hint: the method includes() may be of use...)
*/


function hiddenTreasure(object){
  for(let key in object){
    if(object[key].indexOf("treasure") === -1){
      delete object[key]
    }}
    return object
  }


//i want to see if the keys on the object include the string 'treasure'. If they do, I don't want it to do anything to change that. But if they don't, I want it to delete that key. After it has going through every item, I want it to return an updated object to me

