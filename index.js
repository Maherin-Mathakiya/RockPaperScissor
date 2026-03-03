let UserScore=0;
let ComScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const gemCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame=()=>{
    console.log("Game was Draw");
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="black";
};

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
    console.log("You Win!!");
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    }else{
        console.log("You Lose");
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playgame=(userChoice)=>{
    console.log("user choice=",userChoice);
    //generate computer choice
    const compChoice=gemCompChoice();
    console.log("comp choice=",compChoice);
    
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice ==="rock"){
            //paper , scissor  
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            //rock , scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);

    }
};

choices.forEach((choice)=>{
    /*console.log(choice);*/
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playgame(userChoice);
    });
});