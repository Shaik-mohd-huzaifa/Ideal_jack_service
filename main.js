 function online(){
    let Onlinereport = navigator.onLine;
    if (Onlinereport === false){
     document.getElementById("No-internet").className += " active";
     document.querySelector("body").style.overflow = "hidden"
    }else{
      document.getElementById("No-internet").className = "ConnectionDisplay";
      document.querySelector("body").style.overflow = "";
    }
}

// online();

function display(){
let Mainynav = document.getElementById("main-navbar");
 if(Mainynav.className === "navbar"){
   Mainynav.className += " active";
 }else{
   Mainynav.className = "navbar";
 }
}

  

// function to activate side nav bar for responsive or mobile screens
function changenav(){
   let rotatingbox = document.getElementById("rotating-container");
   if(rotatingbox.className === "rotating-box"){
    //  Adds the active to the class "rotating-box" 
     rotatingbox.className += " active";

    //  removes active when clicked again 
     document.getElementById("nav-container").className += " active";
     
    //  removes the logo when clicked on toggle bar 
     document.getElementById("logo-container").style.display = "none";

    // Adds 100% width for the main-navbar  
     document.getElementById("main-navbar").style.width = "100%";

    // Adds the "sidenav" to main-nav-container class
     document.getElementById("main-nav-container").className += " sidenav";
     
    // Adds overflow property as hidden when clicked 
     document.querySelector("body").style.overflow = "hidden";

    }else{
    //  removes active when clicked again 
     rotatingbox.className = "rotating-box";

    //  removes active when clicked again 
     document.getElementById("nav-container").className = "nav-container";

    //  removes the display = "none" property and sets it as default 
     document.getElementById("logo-container").style.display = "";

    // removes the width = 100% property and sets to normal 
     document.getElementById("main-navbar").style.width = "";

    //  removes "sidenav" when clicked again
     document.getElementById("main-nav-container").className = "main-nav-container";
     
    //  removes Overflow property   
     document.querySelector("body").style.overflow = "";
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
  if(screenheight < 630){
    document.getElementById("form-container").style.display = "none";
  }else{
    document.getElementById("form-container").style.display = "";
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




// calculate the sum of two matrixes
 