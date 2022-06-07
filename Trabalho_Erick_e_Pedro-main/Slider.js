let count = 1;
document.getElementById("slide1").checked = true;

setInterval( function(){
    nextImage();
},2500)

function nextImage(){
    count++;
    if(count>6){
        count=1
    }
    document.getElementById("slide"+count).checked = true;
}

