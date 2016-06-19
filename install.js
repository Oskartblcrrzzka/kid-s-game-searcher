var sast = document.createElement("link");
sast.setAttribute("href", "https://rawgit.com/Iwotastic/Scratch-Boost/master/src/sweetalert.css");
sast.setAttribute("rel", "stylesheet");
sast.setAttribute("type", "text/css");
document.head.appendChild(sast);
var sasc = document.createElement("script");
sasc.setAttribute("src", "https://rawgit.com/Iwotastic/Scratch-Boost/master/src/sweetalert.min.js");
document.body.appendChild(sasc);
/* fixed by MrSherlockHolmes */
ScratchExtensions.loadExternalJS("https://rawgit.com/Iwotastic/Scratch-Boost/master/src/strings.js");
document.querySelector(".box-head > .buttons").innerHTML = document.querySelector(".box-head > .buttons").innerHTML + "<div class=\"button\" onclick=\"info()\"><span class=\"white\">Scratch Boost</span></div>";
function info() {
	window.open("http://iwotastic.github.io/Scratch-Boost", "", "width=400, height=500");
}
