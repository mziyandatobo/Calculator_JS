let sum = " ";
function buildSum(char) {
  sum += char;
  document.getElementById("display").innerHTML = sum;
}
function calc() {
  sum = eval(sum);
  document.getElementById("display").innerHTML = null;
  document.getElementById("display").innerHTML = sum;
}
function clrSum() {
  document.getElementById("display").innerHTML = null;
  sum = " ";
}
function changered() {
  document.getElementById("display").style.color = "red";
}
function changegreen() {
  document.getElementById("display").style.color = "green";
}
function changeblue() {
  document.getElementById("display").style.color = "blue";
}
