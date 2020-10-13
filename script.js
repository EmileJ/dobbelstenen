var gooi_btn = document.getElementById("gooi")
gooi_btn.addEventListener("click",gooi);

function gooi(){
    var worpen = [];

    const worp = {
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0
    }

    for(i = 0; i<8; i++){
        var getal = Math.floor(Math.random() * 6)+1;
        worp[getal]++;
        worpen[i] = getal;
    }
    
    console.log(worp);
}