
var win = document.getElementById("myAudioWin");
var fail = document.getElementById("myAudioFail");
    let gameFinsh=false;
    let toggelVar="X";
 
    let celElements=document.querySelectorAll("td");
    celElements.forEach(cel => {cel.addEventListener("click",function(){putXorO(cel)},{once:true})});



function checkRow(el1,el2,el3,el4,el5,el6,el7,el8,el9){
    if(el1===el2&&el1===el3){
        
        return true;
    }
    else if(el4===el5&&el4===el6){
        return true;
    }
    else if(el7===el8&&el7===el9){
        return true;
    }
    else if(el1===el4&&el1===el7){
        return true;
    }
    else if(el2===el5&&el2===el8){
        return true;
    }
    else if(el3===el6&&el3===el9){
        return true;
    }
    else if(el1===el5&&el1===el9){
        return true;
    }
    else if(el3===el5&&el3===el7){
        return true;
    }
    else{
      
       return false;
    }

}
function checkWinRow(togVar){
   

   if( checkRow(squer1.innerText,squer2.innerText,squer3.innerText,squer4.innerText,squer5.innerText,squer6.innerText,squer7.innerText,squer8.innerText,squer9.innerText)){
    gameFinsh=true;
    myFunctionWin(togVar);
   }else{
    checkDraw();
   }
   ;
   
    
};

 function myFunctionWin(togVar) {
    if(gameFinsh){
        document.getElementById("gameName").innerText=togVar+" is winner ";
        playAudioWin();
        setTimeout(function(){if( confirm(togVar+" is winner ") )
        {location.reload();}; }, 500);
    
    }

  };
 
 
 function putXorO(id){
    if(toggelVar==="X"){
        id.innerText="X";
        id.style.color="red";
        checkWinRow(toggelVar);
        toggelVar="O";
                
    }
    else if(toggelVar==="O"){
        id.innerText="O";
        id.style.color="blue";
        checkWinRow(toggelVar);
        toggelVar="X";        
     }
         
};

function checkDraw(){
    let count=0;
    for (let index = 0; index < celElements.length; index++) {
       
        if (isNaN(celElements[index].innerText)) {
            
            count++;
           
        }
        
    }
    if (count===9) {
        document.getElementById("gameName").innerText="Draw!";
        pauseAudioFail();
        setTimeout(function(){if( confirm("Draw!") )
        {location.reload();}; }, 500);
    }

};

function playAudioWin() {
  win.play();
}

function pauseAudioFail() {
  fail.play();
}


    
