// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****

// console.log("*");
// console.log("**");
// console.log("***");
// console.log("****");
// console.log("*****");

let input = 5;
let bintang = '';

for (let i = 1; i <= input; i++) {
    bintang += '*';
    console.log(bintang);
}
