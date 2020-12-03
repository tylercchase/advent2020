fs = require('fs')
const readline = require('readline')

const readInterface = readline.createInterface({
    input: fs.createReadStream('3.txt'),
    console: false
});
let curPos = [0,0];
let data = [];
let countX = 0;
let countY = 0;
let oneTraverse = (xScale,yScale) => {
    let trees = 0;
    for(let x =0; x*yScale < countY; x++){
        if(data[x*yScale][(x*xScale)%countX]){
            trees++;
        }
    }
    return trees;
};
let twoTraverse = () => {
    let stuff =   [
    oneTraverse(1,1),
    oneTraverse(3,1),
    oneTraverse(5,1),
    oneTraverse(7,1),
    oneTraverse(1,2),
    ];
    return stuff.reduce((accum,val)=> accum*val );
};
readInterface.on('line', (line) => {
    if (line.includes('STOP') ){
        // console.log(trees);
        oneTraverse(3,1);
        console.log(twoTraverse());
    }else
    {
        if(countX ==0){
            countX = line.split("").length;
        }
        countY++;
        data.push(line.split("").map((x) => x = x=='#'));
    }
});