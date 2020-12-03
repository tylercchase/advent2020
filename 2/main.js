fs = require('fs')
const readline = require('readline')

const readInterface = readline.createInterface({
    input: fs.createReadStream('2.txt'),
    console: false
});
let valid = 0;
let oldValidation = (line) => {
    let splitStuff = line.split(" ");
    let nums = splitStuff[0].split("-");
    let count = 0;
    let character = splitStuff[1].split("")[0];
    let word = splitStuff[2].split("");
    word.forEach((char)=>{
        if(char == character){
            count++;
        }
    });
    if(count >= nums[0] && count <= nums[1]){
        valid++;
    }
};

let twovalidation = (line) => {
    let splitStuff = line.split(" ");
    let nums = splitStuff[0].split("-");
    let character = splitStuff[1].split("")[0];
    let word = splitStuff[2].split("");
    if(word[nums[0]-1] == character ^ word[nums[1]-1] == character){
        valid++;
    } 
};
readInterface.on('line', (line) => {
    if (line.includes('STOP') ){
        console.log(valid);
    }else
    {
        twovalidation(line);
    }
});