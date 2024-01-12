function addtwonumber(number1, number2){
    return number1 + number2

        //console.log(number1 + number2);

        //let total = number1 + number2;
       // console.log(total)
        //return total
}
let total=addtwonumber(3, 4);
// console.log(total)



function user(username){
    if(username === undefined){
        console.log("Plaese Enter username")
        return
    }
    return `${username} is logged in`
}
// console.log(user("ABHI"))
console.log(user())
