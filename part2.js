// Part 2 : Find the culprits and nail them — debugging javascript loops



// 1.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 0; i < 11; i++) {
//  new_string += numsArr[i] 

// }
// console.log(new_string);

// output - 1234567891011



// 2.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 0; i < 11; i++) {
//  new_string += numsArr[i] + ","
// }
// console.log(new_string);

// Output: 1,2,3,4,5,6,7,8,9,10,11


// 3.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 11; i > 0; i --) {
//  new_string += numsArr[i-1] + " "
// }
// console.log(new_string.trimEnd());

// Output: 11 10 9 8 7 6 5 4 3 2 1


// 4.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = "even"
//  }
// }
// console.log(numsArr);

// output : [1,'even', 3, 'even', 5, 'even', 7, 'even', 9, 'even', 11]


// 5.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 != 0 )
//  {
//  numsArr[i] = "even"
//  }
// }
// console.log(numsArr);

// output : ['even', 2, 'even', 4, 'even', 6, 'even', 8, 'even', 10, 'even']


// 6.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum = 0;
// for (var i = 0; i <=10; i++) {
//  sum += numsArr[i]
// }
// console.log(sum);


// output : 66



// 7.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <10; i++) {
//  if(numsArr[i]%2==0){
//     sum += numsArr[i]
//  }
// }
// console.log(sum);

// output : 30


// 8.
// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2==0)
//  {
//  sum += numsArr[i]
//  }
//  else{
//  sum -= numsArr[i]
//  }
// }
// console.log(sum);

// output - 94


// 9.
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];  comma is missing
// for(let i =0; i<=numsArr.length-1; i++){
//     console.log(numsArr[i])
// }


// 10.
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=1                                            starts at 1

// for (let i = 0; i <= numsArr.length-1; i++) {
  
//  let inner_array = numsArr[i];
//  for(let j = 1 ; j <= inner_array.length-1;j++ ){        bracket is missing
//     str_all += `${inner_array[j]}`                       convert number into string
//  }
// }
// console.log(str_all);



// 11.
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ )
//       if(inner_array[j] %2 != 0 )
//       {
//          inner_array[j] = 'even'
//        }
// }
// console.log(numsArr);


// output - [ [ 'even', 2, 'even', 4, 'even' ],[ 6, 'even', 8, 'even', 10, 'even' ] ]



// 12.
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// let duplicate = numsArr.reverse()
// console.log(duplicate)
// var str_all=0
// for (var i = 0; i <= duplicate.length-1; i++) {
//  var inner_array = numsArr[i];
//  for(var j = inner_array.length-1; j >= 0 ;j-- )
//      str_all +=`${inner_array[j]} `
// }
// console.log(str_all);




// 13.
// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var sum_odd=0;
// var sum_even=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ ){
//  if(inner_array[j]%2!=0)
//  {
//  sum_odd += inner_array[j]
//  }
//  else
//  {
//  sum_even += inner_array[j]
//  }
// }
// }
// console.log(sum_odd);
// console.log(sum_even);



// output
// 36
// 30

