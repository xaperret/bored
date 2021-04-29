var element = document.getElementById("activity");
let pActivity = document.createElement("p");
let pType = document.createElement("p");
let pParticipants = document.createElement("p");
let pPrice = document.createElement("p");
let pAccessibility = document.createElement("p");
fetch("http://www.boredapi.com/api/activity/")
  .then((res) => res.json())
  .then((data) => dataShow(data));

function dataShow(data) {
  element.append(pActivity, "Cool activity : " + data.activity);
  element.append(pAccessibility, "Hello accessibility : " + data.accessibility);
  element.append(pType, "What a type : " + data.type);
  element.append(pPrice, "yuk the price : " + data.price);
  element.append(pParticipants, "ola quetal participants" + data.participants);
}
