//1.Accept a char input from the user and display it on the console.
// import * as readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function displayChar() {
//   rl.question('Enter a character: ', (char: string) => {
//     console.log('You entered: ' + char);
//     rl.close();
//   });
// }

// displayChar();

//***********************************************************************************************


//2.. Accept two inputs from the user and output their sum.

// import * as readline from 'readline';

// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// });
// function sum(){
//     rl.question("enter a number: ",(Number:string)=>{
//         const num1 :number = parseInt(Number);
//         rl.question("enter second number: ",(number1: string)=>{
//             const num2: number = parseInt(number1);

//             console.log("sum of given numbers: ",num1+num2);
//             rl.close();
//         })
//     })
// }

// sum();

//*****************************************************************************************


//3.Program should accept 3 inputs from the user and calculate simple interest for the given inputs. Formula: SI=(P*R*n)/100)

// function sampleInterest(){
//     rl.question("Enter Principal amount: ",(p:string)=>{
//         const principalAmount = parseInt(p);
//         rl.question('Enter Interest rate: ',(r:string)=>{
//             const interestRate  = parseInt(r);
//             rl.question("Enter number of years: ",(n:string)=>{
//                 const numberOfyears = parseInt(n);
//                 const result = (principalAmount*interestRate*numberOfyears)/100;
//                 console.log("simple interest: ",result);
//                 rl.close();
//             })
//         })
//     })
// }
// sampleInterest();

//***********************************************************************************************************************************

//4. Write a program to check whether a student has passed or failed in a subject after he    or she enters their mark (pass mark for a subject is 50 out of 100).

// function studentResult(){
//     rl.question("enter the mark out of 100 : ",(number:string)=>{
//         const mark = Number(number);
//         if(mark >= 50)
//             {
//                 console.log("you are passed!")
//             } else{
//                 console.log("you are failed!")
//             }
//             rl.close();
//     })
// }
// studentResult();

//*****************************************************************************************************************************************

//5.Write a program to show the grade obtained by a student after he/she enters their total mark percentage.
// function grade(){

//     rl.question("Enter your mark : ",(number: string)=>{
//         const mark = parseInt(number);
//         let gradeValue = "enter mark";
//         if(mark >= 90){
//             gradeValue = "A";
           
//         } else if(mark<=89 && mark>=80){
//             gradeValue = "B";
//         }else if(mark<=79 && mark >= 70){
//             gradeValue = "C";
//         }else if(mark<=69 && mark>=60){
//             gradeValue = "D";
//         }else if(mark<=59 && mark>= 50){
//             gradeValue = "E";
//         }else{
//             gradeValue = "Failed";
//         }
//         console.log("Your grade : ",gradeValue);
//         rl.close();
//     })
// }
// grade()

//******************************************************************************************************************************* */

//6. Using the ‘switch case’ write a program to accept an input number from the user and output the day as follows. 

// function printDay(){
//     rl.question("Enter your choice : 1.Sunday\n2.Monday\n3.Tuesday\n4.Wednesday\n5.Thursday\n6.Friday\n7.Saturday\n",(entry:string)=>{
//         const option = parseInt(entry);
//         switch(option){
//             case 1 : console.log("Sunday");
//                       break;
//             case 2 : console.log("Monday");
//                      break;
//             case 3 : console.log("Tuesday");
//                      break;
//             case 4 : console.log("Wednesday");
//                      break;
//             case 5 : console.log("Thursday");
//                      break;
//             case 6 : console.log("Friday");
//                      break;
//             case 7 : console.log("Saturday");
//                      break;
//             default : console.log("Invalid Entry");
//                     break;
//         }
//         rl.close();
//     })
// }
// printDay();

// ********************************************************************************************************************************

//7.Write a program to print the multiplication table of given numbers.

// function multiplicationTable(){
//     rl.question("Enter the number : ",(number:string)=>{
//         const product =Number(number);
//         for(let i=1;i<=10;i++){
//             console.log(`${product} * ${i} = ${product*i}`);
//         }
//         rl.close();
//     })
// }
// multiplicationTable();

//******************************************************************************************************************************** */

