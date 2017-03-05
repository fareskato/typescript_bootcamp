class Van{
    @processOne()
    @processTwo()
    doSomething(){}
}

// Create decorators
function processOne(){
    console.log("process one has run");
    return function(target , propertyKey : string, descriptor : PropertyDescriptor){
        console.log("process one has called");
    }
}

function processTwo(){
    console.log("process two has run");
    return function(target , propertyKey : string, descriptor : PropertyDescriptor){
        console.log("process two has called");
    }
}
function processThree(){
    console.log("process three has run");
    return function(target , propertyKey : string, descriptor : PropertyDescriptor){
        console.log("process three has called");
    }
}

// process one has run
// process two has run
// process three has run
// process three has called
// process two has called
// process one has called