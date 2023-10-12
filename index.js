function wait(n){
    var ans = new Promise(function(resolve){
        setTimeout(resolve, n*1000);
    });
    return ans;
}

function printThing(){
    console.log("hi");
}

var greet = wait(3);
greet.then(printThing);