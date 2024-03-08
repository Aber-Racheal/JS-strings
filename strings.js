// // 1.Extract the last four characters from the string below;"extravaganza"
let word="extravaganza";
let lastFourCharacters=word.substring(8,12);
console.log(lastFourCharacters)
// // Output anza

// // 2.Insert the following string at the fourth index of the below variable: "eat"const food = "The quick fox jumped over the lazy dog."
let food= "The quick fox jumped over the lazy dog."
food=food.slice(0,4)+"eat"+food.slice(4);
console.log(food)

// // 3. Count how many times the following string appears in the string variable: 1."the "2."brown"const story="The quick brown fox jumped over the lazy dog"
const story="The quick brown fox jumped over the lazy dog"
console.log(story.split("the").length-1);
console.log(story.split("brown").length-1);

// // 4.Using JavaScript, find the following words from the following strings:1. "are"const string1 = "The pupils are reading in the library";2. "sitting"
const stringa = "The child was sitting on the table before it fell"
const stringb = "The pupils are reading in the library";
const position = stringb.search("are");
console.log(position);

let stringc = "The child was sitting on the table before it fell";
let positionc = stringc.search("sitting");
console.log(positionc);


// 5.Convert the following strings into the specified format: 1.UpperCase: "wonderful" 2. LowerCase:"amazing","UndERneath"3. Title case "A wonderful world"
let text="wonderful";
let answer1=text.toUpperCase();
console.log(answer1)

let text1="amazing";
let answer2=text1.toLowerCase();
console.log(answer2);

let text3="UndERneath";
let answer3=text3.toLowerCase();
console.log(answer3);

let sen = "A wonderful world";
let titleCase = " ";
sen.split(" ").forEach(word => {
let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCase += capitalizedWord + " ";});
    console.log(titleCase);

// // End of Questions




