const {myFunc} = require("./test")

// function getDataUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;
//             if (success) {
//                 resolve("joko");
//             }
//             else {
//                 reject("cahyo");
//             }
//         }, 1000);
//     });
// }
// getDataUser()
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
// const getData = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const user = await response.json();
//         console.log(response.ok);
//         if (!response.ok) {
//             throw new Error("error");
//         }
//         console.log(user);
//     }
//     catch (error) {
//         console.log(error);
//     }
// };
// getData();
// const getData2 = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => {
//         return response.json();
//     })
//         .then((users) => {
//         console.log(users);
//     })
//         .catch((error) => {
//         console.log(error);
//     });
// };
// // then -> kalau resolve
// // catch -> error
// // finally -> setelah error dan solve
// // convert obj ke JSON
// const user1 = {
//     nama: "andi",
//     umur: "ka"
// };
// const user1JSON = JSON.stringify(user1);
// console.log(user1JSON);
// // conver json ke obj
// const parseJSON = JSON.parse(user1JSON);
// console.log(parseJSON);
// export {};
// // Modules
myFunc()