'use strict';

let CHOICE_CLASS = "choiceButton";
const paragraph = document.getElementById("out");
//let click = "";

document.addEventListener("DOMContentLoaded", () => {
    let surveyButton = document.getElementById("survey");
        surveyButton.addEventListener("click", () => {
            surveyButton.remove(); //deleted the button
            createSurvey();
        });
});

 //build survey buttons
function createSurvey(){
    paragraph.append("what kind of name do you want to genereate?");
    let nameType = ["Hacker Name", "User Name", "Larper Name"];
    for(var i=0; i<nameType.length; i++) {
        //create a button for each nameType in the array
        let btn = document.createElement('button');
            btn.innerHTML = nameType[i];
            btn.className = CHOICE_CLASS;
            btn.addEventListener('click',buttonClicked);
        document.getElementById('content').append(btn); 
        
    }
} //end function createSurvey()

function buttonClicked(event) { 
    //paragraph.remove("what kind of name do you want to genereate?");
    //display = displayChoice
    console.log(event.target.innerHTML);
    clearChoices(); //delete olf buttons
    if (event.target.innerHTML==="Hacker Name") {
        clearChoices();
        hackerClicked();
    }
    else if (event.target.innerHTML==="User Name") {
        clearChoices();
        userClicked();
    }
    else if (event.target.innerHTML==="Larper Name") {
        clearChoices();
        larperClicked();
    }
    
    //else {console.log("i am hungry")}    
} //end function buttonClicked


function clearChoices(){
    let words = document.getElementById("out");
    let buttons = document.getElementsByClassName(CHOICE_CLASS);
    //console.log(buttons);
    while(buttons.length >0) {
        buttons[0].remove();
    }
} //end function clearChoices()

function displayChoice(choice) {
    let div = document.getElementById('content');
        div.innerHTML = `${choice}`;
}// end function displayChoice(choice)

/////////////////////////////////////////////////////////
//if else name//

function createNextSurvey (list) {
    
    for(var i=0; i<list.length; i++) {
        //create a button for each nameType in the array
        let btn = document.createElement('button');
            btn.innerHTML = list[i];
            btn.className = CHOICE_CLASS;
            btn.addEventListener('click',buttonClicked);
        document.getElementById('content').append(btn); 
        console.log("event.target.innerHTML");
    }
    
}

function hackerClicked(){
    //console.log("helllllllo")
    let streetNames = ["Happy Days", "Peaceful Meadows", "Eagle Ranch"];
    createNextSurvey(streetNames);
      let wingNames = ["Garlic Parmesan", "Buffalo", "Honey"];
    createNextSurvey(wingNames);
}

function userClicked(){
    //console.log("text1")
    let wingNames = ["Garlic Parmesan", "Buffalo", "Honey"];
    createNextSurvey(wingNames);
}
function larperClicked(){
    //console.log("text2")
    let larperNames = ["Ford", "Kia", "GMC"];
    createNextSurvey(larperNames);
}


/*function streetClicked(){
    //console.log("text2")
    let petNames = ["Lacy", "Roxy", "Pat"];
    createNextSurvey(petNames);
}*/