//  8. Write a program to find the sum of all the odd numbers for a given limit
// function oddNumberSum(){
//     rl.question("Enter a limit : ",(number : string)=>{
//         const limit = Number(number);
//         let sum = 0;
//         for(let i=1;i<=limit;i++){
//             if(i%2 !== 0){
//                 sum+=i;
//             }
//         }
//         console.log("\n",sum);
//         rl.close();
//     })
// }
// oddNumberSum();

//*********************************************************************************************************************************** */

//  9. Write a program to print the following pattern (hint: use nested loop)
// function pattern(){
//     rl.question("Enter a limit : ",(number : string)=>{
//         const limit = Number(number);
       
//         for(let i=1;i<=limit;i++){
//             let patternString:string = "";
//             for(let j=1;j<=i;j++){
//                 patternString+=j+" ";
//             }
//             console.log(patternString);
//         }
//         rl.close();
//     })
// }
// pattern();

//******************************************************************************************************************************************* */

//10. Write a program to interchange the values of two arrays.

// function interChangeArrays(){
//     const tempArray = [...array1];
//     array1.splice(0,array1.length);
//     array1=[...array2]
//     array2.splice(0,array2.length);
//     array2 =[...tempArray];
// }

// let array1 = [1,2,3,4,5,6];
// let array2 = [10,11,12,13,14];

// console.log(`Before interchange >> array1 : ${array1}, array2 : ${array2}`);
// interChangeArrays()
// console.log(`Afte interchange >> array1 : ${array1}, array2 : ${array2}`);


//*********************************************************************************************************************************

//  11. Write a program to find the number of even numbers in an array
// function countEvenNumbers(arr: number[]): number {
//     const evenNumbers = arr.filter((num) => num % 2 === 0);
//     return evenNumbers.length;
//   }
  
//   const numbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const numberOfEvenNumbers = countEvenNumbers(numbersArray);
//   console.log('Number of even numbers:', numberOfEvenNumbers);
  
//*********************************************************************************************************************************

// 12.Write a program to sort an array in descending order

// function sortDescending(arr: number[]): number[] {
//     return arr.sort((a, b) => b - a);
//   }
  
//   const numbersArray: number[] = [5, 2, 9, 1, 7, 3];
//   const sortedArray = sortDescending(numbersArray);
//   console.log('Sorted array in descending order:', sortedArray);
 

//*********************************************************************************************************************************

//13. Write a program to identify whether a string is a palindrome or not

// import * as readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function isPalindrome(input: string): boolean {
//   const cleanedInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//   const reversedInput = cleanedInput.split('').reverse().join('');
//   return cleanedInput === reversedInput;
// }

// function checkPalindrome() {
//   rl.question('Enter a string: ', (input: string) => {
//     const result = isPalindrome(input);
//     if (result) {
//       console.log(`${input} is a palindrome.`);
//     } else {
//       console.log(`${input} is not a palindrome.`);
//     }
//     rl.close();
//   });
// }

// checkPalindrome();

//*********************************************************************************************************************************

// 14. Write a program to add to two dimensional arrays

// function addTwoDArrays(arr1: number[][], arr2: number[][]): number[][] {
//     const result: number[][] = [];
  
//     for (let i = 0; i < arr1.length; i++) {
//       const row: number[] = [];
//       for (let j = 0; j < arr1[i].length; j++) {
//         row.push(arr1[i][j] + arr2[i][j]);
//       }
//       result.push(row);
//     }
  
//     return result;
//   }
  
//   const array1: number[][] = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
  
//   const array2: number[][] = [
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 1],
//   ];
  
//   const resultArray = addTwoDArrays(array1, array2);
//   console.log('Resultant Array:', resultArray);
  
//*********************************************************************************************************************************

// 15.Write a program to accept an array and display it on the console using functions
// const rl = require('prompt-sync')();

// function getArray(): number[] {
//     const size = 5; // Change this value to set the size of the array
//     const array: number[] = [];
//     for (let i = 0; i < size; i++) {
//       const value = parseInt(prompt(`Enter value ${i + 1}/${size}:`) || '0', 10);
//       array.push(value);
//     }
//     return array;
//   }
  
//   function displayArray(arr: number[]): void {
//     console.log("Array values:");
//     console.log(arr.join(", "));
//   }
  
//   function main(): void {
//     const array = getArray();
//     displayArray(array);
//   }
  
//   main();

//*********************************************************************************************************************************

