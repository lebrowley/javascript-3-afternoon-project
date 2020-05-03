/*
  Once you complete a problem, refresh ./nesting.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var employees = [
  {
    "firstName": "Von",
    "lastName": "Budibent",
    "email": "vbudibent0@163.com",
    "department": "Sales"
  },
  {
    "firstName": "Catherina",
    "lastName": "Swalowe",
    "email": "cswalowe1@example.com",
    "department": "Engineering"
  },
  {
    "firstName": "Theo",
    "lastName": "Trill",
    "email": "ttrill2@sina.com.cn",
    "department": "Services"
  },
  {
    "firstName": "Elsy",
    "lastName": "McCrorie",
    "email": "emccrorie3@netscape.com",
    "department": "Legal"
  },
  {
    "firstName": "Lorie",
    "lastName": "Handsheart",
    "email": "lhandsheart4@fotki.com",
    "department": "Research and Development"
  }
];
// Do not edit the code above.

/*
  Create a function called 'employeeUpdater' that takes no parameters. employeeUpdater will loop over the array above and perform the following:
    1. If employee's first name is Theo, remove that employee because he just got fired.
    2. If the employee's first name is Lorie, change her department to 'HR'.
    3. Return the updated employee array.
*/

// function employeeUpdater(){
//   employees.map(function(element, index, array){
//     if(element.firstName === "Theo"){
//       employees.splice(index, 1)
//     }else if(employees.firstName === "Lorie"){
//       employees.department = "HR"
//     } 
//     })
//   }

//loop through the array and check each object to see if they have specific keys: first a key with value "Theo" and second a key with value "Lorie". If the key(element).firstName has a value of "Theo", splice it, or remove it completely from the array. If the key.firstName has a value of "Lorie" update the key to say "HR". Now take all these changes and return employees in its updated form (.map returns the array)



////////// PROBLEM 2 //////////

// Do not edit the code below.
var workplaceAccidents = [12, 56, 44, 3, 29, 56, 56, 3, 7, 12];
// Do not edit the code above.

/*
  The array above represents IDs tied to reported workplace accidents. 
  An employee accidentally entered in duplicates to array, making it look as though there are more accidents this year than there actually are.
    1. Write a function called 'removeDuplicates' that will remove all duplicate entries in the workplaceAccidents array.
    2. Use nested for loops to check for duplicate numbers, and then remove the duplicates from the array.
    3. Return the updated array.
*/

// function removeDuplicates(arr, name, cb){
//   for(let i=0; i <= arr.length-1; i++){
//     for(let j=workplaceAccidents.length-1; j > i; j--){
//       if(arr[i] === arr[j]){
//         arr.splice(j, 1)
//       }
//     }
//   }
//   return workplaceAccidents
// }



////////// PROBLEM 3 //////////

// Do not edit the code below.
var cat = {
  name: 'Fluffy',
  catFriends: [
    {
      name: 'Grumpy',
      activities: ['be grumpy', 'eat food']
    }, 
    {
      name: 'Lazy Bones',
      activities: ['sleep', 'pre-sleep naps']
    }
  ]
}
// Do not edit the code above.

/*
  Fluffy has two friends, Grumpy and Lazy Bones. 
    1. Assign the value of Grumpy's 2nd activity to the grumpyActivity variable below.
    2. Assign fluffy2ndFriend the name of Fluffy's 2nd friend.
*/

//Code Here
// var grumpyActivity;
// var fluffy2ndFriend;

// cat.catfriend[activities].



////////// PROBLEM 4 //////////

// Do not edit the code below.
var myCar = {
  make: 'Toyota',
  model: 'Corolla',
  year: 1992,
  accidents: [
    {
      date: '3/15/93',
      damage: '$5,000',
      atFaultForAccident: true
    },
    {
      date: '7/4/98',
      damage: '$2,200',
      atFaultForAccident: true
    },
    {
      date: '6/22/99',
      damage: '$7,900',
      atFaultForAccident: true
    }
  ]
}
// Do not edit the code above.

/*
  Above is some information about my car. As you can see, I am not the best driver.
  I have caused a few accidents.
  Please update this driving record so that I can feel better about my driving skills.
    1. Write a function called recordCleaner.
    2. Loop over the accidents array.
    3. Change atFaultForAccident from true to false.
*/

function recordCleaner(){
  myCar.accidents.forEach(function(element){
    if(element.atFaultForAccident === true) {
      element.atFaultForAccident = false
    }
    
  })
  return recordCleaner
}



////////// PROBLEM 5 //////////

// Do not edit the code below.
var numsArr = [ [1, 2, 3, 4], [5, 6], [7, 8, 9, 10, 11]];
// Do not edit the code above.

/*
  Above is an array of arrays. Use two for loops.
    1. Write a function called 'looper'. 
    2. 'looper' should loop over the arrays.
    3.  If the number is odd, replace it with 'odd'.
        If the number is even, replace it with 'even'.
    4. Return the modified numsArr.
*/

function looper(arr){
   for(let i=0; i <= arr.length -1; i++){
     for(let j=0; j <= arr[i].length-1; j++){
       if(arr[i][j] % 2 === 0){
         arr[i].splice(j, 1, "even")
       }else {
         arr[i].splice(j, 1, "odd")
       }
      }
    }
    return arr
  }
  looper(numsArr)

// numsArr. some looper that will stop at each index, then go into the array there and check all the numbers to see if they're even or not. of the number is odd, replace it with string 'odd'. if number is even, replace it with string 'even'. returned the modified numsArr


