document.getElementById("parent").innerHTML=("Something else");
document.getElementById("parent").style.cssText=("background-color:red; color:white; text-align:center");
document.getElementsByClassName("exercise").innerHTML=("I am index 0");
document.getElementsByTagName("h1")[1].innerHTML=("I am change");
document.querySelector("h1").style.cssText=("backkground-color:aqua; color:blue")
document.querySelector("#ram").style.cssText = ("background-color:red; color:white;")
document.querySelector(".ok").style.cssText = ("background-color:pink; color:black;")
const change = document.querySelectorAll("h2");for (i=0; i<=change.length;i++){
    change[i].innerHTML = ("I am an Alien");
}
function myfunction(){
    const element = document.body;
    element.classList.toggle("dark-mode")
}