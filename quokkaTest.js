/*
Input 
Output print names in pairs of two  ====> Pair 1 : Daniel and Michael 

constraint whenever person is paired , they cant be matched again

List of Names 

Iterate through list of names
Shuffle list of names 
Math.Random 


constaint create var hasMatched = false
alert 
prompt 

Print names in random 
*/
// creates a new object

// think about adding restful and spread to allow as many arguments as needed

// Pair 1 : 'Sam Smith and Danny Park'
// Pair 2 : 'Lis and Tri'

/* 
  let liz = {matt : true}
  let Tri = {
  danny : true 
  micahel : true,
*/    

// if name.key === true; 
// rematch with name whose key === false;
// How names are randomly generated

// if element from nameList is deleted 
  // replace element with value string equal to 'N/A';

const nameList = [
  "Aleksey Ioseliani",
  "Michael Chung",
  "Amar Vadhia",
  "Matthew Goyke",
  "Brandon Yu",
  "Keeyana Kelly Donaldson",
  "Brendan Davitt",
  "Daniel Park",
  "Brian Nelson",
  "Sean Kier",
  "Bryson Gilreath",
  "Galina Berger",
  "Candy Wang",
  "Jonathan Hsieh",
  "Chang Seoung Kang",
  "Trevor Cannon",
  "Charles Neblett",
  "Jackson Galan",
  "Christian Sarmiento",
  "Theodore Grant Anderson",
  "Daniel Schewe",
  "Isaiah Santala",
  "Eyal Garbi",
  "Zach Thomas",
  "Grant Steinke",
  "Laine Doud-Eisenbart",
  "Hamilton Vazquez",
  "Kevin Paul Farinas Apostol",
  "Jared Bourget",
  "Matthew Malone",
  "Jordan Dillard",
  "Melissa Aybar",
  "Lee Bond Graham",
  "Tri Lam",
  "Maria Lisandra Alfonso",
  "Matthew Yee",
  "Marvin Ho",
  "Yi Sun",
  "Michael Thompson",
  "Myers Nii-Ansah",
  "Misha Andersen",
  "Parteek Sandhu",
  "Nawaraj Subedi",
  "William Zhou",
];

// Logic to not match pairs more than once
function makeObj (name) {
    let pureObject = Object.create(null);
    for (let i of nameList) {
        pureObject[i] = false;
        if (name === i) {
            pureObject[i] = true;
        }
    }
    return pureObject;
}

let Liz = makeObj("Maria Lisandra Alfonso");
let Matt = makeObj('Matthew Yee');
console.log(Liz)
console.log(Matt);





let generatedPairs = ['Matt', 'Tri'];
const recorder (array) {
    array[0][array[1]] = true;
    array[1][array[0]] = true;
}

function printPairs (array) {
  return `The pairs are ${array[0]} and ${array[1]}.`;
};

console.log(printPairs(array));










