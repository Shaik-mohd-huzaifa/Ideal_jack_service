function display() {
  let Mainynav = document.getElementById("main-navbar");
  if (Mainynav.className === "navbar") {
    Mainynav.className += " active";
  } else {
    Mainynav.className = "navbar";
  }
}

// function to add two numbers
function add(a, b) {
  return a + b;
}

// function to activate side nav bar for responsive or mobile screens
function changenav() {
  let rotatingbox = document.getElementById("rotating-container");
  if (rotatingbox.className === "rotating-box") {
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
  } else {
    //  removes active when clicked again
    rotatingbox.className = "rotating-box";

    //  removes active when clicked again
    document.getElementById("nav-container").className = "nav-container";

    //  removes the display = "none" property and sets it as default
    document.getElementById("logo-container").style.display = "";

    // removes the width = 100% property and sets to normal
    document.getElementById("main-navbar").style.width = "";

    //  removes "sidenav" when clicked again
    document.getElementById("main-nav-container").className =
      "main-nav-container";

    //  removes Overflow property
    document.querySelector("body").style.overflow = "";
  }
}

function Navbar() {
  let Header = document.getElementById("main-nav-container").className;
  if (Header === "main-nav-container") {
    Header += " side-nav";
    document.getElementById("nav-container").className;
  } else {
  }
}

var form = document.getElementById("quotation-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("quotation-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      // you can put any JS code here
      let equipment = document.getElementById("equipment-type").value;
      document.getElementById("email").value = "";
      document.getElementById("equipment-type").value = "default";
      document.getElementById("username").value = "";
      document.getElementById("equipment-model").value = "";
      document.getElementById("condition").value = "";
      document.getElementById("Phone-num").value = "";
      alert(
        `Your request for ${equipment} is recieved. We will contact you soon.`
      );
    });
});
