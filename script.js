function showScore(){
    console.log("Pressed")
    var score = localStorage.getItem("score");
    console.log(score);
    var question = document.querySelector("#question");
    question.style.display='none';
    var answer = document.querySelector("#answer");
    answer.style.display='block';
    document.getElementById("scoreField").innerHTML = score;
}

function setScore(value) {
    console.log(value);
    localStorage.setItem("score", value);

    var clean = document.querySelectorAll(".score");    
    clean.forEach(element => {       
        element.style.backgroundColor = "#2d3743";
        element.style.color = "#959eac";
    });

    var point = null;

    if (value == 1) {
        point = document.querySelector("#i1");
    } else if (value == 2) {
        point = document.querySelector("#i2");        
    } else if (value == 3) {
        point = document.querySelector("#i3");        
    } else if (value == 4) {
        point = document.querySelector("#i4");        
    } else if (value == 5) {
        point = document.querySelector("#i5");    
    }
    point.style.backgroundColor = "#fb7413";
    point.style.color = "#fff";

}

