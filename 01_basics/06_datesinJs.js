let todayDate = new Date()
// console.log(todayDate);
// console.log(todayDate.toString());
// console.log(todayDate.toDateString());
// console.log(todayDate.toISOString());
// console.log(todayDate.toJSON());
// console.log(todayDate.toLocaleDateString());
// console.log(todayDate.toLocaleString());
// console.log(todayDate.toLocaleTimeString());
// console.log(todayDate.toTimeString());
// console.log(todayDate.todayDate);
console.log(todayDate.getDate());

console.log(typeof todayDate);

// let myDate = new Date(2023, 0, 23)
// console.log(myDate);
// console.log(myDate.toDateString());

let myDate = new Date("10-12-2023")


//console.log(myDate.toLocaleDateString());

let MyTime = Date.now()
// console.log(MyTime);
// console.log(myDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));


myDate.toLocaleString('default',{
    weekday: "long"
})
console.log(myDate);




