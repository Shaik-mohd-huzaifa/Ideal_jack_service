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


function displaynav(){
 let x = document.getElementById("changingnavbar");
 if( x.className === "nav-container"){
   x.className += " active";
 }else{
   x.className == "nav-container";
 }
}


// default argments