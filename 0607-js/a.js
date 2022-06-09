const f = require('./func');
const prompt = require('prompt-sync')();


let Dalidas_empire = {
    country : prompt("Enter the country: "),
    amountOfArmy : prompt("Enter the number of Army: "),
    commandor: prompt("Enter the name of Commandor: "),
    isReady: true,
    warriors: [],
    addWarrior(...names) {
        for(let i = 0; i< names.length; i++){
            this.warriors.push(names[i]);
        }
    },
    print() {
        console.log(
            `\nDalidas_empire in ${this.country} has ${this.amountOfArmy} army. \nCommandor is ${this.commandor} and warriors are ${this.warriors}\n`
        );
    }
}

let arr = f.addWarriors();
Dalidas_empire.addWarrior(arr);
Dalidas_empire.print();

while(1){
    console.log("----------\n1 - create/update new attribute, \n2 - delete attribute, \n3 - divide an army by types, \n4 - print required attribute, \n0 - end session\n");
    let s = prompt("enter number: ");
    let parsed = parseInt(s);

    if(parsed === 0){
        break;
    }else if(parsed === 1){
        console.log("Available for primitive data types, wait for update soon (just kidding, don't wait)");
        let atr = prompt("enter attribute: ");
        let val = prompt("enter value: ");
        Dalidas_empire[atr] = val;

        // console.log(atr, Dalidas_empire[atr]);
        console.log(`${atr}: ${val}`);
    }else if(parsed === 2){
        let atr = prompt("enter attribute: ");
        delete Dalidas_empire[atr];

        console.log("Deleted");
    }else if(parsed === 3){
        let armyType = prompt("Enter type of army: ");
        let num = parseInt(prompt("Enter amount: "));
        if(num <= Dalidas_empire.amountOfArmy){
            Dalidas_empire[armyType] = num;
            Dalidas_empire.amountOfArmy = Dalidas_empire.amountOfArmy - num;
            console.log(`${armyType}: ${num}`);
            console.log(`How many people available: ${Dalidas_empire.amountOfArmy}`);
        }else{
            console.log("The Amount of Army is less than entered number!");
        }
    }else if(parsed == 4){
        let atr = prompt("Enter attribute: ");
        if(Dalidas_empire.hasOwnProperty(atr)){
            console.log(`${atr}: ${Dalidas_empire[atr]}`);
        }else{
            console.log("Net takogo");
        }
    }
}

