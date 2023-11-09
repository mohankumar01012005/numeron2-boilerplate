// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

var num1;
var num2;

var num1box = document.getElementById('number1')
var num2box = document.getElementById('number2')


// Iteration 3: Creating variables required to make the game functional

var plus = document.getElementById('plus')
var minus = document.getElementById('minus')
var mul = document.getElementById('mul')
var divide = document.getElementById('divide')
var modulus = document.getElementById('modulus')

let score = 0

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

var num3box = document.getElementById('number3')
var num3;

// Iteration 5: Creating a randomise function to make the game functional

function randomise(){
    num1 = Math.round(Math.random()*100)
    num2 = Math.round(Math.random()*100)

    let operator = Math.ceil(Math.random()*5)
    switch (operator){
        case 1: num3 = num1+num2
        break
        case 2: num3 = num1 - num2
        break
        case 3: num3 = num1 * num2
        break
        case 4: num3 = num1 / num2
        break
        case 5: num3 = num1 % num2
        break
    }
    num3 = Math.floor(num3)
    num1box.textContent = num1
    num2box.textContent = num2
    num3box.textContent = num3

}

randomise()

// Iteration 6: Making the Operators (button) functional

plus.addEventListener('click', ()=>{
    if (num1+num2 == num3){
        score += 1
        randomise()
        start_interval()
    }
    else{
        gameover()
    }
})
minus.addEventListener('click', ()=>{
    if (num1-num2 == num3){
        score += 1
        randomise()
        start_interval()
    }
    else{
        gameover()
    }
})
mul.addEventListener('click', ()=>{
    if (num1*num2 == num3){
        score += 1
        randomise()
        start_interval()
    }
    else{
        gameover()
    }
})
divide.addEventListener('click', ()=>{
    if (Math.floor(num1/num2) == num3){
        score += 1
        randomise()
        start_interval()
    }
    else{
        gameover()
    }
})
modulus.addEventListener('click', ()=>{
    if (num1%num2 == num3){
        score += 1
        randomise()
        start_interval()
    }
    else{
        gameover()
    }
})


function gameover(){
    window.location.href = `gameover.html?score=${score}`
}

// Iteration 7: Making Timer functional
let time = 10

let timer = document.getElementById('timer')
timer.textContent = time
let interval
function start_interval(){
    time = 10
    interval = setInterval(()=>{
        time--;
        timer.textContent = time
    
        if (time==0){
            clearInterval(interval)
            gameover()
        }
    
    },1000)
    
}

start_interval()