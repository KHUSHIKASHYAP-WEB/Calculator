// function insert(num) {
//   documentdocument.form.textview.value = document.form.textview.value + num;
// }
// let a = document.getElementsByClassName("display");
// function calc(opt) {
//   a.innertext = `bsjdvjdbsh`;
// }
// let box = document.getElementsByClassName("textview");

function display(num) {
  console.log(`hi ${num}`);
  document.form1.textview.value = document.form1.textview.value + num;
}
function equal() {
  var exp = document.form1.textview.value;
  if (exp) {
    document.form1.textview.value = eval(exp);
  }
  console.log(eval(exp));
}
function backspace() {
  var exp = document.form1.textview.value;
  document.form1.textview.value = exp.substring(0, exp.length - 1);
}
function clearall() {
  var exp = document.form1.textview.value;
  document.form1.textview.value = ` `;
}
// box.innerHTML = 78970870;
function insert(num) {
  console.log("hi i got clicked");
}
console.log("Hi calculator");
