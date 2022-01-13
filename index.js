var myNodeList = document.getElementsByTagName("LI");

var i;

for (i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("")
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}