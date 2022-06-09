
const prompt = require('prompt-sync')();
const addWarriors = () => {
    let x = prompt("Input number of warriors: ");
    let arr = [];
    for(let i = 0; i<x; i++){
        let s = prompt("Enter the name: ");
        arr.push(s);
    }
    return arr;
}

module.exports = {addWarriors};