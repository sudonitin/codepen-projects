var sbmtBtn = document.getElementById("subtn");

function match(){
  if(document.getElementById("pas").value!=document.getElementById("conpas").value){
    document.getElementById("message").innerHTML = "passwords don't match";
  }
  else{
    document.getElementById("message").innerHTML = " ";
  }
}

function check(){
  var myforms = document.forms["my"];   
  if (myforms.checkValidity()) {
    sbmtBtn.disabled = false;
  } else {
    sbmtBtn.disabled = true;
  }
}

setInterval(match, 2000);