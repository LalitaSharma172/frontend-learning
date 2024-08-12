// array => is used to store more than one similar types of element inside a variable 
    
    
// array indexing always starts from zero 
// basically there are two types of array 
// 1.one -d array  => [10,20,30,40,50]
// 2.two -d array or multidimensional array  =>[[10,20,30],[40,50,60],[70,80,90]]
//  arrays are mutable you can change its value  by using its indexing number 

// let x= [10,20,30,40,50]
// x[2]=100
// x[9]=200
// console.log(x)
// console.log(x.length)
// console.log(x[3])

// for(let i =0;i<x.length;++i){
//     console.log(x[i])
// }
// let x = [
//     [10,20,30],
//     [40,50,60],
//     [70,80,90]
// ]

// x[0]=[100,200,300]
// x[1]=[400,500,600]
// x[2]=[700,800,900]


// console.log(x)
// for(let i = 0;i<x.length;++i){
//     // console.log(x[i])
//     for(let j=0;j<x.length;++j){
//         console.log(x[i][j])
//     }
// }

// console.log(x)
// console.log(x[2][1])


// String=> is a collection of more than one character 
// string indexing always starts from zero 
// but strings are immutable means its value can not be changed by using its indexing number 


// let x ="Letslearncoding"
// for(let i = 0;i<x.length;++i){
//     console.log(x[i])
// }
// x[0]='G'
// // console.log(x.length)
// console.log(x[0])


// let name=['lalita','monika','anjali','nicky','prashant']

// console.log(name)
// console.log(name[0])

// Original Array
// let courses = ["HTML", "CSS", "JavaScript", "React"];

// // Accessing the Array Length
// console.log(courses.length);

// Original Array
// let courses = ["HTML", "CSS", "JavaScript", "React"];

// console.log(courses)
// // Converting array to String
// let str = courses.toString();

// console.log(str);


// Original Array
// let courses = ["HTML", "CSS", "JavaScript", "React"];

// // Joining the array elements
// console.log(courses.join('-'));



// Declare three arrays



// concatenation 

// let arr1 = [11, 12, 13];
// let arr2 = [14, 15, 16];
// let arr3 = [17, 18, 19];
// let newArr = arr2.concat(arr1, arr3);
// console.log(newArr);



// Creating multilevel array
// const arr = [['1', '2'], ['3', '4', '5',['6'], '7']];


// // Flat the multilevel array
// const anjali= arr.flat(Infinity);
// console.log(anjali);

// Declaring and initializing arrays
// let numArr = [10, 20, 30, 40, 50];
// console.log(numArr)
// // Adding elements at the end of an array
// numArr.push(60);
// console.log(numArr)
// numArr.push(70, 80, 90);
// console.log(numArr);


// let strArr = ["piyush", "gourav", "smruti", "ritu"];
// strArr.push("sumit", "amit");

// console.log(strArr);



// Declaring and initializing arrays
// let numArr = [20, 30, 40];
// console.log(numArr)
// // Adding element at the beginning
// // of an array
// numArr.unshift(10, 20);
// console.log(numArr);


// Declaring and initializing arrays
// let strArr = ["amit", "sumit"];

// // Adding element at the beginning
// // of an array
// strArr.unshift("sunil", "anil");
// console.log(strArr);


// Declare and initialize array
// let numArr = [20, 30, 40, 50];

// // Removing elements from end 
// // of an array
// numArr.pop();

// console.log(numArr);


// // Declare and initialize array
// let strArr = ["amit", "sumit", "anil"];

// // Removing elements from end 
// // of an array
// strArr.pop();

// console.log(strArr);

// Declare and initialize array
// let numArr = [20, 30, 40, 50];

// // Removing elements from the 
// // beginning of an array
// numArr.shift();

// console.log(numArr);


// // Declare and initialize array
// let strArr = ["amit", "sumit", "anil"];

// // Removing elements from the 
// // beginning of an array
// strArr.shift();

// console.log(strArr);


// Declare and initialize array
// let numArr = [20, 30, 40, 50];

// Removing an adding element at a 
// particular location in an array

// Delete 3 elements starting from index 1
// numArr.splice(1, 3);

// Insert 80, 90, 100 at starting index 1
// numArr.splice( 1,0,3, 4, 5);



// let x =[3,4,5]

// console.log(numArr);


// Declare and initialize array
// let strArr = ["amit", "sumit", "anil"];

// // Delete two elements starting from index 1
// // and add three elements.
// strArr.splice(1, 2, "Geeks", "Geeks1", "Geeks2");
// console.log(strArr)


// Original Array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Case 1: Extract the first 3 elements of the array
// const case1 = arr.slice(0,5);
// console.log("First 3 Array Elements: ", case1);



