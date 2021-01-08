var element = document.getElementsByClassName("file-navigation mb-3 d-flex flex-items-start")[0];
var first = document.createElement("span");
first.classList.add("d-none");
first.classList.add("d-md-flex");
first.classList.add("ml-2");
element.appendChild(first);
var newThing = document.createElement("summary");
newThing.classList.add("btn");
newThing.classList.add("btn-primary");
newThing.innerText = "GitPod";
newThing.onclick = function (){
  var url = window.location.href;
  window.open("https://gitpod.io/#" + url);
}
element.appendChild(newThing);
