let userscore= 0;
let compscore =0;

const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const genCompchoice = ()=>{
    const options=["rock", "paper", "scissors"];
    const index=Math.floor(Math.random()*3);
    /*multiplied by 3 to get range of 0-2
    Math.floor()-removes decimal point values
    Math.random generates random number values which will be like 0.834644602*/
    return options[index];
    
};

const drawGame=()=>{
    msg.innerText="It was draw. Play again!";
    msg.style.backgroundColor= "purple";
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
     const userchoice=choice.getAttribute("id");
     playgame(userchoice);
    });
});

const playgame = (userchoice) =>{
    //generate computer choice
    const compchoice = genCompchoice();

    if(userchoice === compchoice){
        drawGame();
      }else {
        let userwin = true;
        if(userchoice === "rock"){
            //paper scissors
            userwin = compchoice === "paper" ? false : true;
          }else if(userchoice === "paper"){
            //rock scissors
            userwin = compchoice === "scissors" ? false : true;
          }else if(userchoice === "scissors"){
            //rock paper
            userwin = compchoice === "rock"?false:true;
          }
        winner(userwin, userchoice,compchoice);
      }
};

const winner = (userwin, userchoice,compchoice) =>{
   if(userwin === true){
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `You won! Your ${userchoice} beats ${compchoice}.`;
    msg.style.backgroundColor = "green";
   }else{
    compscore++;
    compscorepara.innerText = compscore;
    msg.innerText = `You lost. ${compchoice} beats your ${userchoice}.`;
    msg.style.backgroundColor = "red";
   }
};