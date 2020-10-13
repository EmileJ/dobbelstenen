var gooi_btn = document.getElementById("gooi")
var table = document.getElementById("table");
gooi_btn.addEventListener("click",gooi);

function gooi(){
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
    }

    for(i = 1; i<table.rows.length; i++){
        var row = table.rows[i];
        row.cells[1].innerHTML = worp[i];
    }
}