// 16.Write a program to check whether a given number is prime or not

// function isPrime(number: number): boolean {
//     if (number <= 1) {
//       return false;
//     }
  
//     // Check for divisibility from 2 to the square root of the number
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         return false;
//       }
//     }
  
//     return true;
//   }
  
//   function main(): void {
//     rl.question("enter the number: ",(number:string)=>{
//         const numToCheck = parseInt(number); // Replace this with the number you want to check
//         const result = isPrime(numToCheck);
      
//         if (result) {
//           console.log(`${numToCheck} is a prime number.`);
//         } else {
//           console.log(`${numToCheck} is not a prime number.`);
//         }
//         rl.close();
//     })
   
//   }
  
//   main();
  
//*********************************************************************************************************************************

// 16.Write a program to check whether a given number is prime or not

// function sum(number1:number, number2:number):number{
//     return number1+number2;
// }
// function substraction(number1:number, number2:number):number{
//     return number1-number2;
// }
// function multiplication(number1:number, number2:number):number{
//     return number1*number2;
// }
// function division(number1:number, number2:number):number{
//     return number1/number2;
// }

//17

// function main(){
//     console.log("\n*** MENU ***\n1.Addition\n2.Substraction\n3.Multiplication\n4.Division\n\n")
//     rl.question("Enter your option :- ",(number:string)=>{
//         const option = parseInt(number);
//         switch (option) {
//             case 1: console.log("\n\t ADDITION \n");
//                 rl.question("Enter first number : ", (number1: string) => {
//                     const num1 = parseInt(number1);
//                     rl.question("Enter second number : ", (number2: string) => {
//                         const num2 = parseInt(number2);
//                         const result = sum(num1, num2);
//                         console.log(`${num1} + ${num2} = ${result}`);
//                         rl.close();
//                     })
//                 })
//                 break;
//             case 2: console.log("\t SUBSTRACTION \n");
//                 rl.question("Enter first number : ", (number1: string) => {
//                     const num1 = parseInt(number1);
//                     rl.question("Enter second number : ", (number2: string) => {
//                         const num2 = parseInt(number2);
//                         const result = substraction(num1, num2);
//                         console.log(`${num1} - ${num2} = ${result}`);
//                         rl.close();
//                     })
//                 });
//                 break;
            
//                 case 3: console.log("\t MULTIPLICATION \n");
//                 rl.question("Enter first number : ", (number1: string) => {
//                     const num1 = parseInt(number1);
//                     rl.question("Enter second number : ", (number2: string) => {
//                         const num2 = parseInt(number2);
//                         const result = multiplication(num1, num2);
//                         console.log(`${num1} * ${num2} = ${result}`);
//                         rl.close();
//                     })
//                 });
//                 break;

//                 case 4: console.log("\t DIVISION \n");
//                 rl.question("Enter first number : ", (number1: string) => {
//                     const num1 = parseInt(number1);
//                     rl.question("Enter second number : ", (number2: string) => {
//                         const num2 = parseInt(number2);
//                         const result = division(num1, num2);
//                         console.log(`${num1} / ${num2} = ${result}`);
//                         rl.close();
//                     })
//                 });
//                 break;
//         }
//     })
// }
//   main();

//*********************************************************************************************************************************

//  18. Grades are computed using a weighted average. Suppose that the written test counts 70%,  lab exams 20% and assignments 10%.

// function grade(mark1:number,mark2:number,mark3:number):number{
//     return ((mark1*70)/100)+((mark2*20)/100)+((mark3*10)/100);
// }
// function main(){
//     console.log("\tCalculate GRADE\n")
//     rl.question("enter marks of written test : ",(mark1:string)=>{
//         const writtenTest = parseInt(mark1);
//         rl.question("Enter marks of lab test : ",(mark2:string)=>{
//             const labTest = parseInt(mark2);
//             rl.question("Enter mark of assignment : ",(mark3 : string)=>{
//                 const assignmentMark = parseInt(mark3);
//                 const result = grade(writtenTest,labTest,assignmentMark);
//                 console.log("Grade : ",result);
//                 rl.close();
//             })
//         })
//     })
// }
// main()

//*********************************************************************************************************************************

