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

function getBoredData(mode) {
  fetch("http://www.boredapi.com/api/activity/")
    .then((res) => res.json())
    .then((data) => dataShow(data));

  return data;
}

/**
 * Creates an activity with given childClassName classes that is then added to given parentElement
 * @param {*} parentElement   is the document parent element to which the child class needs to be linked
 * @param {*} childClassName  is the document element classes name to attribute
 *
 * @return {} return the element that has been newly created
 */
function generateActivityHtml(parentElement, childClassName = "item activity") {
  let element = document.createElement("div");
  element.className = childClassName;

  let activityPicture = document.createElement("img");
  element.append(activityPicture);

  let activityName = document.createElement("h1");
  activityName.className = "activityName";
  element.append(activityName);

  let activityType = document.createElement("p");
  activityType.className = "activityType";
  element.append(activityType);

  let activityParticipants = document.createElement("p");
  activityParticipants.className = "activityParticipants";
  element.append(activityParticipants);

  let activityPrice = document.createElement("p");
  activityPrice.className = "activityPrice";
  element.append(activityPrice);

  let activityAccess = document.createElement("p");
  activityAccess.className = "activityAccess";
  element.append(activityAccess);

  parentElement.append(element);
  return element;
}

function generateRandomActivity(activityElement) {
  data = getBoredData(0);
  activityElement.append(data.activity);
}
