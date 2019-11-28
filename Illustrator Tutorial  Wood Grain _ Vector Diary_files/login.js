<!--login script-->
function HideContent(d,e) {
document.getElementById(d).style.display = "none";
}
function ShowContent(d,e) {
document.getElementById(d).style.display = "block";
document.getElementById(e).style.display = "none";
}
function ReverseDisplay(d) {
if(document.getElementById(d).style.display == "none") { document.getElementById(d).style.display = "block"; }
else { document.getElementById(d).style.display = "none"; }
}

