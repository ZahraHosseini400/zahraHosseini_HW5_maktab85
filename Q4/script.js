let Top = prompt("Enter your top:");
let Right = prompt("Enter your right:");
let Html = prompt("Enter your text:");
let className = prompt("Enter your className:");
const notification = (Top, Right, Html, className = "notif") => {
  let elm = document.createElement("div");
  let pragraph = document.createElement("p");
  pragraph.innerText = Html;
  elm.append(pragraph);
  elm.style.position = "fixed";
  elm.style.right = Right + "px";
  elm.style.top = Top + "px";
  elm.classList.add(className);

  document.body.append(elm);
};
if (className == null) {
  notification(Top, Right, Html);
} else {
  notification(Top, Right, Html, className);
}
