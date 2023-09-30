function addNewAca(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("acaField");
    newNode.classList.add("m-1");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "education");

    let acaOb= document.getElementById("aca");
    let acaAdd= document.getElementById("acaAdd");

    acaOb.insertBefore(newNode, acaAdd);
}

function removeNewAca(){
    const len= document.getElementsByClassName('acaField').length;
    let lastChild =document.getElementsByClassName('acaField')[len-1];
    lastChild.remove();
}

function addNewWork(){
    let newNode2= document.createElement("textarea");
    newNode2.classList.add("form-control");
    newNode2.classList.add("weField");
    newNode2.classList.add("m-1");
    newNode2.setAttribute("rows", 3);
    newNode2.setAttribute("placeholder", "experience");

    let weOb= document.getElementById("we");
    let weAdd= document.getElementById("workAdd");

    weOb.insertBefore(newNode2, weAdd);
}

function removeNewWork(){
    const len= document.getElementsByClassName('weField').length;
    let lastChild =document.getElementsByClassName('weField')[len-1];
    lastChild.remove();
}

function validateTextBox() {
    if (document.getElementById("nameField").value != "") {return 1;} else {
        alert("Please enter your name");
    }
}

function generateCV(){
    if(validateTextBox()){
    let nameField= document.getElementById("nameField").value;
    let nameT1= document.getElementById("nameT1");

    
    nameT1.innerHTML= nameField;
    document.getElementById("nameT2").innerHTML= nameField;

    document.getElementById("contactT").innerHTML= document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML= document.getElementById("addressField").value;
    document.getElementById("fbT").innerHTML= document.getElementById("fbField").value;
    document.getElementById("linkedT").innerHTML= document.getElementById("linkedField").value;
    document.getElementById("gitT").innerHTML= document.getElementById("gitField").value;
    document.getElementById("skillsT").innerHTML= document.getElementById("skillField").value;

    document.getElementById("objectiveT").innerHTML= document.getElementById("objectiveField").value;

    let acaD= document.getElementsByClassName("acaField");

    let str0= "";

    for (let e of acaD){
        str0= str0 + `<li> ${ e.value } </li>`;
    }

    document.getElementById("acaT").innerHTML= str0;


    let worke= document.getElementsByClassName("weField");

    let str= "";

    for (let e of worke){
        str= str + `<li> ${ e.value } </li>`;
    }

    document.getElementById("weT").innerHTML= str;



    let file= document.getElementById("imgField").files[0];

    let reader= new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend= function(){
        document.getElementById("imgT").src= reader.result;
    };
    }
}

function printCV(){
    document.getElementById("cv-form").style.display= "none";
    document.getElementById("temp").classList.add("col-md-12");
    window.print();
    document.getElementById("temp").classList.remove("col-md-12");
    document.getElementById("cv-form").style.display= "block";
}
