
//Tutorials page, choice between beginner and advanced
function showHideBtn(){
    let beginnerBtn = document.querySelector("#cards-container-beginner");

    if(beginnerBtn.style.display === "none"){
        beginnerBtn.style.display = "flex";
    }
    else{
        beginnerBtn.style.display = "none";
    }
}

function showHideBtn2(){
    let advancedBtn = document.querySelector("#cards-container-advanced");

    if(advancedBtn.style.display === "none"){
        advancedBtn.style.display = "flex";
    }
    else{
        advancedBtn.style.display = "none";
    }
}