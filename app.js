// let score = prompt("กรอกคะแนนของคุณ :")
function show(){
    var score = document.getElementById("score").value;
        var result = document.getElementById("result");
        var submit = "Your score is "+score+" Your Grade ";


    if(score >= 80){
        submit += "4";
    }else if(score >= 70){
        submit += "3";
    }else if(score >= 60){
        submit += "2";
    }else if(score >= 50){
        submit += "1";
    }else{
        submit += "0";
    }
    result.innerHTML = submit;
}
