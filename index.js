// let saveEl = document.getElementById("count-sv")
// let count = 0
// function save(){
//     count += 1
//     saveEl.innerText = count
// }


// let welcomeEl = document.getElementById("welcome-el")
// let name = "Marat"
// let greeting = "Welcome back "
// welcomeEl.innerText = greeting + name

// welcomeEl.innerText = welcomeEl.innerText + " 👋"


// let countEl = document.getElementById('count-el')
// function increment(){
//     count += 1
//     countEl.innerText = count
// }

// let saveEl = document.getElementById("save-el")
// let counEl = document.getElementById("count-el")
// let count = 0 

// function increment(){
//     count = count + 1
//     counEl.textContent = count
    
// }

// function save() {
//     let countStr = count + " – " 
//     saveEl.textContent += countStr
//     count = 0
//     counEl.textContent = count
// }


// function renderWaterfall(rootNode, columnCount, elementGap){
//     const rootNode = 
// }
// rootNode: элемент в котором находятся объявления (HTMLDivElement) 
// columnCount: количество колонок (number) 
// elementGap: расстояние между колонками, а также элементами по-вертикали (number)
// function change() {
//     // document.getElementsByTagName("H2") returns a NodeList of the <h2>
//     // elements in the document, and the first is number 0:

//     const header = document.getElementsByTagName("H2").item(0);
//     // the firstChild of the header is a Text node:
//     header.firstChild.data = "A dynamic document";
//     // now the header is "A dynamic document".

//     const para = document.getElementsByTagName("P").item(0);
//     para.firstChild.data = "This is the first paragraph.";

//     // create a new Text node for the second paragraph
//     const newText = document.createTextNode("This is the second paragraph.");
//     // create a new Element to be the second paragraph
//     const newElement = document.createElement("P");
//     // put the text in the paragraph
//     newElement.appendChild(newText);
//     // and put the paragraph on the end of the document by appending it to
//     // the BODY (which is the parent of para)
//     para.parentNode.appendChild(newElement);
//   }


// let myPoints = 3

// function add3Points(){
//     myPoints += 3 
// }

// function remove1Point(){
//     myPoints -= 1

// }

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoints)


// let errorEl = document.getElementById("error")

// function errorFunc(){
//     let wrong = "Something went wrong, please try again"
//     errorEl.textContent = wrong
//     console.log(errorEl)
// }

// let num1 = 8
// let num2 = 2
// let addR = 0

// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2


// let sumEl = document.getElementById("sum-el")

// function add(){
//     let result = num1 + num2
//     sumEl.textContent ="Sum: " +  result
// }

// function subtract(){
//     let result = num1 - num2
//     sumEl.textContent ="Sum: " +  result
// }

// function multiply(){
//     let result = num1 *  num2
//     sumEl.textContent ="Sum: " +  result
// }

// function divide(){
//     let result = num1 / num2
//     sumEl.textContent ="Sum: " +  result
// }
// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime(){
//     if(player1Time > player2Time){
//         console.log(player1Time)
//         return player1Time
//     } else if( player1Time < player2Time){
//         console.log(player2Time)
//         return player2Time
//     }
// }
// let randomNumber = Math.random() * 6 
// console.log(randomNumber)

// function rollDice (){
//     let randomNUmber = Math.floor(Math.random() * 6) + 1 
//     return randomNUmber
// }
// console.log( rollDice() )
// let fastestRace = getFastestRaceTime()
// console.log(fastestRace)
// 
// function getTotalRaceTime(){
//     return player1Time + player2Time
// }
let floor = Math.floor( Math.random()*4) + 1
console.log(floor)
// let totalTime = getTotalRaceTime()
// console.log(totalTime)
// let age = 100
// if (age < 100){
//     console.log("Not elegible")
// } else if (age === "100"){
//     console.log("Here is your birthday card from the King!")
// }else{
//     console.log("Not elegible, you have aleady gotten one.")
// }

let cards = []
let sum = 0 
let hasBlackJack = false 
let isAlive = false
let message = " "
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let messageEl = document.getElementById("message-el")

let player = {
    name: "Mar",
    chips: 122
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips 



function getRandomCard(){ 
    let randomNumber =  Math.floor( Math.random()*13 ) + 1    
    if(randomNumber === 1 ){
        return 11
    }else if(randomNumber > 10){
        return 10
    }else{
        return randomNumber
    }
    // return 7
}


function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum  = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " " 
    }
    sumEl.textContent = "Sum: " +  sum
    if (sum <= 20){
        message = "Do you want to draw a new card? "
    }else if (sum === 21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    }else{
        message = "You're out of the game! "
        isAlive = false
    }   
    messageEl.textContent = message
}

function newCard(){
    // console.log("Drawing a new card from the deck!")
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        
        // cardsEl.textContent = "Cards: " + firstCard + " " + secondCard + " " + thirdCard 
        console.log(cards)
        renderGame()
    }
    
}   

// let experience = [
//     "CEO at Scrimba", 
//     "Fronted Developer at Xeneta",
//     "People counter for Norstat"
// ]

// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[0])

// let per = [
//     28,
//     "Marat", 
//     false
// ]

// let messages = [
//     "Hey how's it going?",
//     "I'm greate, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"

// messages.push(newMessage)
// console.log(messages)
// messages.pop()
// console.log(messages)
// let sentence = ["Hello","my","name","is","Per"]
// greetingEl = document.getElementById("greeting-el")
//    START           FINISH      STEP SIZE  
// for (let i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i] + " "
// }

let hasSolveChallange = false
let hasHintsLeft = false
if(hasSolveChallange === false && hasHintsLeft === false){
    showSolution()
}

function showSolution() { 
    console.log("Generating certificate.....")
}

let likesDocumentaries = true
let likesStartups = false 
if( likesDocumentaries || likesStartups === true) {
    recomendMovie()
}

function recomendMovie(){
    console.log("Hey, check out this new film, we think you will like")
}





















