var colors=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

        

var btn=document.getElementById('btn');

btn.addEventListener('click',function(){
    let hex='#'; //declare this hex variable only inside  function so every time it gets reset 
    for(let i=0;i<6;i++){
        
    const randomNumber=GetRandomNumber();
        hex+= colors[randomNumber];
    }
    document.body.style.backgroundColor=hex;
    document.getElementById('bgcolor').innerHTML=hex;
    document.getElementById('bgcolor').style.color=hex;
})


function GetRandomNumber(){
    return Math.floor(Math.random()*16);
}


btn.addEventListener('click',function(){
    let hex='#';
    for(let i=0;i<6;i++){
        
    const randomNumber=GetRandomNumber();
        hex+= colors[randomNumber];
    }
    document.getElementById('colodrname').style.color=hex;            
})