// // Case 2: Extract the last 3 array elements
// const case2 = arr.slice(-4);
// console.log("Last 3 Array Elements: ", case2);

// // Case 3: Extract elements from middle of array
// const case3 = arr.slice(3, 7);
// console.log("Case 3: Extract elements from middle: ", case3);

// // Case 4: Start index is greater than end index
// const case4 = arr.slice(5, 2);
// console.log("Case 4: Start index is greater than end index: ", case4);

// // Case 5: Negative start index
// const case5 = arr.slice(-4, 9);
// console.log("Case 5: Negative start index: ", case5);

// // Case 6: Negative end index
// const case6 = arr.slice(3, -2);
// console.log("Case 6: Negative end index: ", case6);

// // Case 7: Only start index is provided
// const case7 = arr.slice(5);
// console.log("Case 7: Only start index is provided: ", case7);

// // Case 8: Start index and end index are out of range
// const case8 = arr.slice(15, 20);
// console.log("Case 8: Start and end index out of range: ", case8);

// // Case 9: Start and end index are negative
// // and out of range
// const case9 = arr.slice(-15, -10);
// console.log("Case 9: Start and end index are negative"
//     + " and out of range: ", case9);



// Declare variables to store input values
// var num1, num2;

// Uncomment the following lines to take input from the user
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");

// Compare the values and print the larger or equality message
// if (parseInt(num1, 10) > parseInt(num2, 10)) {
//   console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
// } else if (parseInt(num2, 10) > parseInt(num1, 10)) {
//   console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
// } else {
//   console.log("The values " + num1 + " and " + num2 + " are equal.");
// }


// // Assigning values to variables
// var x = 3;
// var y = -7;
// var z = 2;

// // Checking different conditions based on the signs of x, y, and z
// if (x > 0 && y > 0 && z > 0) {
//   alert("The sign is +");
// } else if (x < 0 && y < 0 && z < 0) {
//   console.log("The sign is -");
// } else if (x > 0 && y < 0 && z < 0) {
//   console.log("The sign is +");
// } else if (x < 0 && y > 0 && z < 0) {
//   console.log("The sign is +");
// } else {
//   console.log("The sign is -");
// }


// question number 3






// string using javascript => strings are collections of more than one character and strings are immutable which is basically used printing purpose of the character
// string indexing always starts from zero 



// let x = "hello everyone we are learning about new technology";
// console.log(x)
// let y ='hello my name is vimlesh';
// console.log(y)

// let name = "Lalita"
// console.log(name)
// console.log(name[0])
// console.log(name[2])
// name[1]='m'
// console.log(name)


// // Define a string variable 
// let A = 'Geeks for Geeks';

// // Use the slice() method to extract a substring
// let b = A.slice(0, 5);
// let c = A.slice(6, 9);
// let d = A.slice(10);

// // Output the value of variable
// console.log(b);
// console.log(c);
// console.log(d);

// const str = "Hello World";
// let ab= str.charAt(7); // "H"
// console.log(ab)
// console.log(str)



// const str = "Hello World";
// let ab = str.charCodeAt(1); // 72
// console.log(ab)

// concatenation 
// const str = "Hello";
// const str2 = " World";
// const str3="hello"   
// console.log(str.concat(str2,str3)); // "Hello World"


// const str = "Hello World";
// const abc = str.endsWith("World"); // true
// console.log(abc)


// const str = "Hello World we are learning programming languages";
// console.log(str.includes("we")); // true


// const str = "Hello World we are learning xyz";
// console.log(str.indexOf("we")); // 6

// const str = "Hello World monika";
// console.log(str.lastIndexOf("monika")); // 6


// const str = "HHllo World"
// console.log(str.match(/[a-z]/)); // ["H"]

// const str = "Hello World";
// console.log(str.matchAll(/[a-z]/g)); // ["H", "W"]

// OR
// str.match(/[A-Z]/g); // ["H", "W"]

// const str = "Hello";
// console.log(str.padEnd(30, "Worldletslearncding")); // "HelloWorldWorld"


// const str = "Hello";
// console.log(str.padStart(10, "World")); // "WorldWorldWorldHello"

// const str = "Hello";
// console.log(str.repeat(4)); // "HelloHelloHello"

// const str = "Hello World";
// console.log(str.replace("H", "$")); // "He*lo World"

// const str = "Hello World";
// console.log(str.replaceAll("l", "$")); // "He**o Wor*d"

// const str = "Hello World helklo";
// console.log(str.slice(12)); // "World"

// const str = "Hello World lalita bol rahi hai kyonki wo programming sikh rahi hai";
// console.log(str.split(" ")); // ["Hello", "World"]

// const str = "Hello World";
// console.log(str.startsWith("lalita")); // true