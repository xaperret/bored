var element = document.createElement("div");
element.className = "item activity";
let pActivity = document.createElement("h1");
let pType = document.createElement("p");
let pParticipants = document.createElement("p");
let pPrice = document.createElement("p");
let pAccessibility = document.createElement("p");
var mainSection = document.querySelector("main");
fetch("http://www.boredapi.com/api/activity/")
  .then((res) => res.json())
  .then((data) => dataShow(data));

function dataShow(data) {
  pActivity.append(data.activity);
  pType.append(data.type);
  pParticipants.append(data.participants);
  pAccessibility.append(data.accessibility);
  element.append(pActivity);
  element.append(pType);
  element.append(pParticipants);
  element.append(pAccessibility);
  mainSection.append(element);
}
