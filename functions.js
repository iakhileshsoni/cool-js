// Greeting 

function Greet(name){
    console.log("Hello : ", name)
}

Greet('Rocky')


// Arithematic Operations

function Calculation(val1, val2){
    if(val1 < val2){
        result = val2 - val1
        return result 
    }
    else{
        result = val1 + val2
        return result
    }
}

console.log(Calculation(10, 20))


// Even or Odd

function even_odd(val){
    if(val % 2 == 0){
        console.log(`${val} is Even`) 
    }
    else{
        console.log(`${val} is Odd`)
    }
}

even_odd(10)

