var number = 0; // loop variable
// while (number < 10){
//     number++;    // এই লাইন পরে দিলে কিন্তু output এ 9 পর্যন্ত আসতো
//     console.log(number);
// }
// Result: 1 2 3 4 5 6 7 8 9 10
// যদি increment পরে দেই তাহলেঃ 
// while (number < 10){
//     console.log(number);
//     number++;    // এই লাইন পরে দিলে কিন্তু output এ 9 পর্যন্ত আসতো
// }
// Result: 0 1 2 3 4 5 6 7 8 9

// 1 - 20 পর্যন্ত জোড় সংখ্যা গুলো 
// var number = 0; 
// while (number < 20){
//     if(number % 2 == 0){
//         console.log(number);
//     }
//     number++;
// }

// 1 - 20 পর্যন্ত জোড় সংখ্যা গুলো  [পদ্ধতি ২]
// var number = 0; 
// while (number <= 20){
//     number+= 2;
//     console.log(number);
// }


// 1 - 20 পর্যন্ত বিজোড় সংখ্যা গুলো
// var number = 0; 
// while (number <= 20){
//     if(number % 2 !== 0){
//         console.log(number);
//     }
//     number++;
// }