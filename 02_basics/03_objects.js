//singleton
//Object.create 

//objects literals

let mysym = Symbol("Key1")

const jsuser = {
    name: "ABHI",
    "full name": "ABHISHEK HIRAPARA",
    age: 20,
    [mysym]: "myKey1",
    email: "abhi@google.com",
    location: "ahmedabad",
    isLogin: false,
    lastLoginDays: ["monday","sunday"]
}

console.log(jsuser.email);
//console.log(jsuser.full name);
console.log(jsuser["full name"]);
//console.log(jsuser[email]);
console.log(jsuser["email"]);
//console.log(typeof jsuser.mysym);
console.log(jsuser[mysym]);
console.log(jsuser);




