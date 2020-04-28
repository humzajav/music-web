var audio = document.querySelectorAll('audio');
var bgColor = document.getElementsByClassName('content');
document.body.addEventListener('keydown',humza);
function humza(e){
    var x = e.keyCode;
    var y = 0;
    console.log(x);
    if(x==65)
    {
        audio[0].play();
        audio[0].currentTime=0
        bgColor[0].style.boxShadow = "10px 5px 5px #010b13";
        y=0;

    }
    else if(x==83){
        audio[1].play();
        audio[1].currentTime=0
        bgColor[1].style.boxShadow = "10px 5px 5px #010b13";
        y=1;
    }
    else if(x==68){
        audio[2].play();
        audio[2].currentTime=0
        bgColor[2].style.boxShadow = "10px 5px 5px #010b13";
        y=2;
    }
    else if(x==70){
        audio[3].play();
        audio[3].currentTime=0
        bgColor[3].style.boxShadow = "10px 5px 5px #010b13";
        y=3;
    }
    else if(x==71){
        audio[4].play();
        audio[4].currentTime=0
        bgColor[4].style.boxShadow = "10px 5px 5px #010b13";
        y=4;
    }
    else if(x==72){
        audio[5].play();
        audio[5].currentTime=0
        bgColor[5].style.boxShadow = "10px 5px 5px #010b13";
        y=5;
    }
    else if(x==74){
        audio[6].play();
        audio[6].currentTime=0
        bgColor[6].style.boxShadow = "10px 5px 5px #010b13";
        y=6;
    }
    else if(x==75){
        audio[7].play();
        audio[7].currentTime=0
        bgColor[7].style.boxShadow = "10px 5px 5px #010b13";
        y=7;
    }
    else if(x==76){
        audio[8].play();
        audio[8].currentTime=0
        bgColor[8].style.boxShadow = "10px 5px 5px #010b13";
        y=8;
    }
    else{
        console.log("hehe");
    }
    document.body.addEventListener('keyup',yup);
    function yup(){
        for(var a=y; a<9; a++)
        {
            bgColor[a].style.boxShadow = "";   
        }
    }
}