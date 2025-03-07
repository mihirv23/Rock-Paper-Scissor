let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector('#msg');

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

let playGame=(userChoice)=>{
    //compare user choice with comp choice uske liye
    console.log("User choice: ", userChoice);
    let compChoice=genCompChoice();
    console.log('Computer choice:',compChoice);

    if(userChoice===compChoice)
        drawGame();
    else{
        let userWin=true;
        if(userChoice==='rock'){
            userWin=compChoice==='paper'?false:true;
        } 
        else if(userChoice==='paper'){
            userWin=compChoice==='scissors'?false:true;
        }
        else{
            userWin=compChoice==='rock'?false:true;
        }
        showWinner(userWin);
            
        
    }
}

const genCompChoice=()=>{
    const options=["rock","scissors","paper"]
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}
const drawGame=()=>{
    console.log('Game is a draw');
    msg.innerText="Game was draw, play again";
    msg.style.backgroundColor='chocolate';
    
}

choices.forEach((choice)=>{
    
    choice.addEventListener('click',()=>{
        
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log('U win');
        msg.innerText="You Win"
        msg.style.backgroundColor="green";

    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log('U lose');
        msg.innerText="U lose";  
        msg.style.backgroundColor="red";
    }
}




