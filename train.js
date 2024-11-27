console.log("TRAIN.js started working");
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
// C-Task
const moment = require("moment");
const time = moment().format("hh:mm");
console.log(time);
class Shop {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    qoldiq() {
        console.log(`hozir ${self.time}da ${this.a}ta non, ${this.b}ta lagmon va ${this.c}ta cola mavjud!`);
    }

    sotish() {
        console.log(`hozir ${self.time}da ${this.a}ta non, ${this.b}ta lagmon va ${this.c}ta cola mavjud!`);
    }

    qabul() {
        console.log(`hozir ${self.time}da ${this.a}ta non, ${this.b}ta lagmon va ${this.c}ta cola mavjud!`);
    }


}

// -------------------------------------------------------------------------------------------
/*
console.log('Jack Ma maslahatlari');
const list = [
    "yaxshi talaba bo'ling", // 0–20
    "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20–30
    "o'zingizga ishlashingizni boshlang", // 30–40
    "siz kuchli bo'lgan narsalarni qiling", // 40–50
    "yoshlarga investitsiya qiling", // 50–60
    "endi dam oling, foydasi yo'q endi", // 60
];
*/
/*//callback
function maslahatBering(a, callback) {
    if(typeof a !== "number") callback("insert a number", null); //callback(errror, data)
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30) callback(null, list[1]);
    else if(a > 30 && a <= 40) callback(null, list[2]);
    else if(a > 40 && a <= 50) callback(null, list[3]);
    else if(a > 50 && a <= 60) callback(null, list[4]);
    else {
        // callback(null, list[5]);
        setInterval(function () {
            callback(null, list[5]);
        }, 5000)
    }
}

console.log('passed here 0');
maslahatBering(65, (err, data) => {
    if (err) console.log("ERROR:", err);
    else console.log("Javob:", data);
})
console.log('passed here 1');
*/

/*// *****Asychronous functions ******

async function maslahatBering(a) {
    if (typeof a !== "number") throw new Error("insert a number"); //throw new Error
    else if(a <= 20) return list[0];
    else if(a > 20 && a <= 30) return list[1];
    else if(a > 30 && a <= 40) return list[2];
    else if(a > 40 && a <= 50) return list[3];
    else if(a > 50 && a <= 60) return list[4];
    else {
        return new Promise((resolve, reject) => { //resole(return), reject(throw new Error)
            // setTimeout(() => {
            //     resolve(list[5]);
            // }, 5000);
            setInterval(() => {
                resolve(list[5]);
            }, 1000);
        })
        
    }
}
*/

/*//then/catch
console.log('passed here 0');
maslahatBering(35)
    .then((data) => {
        console.log("Javob:", data);
})
    .catch((err) => {
        console.log("ERROR:", err);
})
console.log('passed here 1');
*/

/*// async/await
async function run() {
    let javob = await maslahatBering(20);
    console.log(javob);
    javob = await maslahatBering(71);
    console.log(javob);
    javob = await maslahatBering(42);
    console.log(javob);
}
run();
*/