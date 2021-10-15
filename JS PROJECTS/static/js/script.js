// alert("YO WTFF")


// CHALLENGE I: Your age in Years! XD


function ageInYears () {
   var birthYear = prompt("Kaun se saal me paida hua tha vro???");
   if (isNaN(birthYear)) {
       var h1 = document.createElement("h1");
       var textAnswer = document.createTextNode("Please Enter a Valid Year OF BIRTH!")
       h1.setAttribute("id", "years");
       h1.appendChild(textAnswer);
       document.getElementById("flex-box-result").appendChild(h1);    
   } else {
    var d = new Date();
    var years = d.getFullYear() - birthYear;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You Are " + years + " Years Old.")
    h1.setAttribute("id", "years");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);    
}

}


function reset () {
    document.getElementById("years").remove();
}


// CHALLENGE II: CAT GENERATOR! LOL

function catGenerator () {
    var catImage = document.createElement("img");
    var div = document.getElementById("flex-box-cat");
    // catImage.src = "https://api.thecatapi.com/v1/images/search&size=small&type=gif"
    catImage.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(catImage);
}



// CHALLENGE III: ROCK,PAPERS and SCISSORS!
var flexBoxRPSDiv = document.getElementById("flex-box-rps-div").innerHTML

function rpsGame (yourChoice) {
    console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToInt());
    console.log('Computer Choice:',botChoice);

    results = decideWinner(humanChoice,botChoice); //[1,0] aisa list 
    console.log(results)

    message = finalMessage(results);
    console.log(message)

    rpsFrontEnd(yourChoice.id,botChoice,message);
}


function randToInt () {
    return Math.floor(Math.random()*3);
}


function numberToChoice (number) {
    return ["rock","paper","scissors"][number];
}


function decideWinner (yourChoice,computerChoice) {
    var rpsdata = {
        "rock":{"scissors":1,"rock":0.5,"paper":0},
        "paper":{"scissors":0,"rock":1,"paper":0.5},
        "scissors":{"scissors":0.5,"rock":0,"paper":1}
    };
    var yourScore = rpsdata[yourChoice][computerChoice];
    var computerScore = rpsdata[computerChoice][yourChoice];
    return [yourScore,computerScore];
}

function finalMessage ([yourScore,computerScore]) {
    if (yourScore===0) {
        return {"message":"You Lost!","color":"red"};
    } else if (yourScore===0.5) {
        return {"message":"It's a Draw!","color":"grey"};
    } else {
        return {"message":"You Won!","color":"green"};
    }

}



function rpsFrontEnd (humanImageChoice,botImageChoice,finalMessage) {
    imagesData = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    }

    //removing all the things from the div
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    humanDiv.innerHTML = `<h5><strong>Your Choice</strong></h5><img src="${imagesData[humanImageChoice]}" height = 150 width = 150 style="box-shadow: 0px 18px 50px rgba(37,58,233,1)">`
    messageDiv.innerHTML = ` <style>h1{padding:75px;}</style> <h1 style = "color:${finalMessage['color']}"><strong>${finalMessage["message"]}</strong></h1>`
    botDiv.innerHTML = `<h5><strong>Bot's Choice</strong></h5><img src="${imagesData[botImageChoice]}" height = 150 width = 150 style = 'box-shadow: 0px 18px 50px rgba(233,58,25,1)'>`
    

    humanDiv.setAttribute("id", "humanDiv")
    botDiv.setAttribute("id", "botDiv")
    messageDiv.setAttribute("id", "messageDiv")
    
    document.getElementById("flex-box-rps-div").appendChild(humanDiv)
    document.getElementById("flex-box-rps-div").appendChild(messageDiv)
    document.getElementById("flex-box-rps-div").appendChild(botDiv)


}


function playAgain () {
    document.getElementById("humanDiv").remove()
    document.getElementById("botDiv").remove()
    document.getElementById("messageDiv").remove()

    document.getElementById("flex-box-rps-div").innerHTML = flexBoxRPSDiv;

}








// Challenge IV: COLORING BUTTONS!

let content = document.getElementsByClassName("container-4")[0];
let containerButtons = content.getElementsByTagName("button");

 // buttonsBackup
