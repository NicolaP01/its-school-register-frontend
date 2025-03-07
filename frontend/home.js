window.onload = addEvents;

function addEvents() {
    let buttoncl = document.getElementById("buttoncl");
    let buttonst = document.getElementById("buttonst");
    let buttonle = document.getElementById("buttonle");
    let buttonatt = document.getElementById("buttonatt");
    buttoncl.addEventListener("click", showClasses);
    buttonst.addEventListener("click", showStudents);
    buttonle.addEventListener("click", showLessons);
    buttonatt.addEventListener("click", showAttendance);
}

function showClasses() {
    let classe = document.getElementById("class");
    let classes = document.getElementById("classes");
    let stud = document.getElementById("stud");
    let students = document.getElementById("students");
    let less = document.getElementById("less");
    let lessons = document.getElementById("lessons");
    let attend = document.getElementById("attend");
    let attendances = document.getElementById("attendances");
    stud.hidden = true;
    students.hidden = true
    less.hidden = true;
    lessons.hidden = true
    attend.hidden = true;
    attendances.hidden = true
    if (classe.hidden == true && classes.hidden == true) {
        classe.hidden = false;
        classes.hidden = false;
    }
}

function showStudents() {
    let classe = document.getElementById("class");
    let classes = document.getElementById("classes");
    let stud = document.getElementById("stud");
    let students = document.getElementById("students");
    let less = document.getElementById("less");
    let lessons = document.getElementById("lessons");
    let attend = document.getElementById("attend");
    let attendances = document.getElementById("attendances");
    classe.hidden = true;
    classes.hidden = true
    less.hidden = true;
    lessons.hidden = true
    attend.hidden = true;
    attendances.hidden = true
    if (stud.hidden == true && students.hidden == true) {
        stud.hidden = false;
        students.hidden = false;
    }
}

function showLessons() {
    let classe = document.getElementById("class");
    let classes = document.getElementById("classes");
    let stud = document.getElementById("stud");
    let students = document.getElementById("students");
    let less = document.getElementById("less");
    let lessons = document.getElementById("lessons");
    let attend = document.getElementById("attend");
    let attendances = document.getElementById("attendances");
    classe.hidden = true;
    classes.hidden = true
    stud.hidden = true;
    students.hidden = true
    attend.hidden = true;
    attendances.hidden = true
    if (less.hidden == true && lessons.hidden == true) {
        less.hidden = false;
        lessons.hidden = false;
    }
}

function showAttendance() {
    let classe = document.getElementById("class");
    let classes = document.getElementById("classes");
    let stud = document.getElementById("stud");
    let students = document.getElementById("students");
    let less = document.getElementById("less");
    let lessons = document.getElementById("lessons");
    let attend = document.getElementById("attend");
    let attendances = document.getElementById("attendances");
    classe.hidden = true;
    classes.hidden = true
    stud.hidden = true;
    students.hidden = true
    less.hidden = true;
    lessons.hidden = true
    if (attend.hidden == true && attendances.hidden == true) {
        attend.hidden = false;
        attendances.hidden = false;
    }
}

function createClass(){
    let listcl=document.getElementById("classList");
    let textc=document.getElementById("textc");
    let listcontent=document.createElement("li");
    let deleteb=document.createElement("button");
    let selectst=document.getElementById("selectst");
    let optionst=document.createElement("option");
    deleteb.addEventListener("click", function () {listcontent.remove()})
    listcontent.innerText=textc.value;
    optionst.innerText=textc.value;
    deleteb.style.height="25px";
    deleteb.style.width="fit-content";
    deleteb.innerText="DELETE"
    listcontent.appendChild(deleteb);
    listcl.appendChild(listcontent);
    selectst.appendChild(optionst);
}

function addStudent(){
    
}