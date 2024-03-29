function reverse(names){
const array = names;
return (array.sort());
return (array.reverse());

}
console.log(reverse(["maina","aisha","babu"]));
console.log(reverse(["maina","aisha","babu"]));


function numbers(values){
    const numbers=values;
    const b = values%2
    if(b==0)
    return true;
else{
    return false;
}
}
console.log(numbers(1));

function letters(){

}

function employees(workers){
    const d = workers;
    const newArray = [...new Set(d)];
    return (newArray.sort());

}
console.log(["40859435","maina",20000]);

function multiply(numbers){
    const multiplication = numbers;
    multiplication.forEach(element => {
        console.log(element*2);
        
        
    });
        
    


}
console.log(multiply([1,2,3,4,5]));


function myNumbers(numbers1){
    const myValues = numbers1;
    myValues.slice(0,4).forEach(y =>{
        console.log(y*4);
        
    })
    myValues.slice(5).forEach(z =>{
        console.log(z+5);
    });


}
console.log(myNumbers([10,11,12,13,14,15,16]));



