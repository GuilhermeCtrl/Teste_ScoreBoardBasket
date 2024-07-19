var changeScoreALLY = document.getElementById("scoreALLY")
var pointsALLY = 0

changeScoreENEMY = document.getElementById("scoreENEMY")
var pointsENEMY = 0

//botão de reset
function reset(){
    pointsALLY = 0;
    changeScoreALLY.innerHTML = pointsALLY
    pointsENEMY = 0;
    changeScoreENEMY.innerHTML = pointsENEMY;
}

//pontos aliado
function more1(){
    pointsALLY += 1;
    changeScoreALLY.innerHTML = pointsALLY;

}

function more2(){
    pointsALLY += 2;
    changeScoreALLY.innerHTML = pointsALLY;

}

function more3(){
    pointsALLY += 3;
    changeScoreALLY.innerHTML = pointsALLY;

}

//pontos inimigo
function more1Enemy(){
    pointsENEMY += 1;
    changeScoreENEMY.innerHTML = pointsENEMY;
}

function more2Enemy(){
    pointsENEMY += 2;
    changeScoreENEMY.innerHTML = pointsENEMY;
}

function more3Enemy(){
    pointsENEMY += 3;
    changeScoreENEMY.innerHTML = pointsENEMY;
}
