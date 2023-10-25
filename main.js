// const a = prompt("a sonini kiriting");
// const n = prompt("n sonini kiriting");

// const toConvert = (a, n) => {
//   let convert = (+n).toString(a);
//   console.log(convert);
// };
// toConvert(a, n);

// const a = prompt("a sonini kiriting");
// const n = prompt("n sonini kiriting");

// const parseDemical = (a, n) => {
//   let convert = parseInt(n, a);
//   console.log(convert);
// };

// parseDemical(a, n);

// function logPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;
//     console.log(i);
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }

// logPrime(42);

// const login = prompt("Login kiriting(kamida 3ta belgi): ");
// const password = prompt("Parol kiriting(kamida 8ta belgi): ");
// const user = {
//   password: password,
//   login: login,
// };

// const testLoginPassword = (user) => {
//   if (user.login.length < 3) {
//     return "Login kamida 3ta belgidan iborat bo'lishi kerak";
//   } else if (user.password.length < 8) {
//     return "Parol eng kamida 8ta belgidan iboert bo'lishi kerak";
//   } else {
//     return "siz muvaffaqiyatli ro'yxatdan o'tdingiz";
//   }
// };

// console.log(testLoginPassword(user));

// const arr = [454, 123, 23, 500, 2, 300, 100, 433, 235, 96, 3];

// const arrFind = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[arr.length - 1]) {
//       return arr[i];
//     }
//   }
// };

// console.log(arrFind(arr));

// const n = prompt("n sonini kiriting");
// const a = prompt("a sonini kiriting");
// const arr = [454, 123, 23, 500, 2, 300, 100, 433, 235, 96, 3];

// const printIntervalArr = () => {
//   if (a > n && a < arr.length - 1) {
//     for (let i = n; i < a; i++) {
//       console.log(arr[i]);
//     }
//   } else {
//     console.log("xato kiritilgan raqam");
//   }
// };

// printIntervalArr();

// const n = prompt("n sonini kiriting");
// const a = prompt("a sonini kiriting");
// const arr = [454, 123, 23, 500, 2, 300, 100, 433, 235, 96, 3];

// const printIntervalArr = () => {
//   let counter = 0;
//   if (a > n && a < arr.length - 1) {
//     for (let i = n; i < a; i++) {
//       counter += arr[i];
//     }
//     console.log(counter / (a - n));
//   } else {
//     console.log("xato kiritilgan raqam");
//   }
// };

// printIntervalArr();

// const n = prompt("n sonini kiriting");
// const a = prompt("a sonini kiriting");
// const arr = [454, 123, 23, 500, 2, 300, 100, 433, 235, 96, 3];

// const printIntervalArr = () => {
//   let counter = 0;
//   let arrCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arrCount += arr[i];
//   }
//   if (a > n && a < arr.length - 1) {
//     for (let i = n; i < a; i++) {
//       counter += arr[i];
//     }
//   } else {
//     console.log("xato kiritilgan raqam");
//   }
//   console.log(arrCount - counter);
// };

// printIntervalArr();

// const n = prompt("n sonini kiriting");
// const a = prompt("a sonini kiriting");
// const arr = [454, 123, 23, 500, 2, 300, 100, 433, 235, 96, 3];

// const printIntervalArr = () => {
//   let counter = 0;
//   let arrCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arrCount += arr[i];
//   }
//   if (a > n && a < arr.length - 1) {
//     for (let i = n; i < a; i++) {
//       counter += arr[i];
//     }
//   } else {
//     console.log("xato kiritilgan raqam");
//   }
//   console.log((arrCount - counter) / (arr.length - (a - n)));
// };

// printIntervalArr();

// const arr = [454, 123, 23, 500, 2, 300, 100, 433, 235, 96, 3];
// function isProgression(arr) {
//   if (arr.length <= 2) {
//     return true;
//   }

//   const difference = arr[1] - arr[0];

//   for (let i = 2; i < arr.length; i++) {
//     if (arr[i] - arr[i - 1] !== difference) {
//       return arr;
//     }
//   }

//   return 0;
// }
// console.log(isProgression(arr));
