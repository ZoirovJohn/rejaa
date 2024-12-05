console.log("TRAIN.js started working");
// F-TASK

function findDoublers(word) {
    const arr = word.split("").sort();
    for (let i=1; i < arr.length; i++) {
        if ((arr[i] === arr[i-1]) == true) { console.log(true); break; }
    }
}

findDoublers("hello");
// -------------------------------------------------------------------------------------------

/*// E-TASK
function getReverse(word) {
    const reversed_word = word.split("").reverse().join("");
    console.log(reversed_word);
    console.log(word);
}

getReverse("hello");
*/
/*// D-TASK
function checkContent(word1, word2) {
    const sorted_word1 = word1.split("").sort().join("");
    const sorted_word2 = word2.split("").sort().join("");
    console.log(sorted_word1 === sorted_word2);
}

checkContent("mitgroup", "gmtiprou");
*/
/*// C-Task
const moment = require("moment");
const time = moment().format("hh:mm");
class Shop {
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }

    qoldiq() {
        console.log(`hozir ${time}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
    }

    sotish(product_type, product_num) {
        if (product_type === "non") {
            this.non -= product_num;
        } else if (product_type === "lagmon") {
            this.lagmon -= product_num;
        } else if (product_type === "cola") {
            this.cola -= product_num;
        } 
    }

    qabul(product_type, product_num) {
        if (product_type === "non") {
            this.non += product_num;
        } else if (product_type === "lagmon") {
            this.lagmon += product_num;
        } else if (product_type === "cola") {
            this.cola += product_num;
        } 
    }
}

const shop = new Shop(4, 5, 2);
shop.qoldiq()
shop.sotish('non', 3)
shop.qabul('cola', 4)
shop.qoldiq()
*/
/*// B-Task

function countDigits(word) {
    let result = 0;
    for (const i of word) {
        result += !isNaN(i) ? 1 : 0;
    }
    return result;
}

console.log(countDigits("ad2a54y79wet0sfgb9"));
*/
/*// A-Task

function countLetter(letter, word) {
    let result = 0;
    for (const l of word) {
        result += l === letter ? 1 : 0;
    }
    return result;
}


console.log(countLetter("e", "engineer"));
console.log("TRAIN.js ended working");
console.log("--------------------------------------------");
*/