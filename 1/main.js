fs = require('fs')
const readline = require('readline')

const readInterface = readline.createInterface({
    input: fs.createReadStream('1.txt'),
    console: false
});
let numbers = [];
function doStuff() {
    numbers.forEach((i)=>{
        numbers.forEach((j)=>{
            numbers.forEach((k)=>{
                if(i + j + k == 2020){
                    console.log(i * j * k)
                    return (i * j * k);
                    
                }
            });
        });
    });
};
readInterface.on('line', (line) => {
    if (line.includes('STOP') ){
        console.log(doStuff());
    }else{
        numbers.push(parseInt(line));
    }

});