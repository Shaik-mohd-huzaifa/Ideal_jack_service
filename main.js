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


// function to send the form input to the email and display the message
function sendForm(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){
    alert("Please fill in all the fields");
  }else{
    alert("Thank you for sending us your message");
    document.getElementById("contactForm").reset();
  }
}

        // function which changes the height and content of the form header

  function floatingFormHeight(){
  const screenheight = window.innerHeight;
  if(screenheight < 720){
    document.getElementById("Name").style.background = "black";
    document.getElementById("Form-header").color = "white";
  }else{
    document.getElementById("Name").style.background = "";
  }
}

window.onresize = floatingFormHeight;
 
document.getElementById("Form-header").style.color = "black";


// function to change the color of the navbar when scrolling
function changeColor(){
  let navbar = document.getElementById("changing-navbar");
  let scroll = document.getElementById("scroll");
  let scrollTop = document.documentElement.scrollTop;
  if(scrollTop > 50){
    navbar.className = "active";
    scroll.className = "active";
  }else{
    navbar.className = "unvisible-nav";
    scroll.className = "unvisible-nav";
  }
}


function dropquote(){
  const dropcontainer = document.getElementById("drop-container");
  if(dropcontainer.className === "drop-container"){
    dropcontainer.className += " active";
  }else{
    dropcontainer.className = "drop-container";
  }
}