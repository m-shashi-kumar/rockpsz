let userChoice = document.querySelectorAll(".choice");
let player=document.querySelector("#player");
let robot=document.querySelector("#robot");
let h2=document.querySelector("h2");


userChoice.forEach((choice)=>{
    choice.addEventListener("click",()=>{console.log(choice)
    let x = choice.getAttribute("id");
    y = Math.floor(Math.random()*3);
    z=["rock","paper","scissors"];
    x = z.indexOf(x);
    console.log(x,y);
    if (x-y==1 || x-y==-2){
        player.innerText=parseInt(player.innerText)+1;
        h2.innerText=`You won with ${z[x]} on ${z[y]}`;
        h2.style.backgroundColor="green";
    }else if(x-y==0){
        h2.innerText=`Draw `;
        h2.style.backgroundColor="antiquewhite";
    }else{
        robot.innerText=parseInt(robot.innerText)+1;
        h2.innerText=`You lost with ${z[x]} on ${z[y]}`;
        h2.style.backgroundColor="red";
    }
});    
     
})
