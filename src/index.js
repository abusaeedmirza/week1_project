var button1=document.getElementById("add-data");
button1.addEventListener("click", myfunciton);
function myfunciton(){
    var field=document.getElementById("userinput").value;
    var ul=document.getElementById("list");
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(field));
    ul.appendChild(li);
}