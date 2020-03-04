/*	JavaScript Identifiers
All JavaScript variables must be identified with unique names.

These unique names are called identifiers.

Identifiers can be short names (like x and y) or more descriptive names (age, sum, totalVolume).

The general rules for constructing names for variables (unique identifiers) are:

Names can contain letters, digits, underscores, and dollar signs.
Names must begin with a letter
Names can also begin with $ and _ (but we will not use it in this tutorial)
Names are case sensitive (y and Y are different variables)
Reserved words (like JavaScript keywords) cannot be used as names  */


//declare, assign and computing
var x, y, z;       // Declaring variables
x = 5; y = 6;      //Assigning values to variables
z = x + y;  	   //Computing the values

//Arithmetic Operators
var x,y,z,a,b,c,d,e;
x = 10;
y = 5;
z = x+y;	//Addition
a = x-y;	//Substraction
b = x*y;	//Multiply
c = x/y;	//Divide
d = x**y;	//Exponent
e = x%y;	//Modulus

console.log(z);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//Assignment Operators
var r,k;
r = 10;		//Assigning
console.log(r);

r = 10;		
k = 3;
r += k ;	//Addition
console.log(r);

r = 10;		
k = 3;
r -= k ;	//Substraction
console.log(r);

r = 10;		
k = 3;
r *= k ;	//Multiply
console.log(r);

r = 10;		
k = 3;
r /= k ;	//Divide
console.log(r);

r = 10;		
k = 3;
r **= k ;	//Exponent
console.log(r);

r = 10;		
k = 3;
r %= k ;	//Modulus
console.log(r);

/*Data types
-> Numbers
-> String
-> Boolean
-> Undefined
-> Object
-> Arrays
-> Null
*/
var x = 16 + "Volvo";
console.log(x);
//when adding a number and a string, JS will treat the number as a string.
var x = "Volvo" + 16;
console.log(x);

var x = 16 + 4 + "demo";  //JavaScript evaluates expressions from left to right. Different sequences can produce different results.
console.log(x);

var x = "Volvo" + 16 + 4;
console.log(x);

/*
JavaScript Strings
A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:
*/
var name1 = "Rk";   // Using double quotes
var name2 = 'Rk';   // Using single quotes
var a = typeof(name1);
console.log(a);

/*
Javascript Numbers
-> Js does not define different types of numbers like integers,short,long,floating point.
Numbers are always stored as double precision floating point Number.
*/
var x1 = 34.00;     // Written with decimals
var x2 = 34;        // Written without decimals
console.log(typeof(x1));

/*
JavaScript Booleans
Booleans can only have two values: true or false.
*/
var x = 5;
var y = 5;
var z = 6;
var a = (x == y)   
var b = (x == z)     
console.log(a);
console.log(b);

/*
JavaScript Arrays
JavaScript arrays are written with square brackets.

Array items are separated by commas.
*/
var names = ["Rakesh", "Ramesh", "Rajendar"];
console.log(names);
console.log(names[1]);

/*
JavaScript Objects
JavaScript objects are written with curly braces {}.

Object properties are written as name:value pairs, separated by commas.
*/
var person = {firstName:"Rakesh", lastName:"Kokkula", age:22};
var fullName = (person.firstName + " " + person.lastName);
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(fullName);

/*
Difference Between Undefined and Null
undefined and null are equal in value but different in type:
*/
var a = typeof undefined           // undefined
var b = typeof null                // object
console.log(a);
console.log(b);
var a = null === undefined     
var b = null == undefined       
console.log(a);
console.log(b);

/*
JavaScript Functions
A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

Syntax
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}
*/

var a,b;
function myFunction(a,b){
	return a+b;
}
var x = myFunction(10,20);
console.log(x);

/*
Why Functions?
You can reuse code: Define the code once, and use it many times.

You can use the same code many times with different arguments, to produce different results.
*/
var person = {
  firstName: "Rakesh",
  lastName : "Kokkula",
  id       : 1620,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

var  x = person.fullName();
console.log(x);

/*
Common HTML Events
Here is a list of some common HTML events:

Event	Description
onchange    ->	An HTML element has been changed
onclick     ->	The user clicks an HTML element
onmouseover ->	The user moves the mouse over an HTML element
onmouseout  ->	The user moves the mouse away from an HTML element
onkeydown   ->  The user pushes a keyboard key
onload      ->	The browser has finished loading the page
*/
function onFunction(){

document.getElementById('demo').innerHTML=Date()	
}

function outFunction() {
document.getElementById('demo').innerHTML="";
}

//string length

function strLength(){
var a = "bbdcbiudbcuobdsucbiudbsiu";
var b = a.length;
document.getElementById("demo").innerHTML = a.length;
}

/*Six other escape sequences are valid in JavaScript:

Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator*/
//finding the string in a string

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");

console.log(pos);