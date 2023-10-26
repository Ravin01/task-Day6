// Part 1: Find the culprits and nail them — debugging javascript


// All mistakes are corrected and i commented the mistake in the specific line


// 1.
// <!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( "I’m JavaScript!"); mistake is not using double quote in end of the alert
//  </script>
//  Whats the error in this ?
// </body>
// </html>


// 2.
// <!DOCTYPE html>
// <html>
// <body>
//  <script src="part1.js"></script> 
// </body>
// </html>

// alert("I’m invoked!"); mistake in double quotes

// 3.
// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`) it prints in the next line
// alert(3 +
// 1
// + 2); // this is multiple line code and its working


// 4.
// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = `${fname} ${+}${lname}`; here was the mistake appeared
// alert( admin );


// 5.
// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = `${fname} ${+}${lname}`;  here was the mistake
// alert( 'hello ${name}' );



// 6.
// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);  it takes  number as a string 1+2=12


// 7.
// var a = "2" > "12"; 2 is greater than 12, a is positive
// //Don't touch below this
// if (a) {  it satisfies the condition
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused")  use less than to get diffused
// }


// 8.
// let a = prompt("Enter a number?");
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" ); to get success, don't fill anything in prompt
// }


// 9.
// let value = prompt('How many runs you scored in this ball');
// if (value >= 1) {
//       console.log("You hit a ",value); this is the correct code to get the value scored runs
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }


// 10.
// let message2;
// let lock;             // we are just declaring the lock. we don't assign the value here so automatically it ll go else part
//Dont change any code below this 
// if (null || lock || undefined )
// {
//   message2 = "Go away";
// }
// else
// {
//  message2 = "welcome";
// }
// console.log(message2);



// 11.
// let message
// if (null || 2 || undefined )
// {
//  let message = "welcome boss";
//  console.log(message);       console here 
// }
// else
// {
//  let message = "Go away";
// }



// 12.
// let message;
// let lock = 2;
//Don't change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
//  console.log(message);    console here
// }



// 13.
// let i = 3;  
// while (i) {   give i+1
//   console.log( --i );
// }



// 14.
// code to get print 1 to 10
// for(let i=1;i<=10;i++){
//     console.log(i)
// }


// 15.
// print even numbers
// for (let num = 2; num <= 20; num += 2) {
//     console.log(num)
//   }




// 16.
// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${gifts[i]} and added a bow!`);   code changed here
// }



// 17.
// let countdown = 100;
// while (countdown > 1) {   changed here
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
// }


// 18.
// var lemein = "0";
// var lemeout = 0;
// var msg = "";
// if (lemein) {
//  msg += "hi";
//  }
// if (lemeout) {
//  msg += 'hello';
// }
// console.log(msg);  hi, msg = hi, if condition is satisfied


// 19.
// var lemein = "0";
// var lemeout = 0;
// var msg = "";
// if (lemein) {
//  msg += "hi";
//  }
// if (lemeout) {
//  msg += 'hello';
// }
// console.log(msg);  hi, msg = hi, if condition is satisfied 