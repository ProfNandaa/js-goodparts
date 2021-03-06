/*I know it well:
I read it in the grammar long ago.
—William Shakespeare, The Tragedy of Titus Andronicus
*/

/* == White spaces, pg.5 == */

// /*  */ are not safe for commenting out blocks of code,
// esp. for code with regular expression e.g.

//	/*
//	var rm_a = /a*/.match(s);
//	*/

/* == Names, pg.6 == */

/* 
* reserved names:
		abstract
		boolean break byte
		case catch char class const continue
		debugger default delete do double
		else enum export extends
		false final finally float for function
		goto
		if implements import in instanceof int interface
		long
		native new null
		package private protected public
		return
		short static super switch synchronized
		this throw throws transient true try typeof
		var volatile void
		while with

*/

/* == Numbers, pg.7 == */

/*
- JS has a single number type. Internally represented as a 64-bit floating
 point, the same as Java's double.

- Upside: problems of overlow in short intergets are completely avoided;
	a large class of number type errors are avoided.

- Value NaN is a number value that is the result of an operation that 
cannot produce a normal result. NaN is not equal to any value, including 
itself! You can detect NaN with the isNaN(number) function.

- JS has a Math object that contains a set of methods that act on numbers. 
e.g. Math.floor(number) method can be used to convert a number into 
an integer

*/

/* == Strings, pg.8 == */

/*
- JS was built at a time when Unicode was 16-bit character set;
all characters are 16bits wide.

- Good notes here -> https://mathiasbynens.be/notes/javascript-unicode
	"It’s easiest to think of Unicode as a database that maps any 
	symbol you can think of to a number called its code point, and 
	to a unique name."
*/
console.log('\x41\x42\x43');
console.log('\u0041\u0042\u0043');

console.log('I \u2661 JavaScript!');

/*
- Strings are immutable
- See String methods in Chap.8
- String have a length property e.g.
*/
console.log('yes'.length);

/*== Statements, pg.10 == */

/*
Types of statements:
	- expression statements
	- disruptive statements
	- try statements
	- if statements
	- switch statements
	- while statements
	- for statement
	- do statement

* If statement:

if (expression){
	statements
}else{
	statements
}
	Here are the false values:
		- false
		- null
		- undefined
		- The empty string ''
		- The number 0
		- The number NaN

* Switch statement
switch(expression) {
    case n:
        code block
        break;
    case n:
        code block
        break;
    default:
        default code block
}

*While statement

while (condition) {
    code block to be executed
}

*For statement
for (statement 1; statement 2; statement 3) {
    code block to be executed
}


/* == Expressions, pg.15 == */

/*
#Operator presedence

. [] ( ) 		Refinement and invocation
delete new 
typeof + - ! 	Unary operators
* / % 			Multiplication, division, modulo
+ - 			Addition/concatenation, subtraction
>= <= > < 		Inequality
=== !== 		Equality
&& 				Logical and
|| 				Logical or
?: 				Ternary

*/

/* == Literals, pg.17 == */

/*

Types of literals:
* Number literal
* String literal
* Array literal
* Function literal
* Regexp literal

*/

/* == Functions, pg.19 == */

/*
"A function literal defines a function value. It can have an optional name that it can
use to call itself recursively. It can specify a list of parameters that will act as vari-
ables initialized by the invocation arguments. The body of the function includes vari-
able definitions and statements. There will be more about functions in Chapter 4.
"
*/