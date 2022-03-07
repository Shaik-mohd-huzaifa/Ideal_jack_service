/* function online(){
    let Onlinereport = navigator.onLine;
    if (Onlinereport === false){
      alert("Turn on your internet connection");
      document.querySelector('body').style.height = "100vh";
    }
    else{
        document.querySelector('body').style.display = 'block';
    }
}

online();*/

function display(){
  let Navname = document.getElementById("changing-navbar");
  console.log(Navname);
  if(Navname.className === "unvisible-nav"){
    Navname.className += " active";
    document.getElementById("logoheader").style.display = "none";
  }else{
    Navname.className = "unvisible-nav";
    document.getElementById("logoheader").style.display = "";
  }
}

function changenav(){
   let togglebar = document.getElementById("rotating-nav");
   if(togglebar.className === "wrong-nav"){
     togglebar.className += " active";
   }else{
     togglebar.className = "wrong-nav";
   }
}

console.log("Class Name");
// default argments for the function

const $student_id = "STU2354";
const $student_name = `Shaik Mohd Huzaifa`;
const $student_sem = "3rd sem";
const total = `Student Details \n Student id = ${$student_id} \n Student Name = ${$student_name} \n Current Semester = ${$student_sem}`;
console.log(total);