// 19. Income tax is calculated as per the following table 

    // function taxAmount(amount : number): number{
    //     let tax =0;
    //     if(amount <= 500000 && amount > 100000){
    //         tax = (amount*30)/100;
    //     }else if(amount <= 100000 && amount >= 50000){
    //         tax = (amount*20)/100;
    //     }else if(amount<=50000 && amount>25000){
    //         tax = (amount*5)/100;
    //     }else if(amount<25000){
    //         tax=0;
    //     }
    //     return tax;
    // }

    // function main(){
    //     console.log("Income Tax Amount ")
    //     rl.question("Enter Annual Income : ",(number : string)=>{
    //         const annualIncome = parseInt(number);
    //         const result = taxAmount(annualIncome);
    //         console.log("Tax Amount : ",result);
    //         rl.close();
    //     })
    // }
    // main();

//*********************************************************************************************************************************

//20. Write a program to print the following pattern 

// function printPattern(rows: number): void {
//     let counter = 1;
  
//     for (let i = 1; i <= rows; i++) {
//       let rowValues = "";
  
//       for (let j = 1; j <= i; j++) {
//         rowValues += counter + "\t";
//         counter++;
//       }
  
//       console.log(rowValues);
//     }
//   }
  
//   function main(){
//     rl.question("Enter number of rows : ",(number : string)=>{
//         const numRows = parseInt(number);
//         printPattern(numRows);
//         rl.close();
//     })
//   }
//   main();
 
//*********************************************************************************************************************************

// 22. Write a program to add the values of two 2D arrays

// import * as readline from 'readline';

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// function getArray(rows: number, cols: number): number[][] {
//   const array: number[][] = [];

//   return new Promise((resolve) => {
//     let currentRow = 0;

//     function getInput() {
//       if (currentRow >= rows) {
//         rl.close();
//         resolve(array);
//         return;
//       }

//       array[currentRow] = [];
//       let currentCol = 0;

//       function getCellValue() {
//         if (currentCol >= cols) {
//           currentRow++;
//           getInput();
//           return;
//         }

//         rl.question(`Enter value for row ${currentRow + 1}, column ${currentCol + 1}: `, (value) => {
//           const num = parseFloat(value || '0');
//           array[currentRow][currentCol] = num;
//           currentCol++;
//           getCellValue();
//         });
//       }

//       getCellValue();
//     }

//     getInput();
//   });
// }

// function addArray(array1: number[][], array2: number[][]): number[][] {
//   const rows = array1.length;
//   const cols = array1[0].length;
//   const result: number[][] = [];

//   for (let i = 0; i < rows; i++) {
//     result[i] = [];
//     for (let j = 0; j < cols; j++) {
//       result[i][j] = array1[i][j] + array2[i][j];
//     }
//   }

//   return result;
// }

// function displayArray(array: number[][]): void {
//   console.log("Array values:");
//   for (const row of array) {
//     console.log(row.join("\t"));
//   }
// }

// async function main(): Promise<void> {
//   const rows = 2; // Change these values to set the size of the arrays
//   const cols = 3;

//   console.log("Enter values for Array 1:");
//   const array1 = await getArray(rows, cols);

//   console.log("\nEnter values for Array 2:");
//   const array2 = await getArray(rows, cols);

//   const sumArray = addArray(array1, array2);

//   console.log("\nSum of the arrays:");
//   displayArray(sumArray);
// }

// main();

//*********************************************************************************************************************************

//23.Write an object oriented program to store and display the values of a 2D array

// class TwoDArray {
//     private array: number[][];
  
//     constructor(rows: number, cols: number) {
//       this.array = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
//     }
  
//     getArray(): void {
//       const rows = this.array.length;
//       const cols = this.array[0].length;
//       for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//           const value = parseFloat(prompt(`Enter value for row ${i + 1}, column ${j + 1}:`) || '0');
//           this.array[i][j] = value;
//         }
//       }
//     }
  
//     displayArray(): void {
//       const rows = this.array.length;
//       const cols = this.array[0].length;
//       console.log("Array values:");
//       for (let i = 0; i < rows; i++) {
//         console.log(this.array[i].join("\t"));
//       }
//     }
//   }
  
//   function main(): void {
//     const rows = 2; // Change these values to set the size of the array
//     const cols = 3;
  
//     const array = new TwoDArray(rows, cols);
//     array.getArray();
//     array.displayArray();
//   }
  
