const Name = "Abhi"
let lastName = "  Hirapara"
//console.log(Name + lastName);

// let lastName = new String("Hirapara")
// console.log(lastName);

const newName = "ABHI"
const newsecondName = "Hirapara"
console.log(`My name is ${newName} and My surname is ${newsecondName}`);


const gameName = new String("super mario")
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.indexOf('p'));
// console.log(gameName.charAt(2));   

const newstring = gameName.substring(0, 4)
console.log(newstring);

const anotherstring = gameName.slice(-9, 4)
console.log(anotherstring);

const newstringOne  = "    Abhi     "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https//abhi.com/abhi%20hirapara"
console.log(url.replace('%20', '-'));
console.log(url.includes('abhi'));


const websiteurl = "abhi-hirapara-com"
console.log(websiteurl.split('-'));