var backupButtons = []

for (let i=0;i<containerButtons.length;i++) {
    backupButtons[i] = containerButtons[i].classList[1]
    }

// var backupButtons = ["btn-danger","btn-primary","btn-warning","btn-success"];


function changeColors (mycolor) {
    console.log(mycolor.value)
     if (mycolor.value === "random") {
         randomButtons()
     }
     else if (mycolor.value === "red") {
         redButtons()
     }
     else if (mycolor.value === "blue") {
         blueButtons()
     }
     else if (mycolor.value === "yellow") {
         yellowButtons()
     }
     else if (mycolor.value === "green") {
         greenButtons()
     }
     else if (mycolor.value === "reset") {
         resetButtons()
     } 
} 


function redButtons () {
    for(let i = 0, length1 = containerButtons.length; i < length1; i++){
        containerButtons[i].classList.remove(containerButtons[i].classList[1]);
        containerButtons[i].classList.add("btn-danger")
    }
}


function yellowButtons () {
    for(let i = 0, length1 = containerButtons.length; i < length1; i++){
        containerButtons[i].classList.remove(containerButtons[i].classList[1]);
        containerButtons[i].classList.add("btn-warning")
    }
}


function blueButtons () {
    for(let i = 0, length1 = containerButtons.length; i < length1; i++){
        containerButtons[i].classList.remove(containerButtons[i].classList[1]);
        containerButtons[i].classList.add("btn-primary")
    }
}


function greenButtons () {
    for(let i = 0, length1 = containerButtons.length; i < length1; i++){
        containerButtons[i].classList.remove(containerButtons[i].classList[1]);
        containerButtons[i].classList.add("btn-success")
    }
}

function resetButtons () {
    for(let i = 0, length1 = containerButtons.length; i < length1; i++){
        containerButtons[i].classList.remove(containerButtons[i].classList[1]);
        containerButtons[i].classList.add(backupButtons[i]);
    }
}

function randomButtons () {
    let randomButtons = ["btn-danger","btn-primary","btn-warning","btn-success"];
    
    
    for(let i = 0, length1 = containerButtons.length; i < length1; i++){
        let number = Math.floor(Math.random()*4)

        containerButtons[i].classList.remove(containerButtons[i].classList[1]);
        containerButtons[i].classList.add(randomButtons[number]);
    }          
}




// Challenge V: THE BLACKJACK GAME!

let bjGame = {
    "you":{"scoreSpan":"#bj-your-score-span","div":"#your-box","score":0},
    "dealer":{"scoreSpan":"#bj-dealer-score-span","div":"#dealer-box","score":0},
    "cards":["2","3","4","5","6","7","8","9","10","K","J","Q","A"],
    "cardsObject":{"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10,"K":10,"J":10,"Q":10,"A":[1,11]},
    "wins":0,
    "draws":0,
    "losses":0,
    "inStand":false,
    "turnsOver":false,
    "gameOver":false,
};

const YOU = bjGame["you"];
const DEALER = bjGame["dealer"];

const hitBtnSound = new Audio("static/sounds/swish.m4a");
const winSound = new Audio("static/sounds/cash.mp3");
const lostSound = new Audio("static/sounds/aww.mp3");
const winSound2 = new Audio("static/sounds/applause4.mp3");
const huhSound = new Audio("static/sounds/huh.mp3");


document.querySelector("#bj-hit-btn").addEventListener("click",blackjackHit);
document.querySelector("#bj-stand-btn").addEventListener("click",logicOfDealer);
document.querySelector("#bj-deal-btn").addEventListener("click",blackjackDeal);


function blackjackHit () {
    if (bjGame["inStand"]===false) {  
        let card = randomCard();
        showTheCard(card,YOU);
        updatingScore(card,YOU);
        console.log(YOU["score"]);
        displayScore(YOU);
    }
}


function randomCard () {
    let randomIndex = Math.floor(Math.random()*13);
    return bjGame["cards"][randomIndex];
     
}

function showTheCard (card,activePlayer) {
  if (activePlayer["score"]<=21) {
    let cardImg = document.createElement("img");
    cardImg.src = `static/images/${card}.png`
    document.querySelector(activePlayer["div"]).appendChild(cardImg);
    // console.log(YOU['div'])
    hitBtnSound.play();
  }
    
}

function blackjackDeal () {
    if (bjGame["turnsOver"]===true) {
        bjGame["inStand"]=false;
        let yourImages = document.querySelector("#your-box").querySelectorAll("img");
        let dealerImages = document.querySelector("#dealer-box").querySelectorAll("img");

        for (let i=0; i< yourImages.length;i++) {
            yourImages[i].remove()
        }


        for (let i=0; i< dealerImages.length;i++) {
            dealerImages[i].remove()
        }

        YOU["score"]=0;
        DEALER["score"]=0;

        document.querySelector("#bj-your-score-span").textContent = 0;
        document.querySelector("#bj-dealer-score-span").textContent = 0;


        document.querySelector("#bj-your-score-span").style.color = 'white';
        document.querySelector("#bj-dealer-score-span").style.color = "white"; 

        document.querySelector("#blackjack-finalresult-span").textContent = "Let's Play!";
        document.querySelector("#blackjack-finalresult-span").style.color = "black";

        bjGame["turnsOver"]=false;
        bjGame["gameOver"] = false;
    }
}

function updatingScore (card,activePlayer) {
    if (card==="A") {
        if (activePlayer["score"]+ bjGame['cardsObject'][card][1] <= 21) {
            activePlayer["score"] += bjGame['cardsObject'][card][1];
        
        } else {
            activePlayer["score"] += bjGame['cardsObject'][card][0];   
        }
    } else {
        activePlayer["score"] += bjGame['cardsObject'][card]; 
 }   
}
function displayScore (activePlayer) {
  document.querySelector(activePlayer["scoreSpan"]).textContent = activePlayer["score"];  
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
    


  }
}

