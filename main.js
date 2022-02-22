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
  }else{
    Navname.className = "unvisible-nav";
  }
}

// default argments