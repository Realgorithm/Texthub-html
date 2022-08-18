function handleUpClick(textBox) {
    textBox.value = textBox.value.toUpperCase();
}
function handleLoClick(textBox) {
    textBox.value = textBox.value.toLowerCase();
}
function handleClClick(textBox) {
    textBox.value = ("");
}
function handleBdClick() {
    document.getElementById("textBox").style.fontWeight = "bold";
}
function handleCpClick(textBox) {
    navigator.clipboard.writeText(textBox);
}
function handleXsClick(textBox) {
    let text = textBox.value.split(/[ ]+/);
    textBox.value = text.join(" ");
}
var textBox = document.getElementById("textBox");
// textBox.onkeyup = textBox.onkeypress = function(){
//     document.getElementById('preview').innerHTML = this.value;
// }
textBox.onkeyup = textBox.addEventListener("keyup", function () {
    document.getElementById('preview').innerHTML = this.value;
});
textBox.onkeyup = textBox.addEventListener("keyup", function () {
    document.getElementById('wordCount').innerHTML = this.value.split(/[ ]+/).filter((element) => {
        return element.length !== 0;
      }).length;
});
