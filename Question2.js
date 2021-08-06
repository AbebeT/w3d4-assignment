const readline = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout,
});

let sum = 0;
function getNumber(){
    readline.question("Enter a number? ", num => {           
        if(num.includes("stop")){
           console.log("The sum of the numbers is:", sum);
           readline.close();
        }
        else{sum+=parseInt(num);
        getNumber();
    }        
    });
}
getNumber();