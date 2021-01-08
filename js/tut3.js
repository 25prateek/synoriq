
//math
/* 
var a1=5;
var a2 = 76;


document.write('<br>a1+a2 is ',a1+a2,'<br>');


document.write("when 5 is divided by 3 is ",5/6,'<br>');

document.write("when 5 is divided by 3 is ",(5/6).toFixed(2);)

document.write(" <br> 2^9 = ", Math.pow(2,9),"<br>" );
document.write("abs(-34) = ", Math.abs(-34),"<br>");
document.write("sqrt(36) = ", Math.sqrt(36),"<br>");

*/

//String Functions

/*
var str1 = "hello World Prateek here";
document.write(str1.length,"<br>" );
document.write(str1.indexOf("With"),"<br>" );
document.write(str1.substr(2,6),"<br>" );
document.write(str1.replace("prateek","patrick"),"<br>" );
document.write(str1.toLowerCase(),"<br>" );
document.write(str1.toUpperCase(),"<br>" );

*/

// Relational Operators : ==, !=, <, >, >=
// Logical Operators : &&, ||

/*

var age =prompt("what is your age");

if (age <= 12){
    document.write("you can go to school bcoz your age is ", age ,'<br>' );
}
else if (age >12 && age <= 20){
    document.write("you can go to college bcoz your age is ", age ,'<br>' );
}
else{
    document.write("do what ever you want");
}

if (true) {
  var x = 5;
}
console.log(x);  // x is 5


*/


// switch

/*

var age = parseInt(prompt("What is your age?"));
var agee = parseFloat(prompt("What is your age?"));
document.write(agee,'<br>')
switch(age)
{

	case 22:
		document.write("22 years old.. okay");
		break;

	case 21:
		document.write("21 years old.. okay");
		break;
		

	case 12:
		document.write("12 years old.. okay");
		break;
		

	default:
		document.write("default years old.. okay");
		break;			

}

*/


//while 
//do while

/*
var i =1;
while (i<30){
    document.write((i),"<br>");
    i++;
}

var i =1;
do{
    document.write((i/2).toFixed(2),"<br>");
    i++;
} while(i<30)
*/


//for loop

/*
var i;
for (i=0;i<30;i+=2){
    document.write(i,"<br>")
}
*/
/*
for (var i=0;i<29;i++){
    document.write(i,"<br>")
}
*/

/*
var i = 0;
for (; i <10; ) {
	document.write(i,"<br>")
  	i=i+2;
}

*/

/*
var cars = ["BMW", "Volvo", "Mini"];
var x;

for (x of cars) {
  document.write(x+" car " + "<br >");
}
*/

/*
var age="45"
var a=parseInt(45)
var s=String(a)
document.write(s+" h ")
*/


/*
var books = ["Harry potter", "ncert", "ctci", 65];

document.write(books[3]);

*/

/*

function harry(){

	document.write("We are calling patrick");
	console.log("We have executed patrick function");

}

harry();

var a= "38"-7;
document.write(a)
*/

//Object literals  // in python it is dictionary

/*
var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota

var car = { manyCars: {a: 'Saab', b: 'Jeep'}, 7: 'Mazda' };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda

document.write(car.manyCars.b)
document.write(car[7])
// for string or alphabet key you shold use by . method
// for no. u have to 

*/

//string
/*

var unusualPropertyNames = {
	'': 'An empty string',
	'!': 'Bang!'
  }
  //console.log(unusualPropertyNames.'');   // SyntaxError: Unexpected string
console.log(unusualPropertyNames['']);  // An empty string
  //console.log(unusualPropertyNames.!);    // SyntaxError: Unexpected token !

  

var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";
console.log(quote);




var str = 'this string \
is broken \
across multiple \
lines.'
console.log(str);

*/
/*
var b = new Boolean(true);
document.write(b,'<br>')
if (b){ //yeah jab chalega jab b resent hoga ture ho ya  false ho ya koi vaule ho 
	document.write( 'hii <br>')
}     
if (b == true){ // is will execute when it b is == true check condition
	document.write(b,'<br>')
}
*/

/*
const arr = [3, 5, 7];
arr.foo = 'hello';
document.write(arr)

for (let i in arr) {
   console.log(arr[i]); // logs 3, 5, 7 ,"hello"
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}
*/


//funtion expression
//1st
/* 
const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

console.log(factorial(3))
*/

//2nd
/*
const factorial = function(n) { return n < 2 ? 1 : n * factorial(n - 1) }
console.log(factorial(3))
*/



//??????????????????????????????????????????????

/*

function map(f, a) {
	let result = []; // Create a new Array
	let i; // Declare variable
	for (i = 0; i != a.length; i++)
	  result[i] = f(a[i]);
	return result;
  }

*/
/*
function map(f, a) {
	let result = []; // Create a new Array
	let i; // Declare variable
	for (i = 0; i != a.length; i++)
	  result[i] = f(a[i]);
	return result;
  }
  const f = function(x) {
	 return x * x * x;
  }
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(f,numbers);
  console.log(cube);
  */

  //???????????????????????????????



  var getCode = (function() {
	var apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify...
  
	return function() {
	  return apiCode;
	};
  })(); // this parenthesis in this  for calling inner funtionin it ;

  console.log(getCode());
  
      // Returns the apiCode

//???????????????????????????????????  


function Person() {
  // The Person() constructor defines `this` as itself.
  this.age = 0;

  setInterval(function growUp() {
    // In nonstrict mode, the growUp() function defines `this`
    // as the global object, which is different from the `this`
    // defined by the Person() constructor.
    this.age++;
  }, 1000);
}

var p = new Person();


//?????????????????????????????????????

/*
Primary expressions

Basic keywords and general expressions in JavaScript.
this
*/


this['propertyName']
this.propertyName



/*
Suppose a function called validate validates an object's value property, given the object and the high and low values:
*/



function validate(obj, lowval, hival) {
  if ((obj.value < lowval) || (obj.value > hival))
    console.log('Invalid Value!');
}

document.write("hello word /n word  \n")

/*
You could call validate in each form element's onChange event handler, using this to pass it to the form element, as in the following example:
??????????????
*/