function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function logicOfDealer () {
    bjGame["inStand"] =true;
    while (DEALER["score"]<16 && bjGame["inStand"]===true) {
        
        if (bjGame["gameOver"]===false) {
            let card = randomCard();
            showTheCard(card,DEALER);
            updatingScore(card,DEALER);
            displayScore(DEALER);
            await sleep(1000);
        }    
    }    
        
        bjGame["turnsOver"] = true;
        
        if (bjGame["gameOver"]===false) {
            
            let winner = getWinner();
            showResult(winner);
            
        }    
    bjGame["gameOver"] = true;
    };


// figuring out who is the winner

function getWinner () {
    let winner;
    // if (bjGame["gameOver"]===false) {
        

        if (YOU['score'] <=21) {
            if (YOU["score"]>DEALER["score"] || (DEALER["score"]>21)) {   
                bjGame["wins"]++;
                winner = YOU;
            
            }else if (YOU["score"]<DEALER["score"]) {
                bjGame["losses"]++;
                winner = DEALER;
            
            }else if (YOU["score"]===DEALER["score"]) {
                bjGame["draws"]++;
                
            }

        // when only you bust 
        }else if (YOU["score"]>21 && DEALER["score"]<=21) {
            bjGame["losses"]++;
            winner = DEALER;
        
        // when both busts
        }else if (YOU["score"],DEALER["score"]>21) {
            bjGame["draws"]++;
        }
        console.log('winner is',winner)
        return winner;
    // }    
}


function showResult (winner) {
    let message,messageColor;
    // if (bjGame["gameOver"]===false) {
        

        if (bjGame["turnsOver"]===true) {

            if (winner===YOU) {
                 message="YOU WON!";
                 messageColor = "green";
                 // winSound.play();
                 winSound2.play();
             
            }else if (winner===DEALER) {
                 message="YOU LOST!";
                 messageColor = "red";
                 lostSound.play();
                
                
            }else {
                message = "It's A DRAW!";
                messageColor = "brown";
                huhSound.play();
            } 

            document.querySelector("#blackjack-finalresult-span").textContent = message;
            document.querySelector("#blackjack-finalresult-span").style.color = messageColor;

            document.querySelector("#wins-fb").textContent = bjGame["wins"];
            document.querySelector("#draws-fb").textContent = bjGame["draws"];
            document.querySelector("#losses-fb").textContent = bjGame["losses"];
        
        }    
    // }
}















