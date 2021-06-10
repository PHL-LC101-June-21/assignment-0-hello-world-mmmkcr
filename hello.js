function hello() {
	// TODO: change this string so that your program prints "Hello world!" 
	// when you hit the replit run button
	return '"Hello World!"';
}
 
module.exports = hello;

//My Notes:
//So... the function is the 'instruction' that exposes the module 'hello'. Click 'Run' computer pulls module, we see the string?
//function hello() ---> defines the function
//module.exports = hello; ---> calls the function
// return "Hello World!"; ---> returns the string output {Brackets contain the code to be executed} 

//Quick Research:
//"function" structure is similar to a procedure (set of statements that perform a task or calculate values.) The function must be defined.
//"module.exports" line: object included in every JS file in the Node application by default. 'module' is a variable that represents the current module, and 'exports' is an object that will be exposed as a module.