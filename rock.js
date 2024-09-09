
//generates a computer choice //

function getComputerChoice() 
{
    const choices = ["rock", "paper", "scissors"];
    const picker = Math.floor(Math.random() * choices.length);
    return choices[picker];
    
  }

  let random = getComputerChoice()



// lets the user inputs his choice //

 function gethumanchoice()
{
  const legalmoves = ["rock" , "paper" , "scissors"]

  let userinput = prompt("Your move").toLowerCase();

 if (legalmoves.includes(userinput))
    {
        console.log(random);
    }
    else if (userinput != legalmoves)
    {
        console.log("this is not a legal move"); 
        return;
    
    }


}

let userselection = gethumanchoice();

humanscore   =  0 ;
computerscore = 0 ;

// logic of the game //

function playround( ComputerChoice,userchoice)

{

    ////// cases where the user wins /////


        if ( userselection === "rock" && random === "scissors"   || userselection === "paper" && random === "rock"   || userselection === "scissors" && random ===  "paper" )
        {

        console.log("you won");
        humanscore ++ ;

        }  

    ///// cases where the user looses //////


        else if ( userselection === "rock" && random === "paper"  || userselection === "paper" && random ==="scissors" || userselection ==="scissors" && random==="rock" )
        {
            console.log("you lost");
            computerscore ++;
        }
        

        else { console.log("its a tie")}


}

playround(random,userselection);



  