//   main();
  

//*********************************************************************************************************************************

// 25.Write a Javascript program to display the status (I.e. display book name, author name & reading status) of books. You are given an object library in the code's template. It contains a list of books with the above mentioned properties.
// interface Book {
//     title: string;
//     author: string;
//     readingStatus: boolean;
//   }
  
//   const library: Book[] = [
//     {
//       title: 'Bill Gates',
//       author: 'The Road Ahead',
//       readingStatus: true,
//     },
//     {
//       title: 'Steve Jobs',
//       author: 'Walter Isaacson',
//       readingStatus: true,
//     },
//     {
//       title: 'Mockingjay: The Final Book of The Hunger Games',
//       author: 'Suzanne Collins',
//       readingStatus: false,
//     },
//   ];
  
//   function displayStatus(library: Book[]): void {
//     for (const book of library) {
//       if (book.readingStatus) {
//         console.log(`Already read '${book.title}' by ${book.author}.`);
//       } else {
//         console.log(`You still need to read '${book.title}' by ${book.author}.`);
//       }
//     }
//   }
  
//   displayStatus(library);
  
  
//26.Given a variable named my_string, try reversing the string using  my_string.split().reverse().join() and then print the reversed string to the console. If the try clause has an error, print the error message to the console. Finally, print the typeof of the my_string variable to the console.


// let my_string: string = "Hello, World!";

// try {
//   const reversedString = my_string.split('').reverse().join('');
//   console.log(`Reversed string is: ${reversedString}`);
// } catch (err:any) {
//   console.log(`Error: ${err.message}`);
// } finally {
//   console.log(`Type of my_string is: ${typeof my_string}`);
// }

//27.

// class NotANumberError extends Error {
//     constructor() {
//       super("Invalid height: Not a number (NaN).");
//       this.name = "NotANumberError";
//     }
//   }
  
//   class HugeHeightError extends Error {
//     constructor() {
//       super("Invalid height: Height is too huge.");
//       this.name = "HugeHeightError";
//     }
//   }
  
//   class TinyHeightError extends Error {
//     constructor() {
//       super("Invalid height: Height is too tiny.");
//       this.name = "TinyHeightError";
//     }
//   }
  
//   function checkHeight(my_height: number): void {
//     if (isNaN(my_height)) {
//       throw new NotANumberError();
//     }
  
//     if (my_height > 300) {
//       throw new HugeHeightError();
//     }
  
//     if (my_height < 50) {
//       throw new TinyHeightError();
//     }
//   }
  
//   const my_height = 180;
  
//   try {
//     checkHeight(my_height);
//     console.log(`Height is valid: ${my_height} cm`);
//   } catch (error:any) {
//     if (error instanceof NotANumberError || error instanceof HugeHeightError || error instanceof TinyHeightError) {
//       console.log(`Error: ${error.message}`);
//     } else {
//       console.log(`Unknown error: ${error.message}`);
//     }
//   }
  
//28.
// class Car {
//     name: string;
//     mileage: number;
//     max_speed: number;
  
//     constructor(name: string, mileage: number, max_speed: number) {
//       this.name = name;
//       this.mileage = mileage;
//       this.max_speed = max_speed;
//     }
//   }
  
//   // Usage example:
//   const myCar = new Car("Toyota", 150000, 200);
//   console.log(myCar);
  

//     29.  Write a myFilter function that takes 2 parameters: myArray and callback. Here, myArray is an array of numbers and callback is a function that takes the elements of myArray as its parameter and returns a boolean true if the sum of the number is even or   false if the sum of the number  is odd.


// function myFilter(myArray: number[], callback: (arr: number[]) => boolean): number {
//     const sum = myArray.reduce((acc, curr) => acc + curr, 0);
//     const isEvenSum = callback(myArray);
//   if(isEvenSum){
//     console.log("sum is even")
//   }else{
//     console.log("Sum is odd")
//   }
//     return sum;
//   }
  
//   function isEvenSum(arr: number[]): boolean {
//     const sum = arr.reduce((acc, curr) => acc + curr, 0);
//     return sum % 2 === 0;
//   }
  
//   const sampleInput: number[] = [1, 2, 3, 4, 5];
//   const result = myFilter(sampleInput, isEvenSum);
//   console.log(result); 
  
