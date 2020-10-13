var gooi_btn = document.getElementById("gooi")
gooi_btn.addEventListener("click",gooi);

function gooi(){
    var worpen = [];

    for(i = 0; i<8; i++){
        var getal = Math.floor(Math.random() * 6)+1;
        worpen[i] = getal;
    }
    
    console.log(worpen);
}