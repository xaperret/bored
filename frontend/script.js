/*
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

let activity = {
  activity: "Teach your dog a new trick",
  accessibility: 0.15,
  type: "relaxation",
  participants: 1,
  price: 0.05,
};
*/

const BORED_API = "http://www.boredapi.com/api/activity";

/**
 * Get information from bored api and makes request using given information
 *
 * By default (without receiving arguments) this will return the string to do a random request
 * @param {Number} mode                 desired request to do on getBored api
 * @param {* String array} information  containing informations for the request
 * @returns
 */
function createRequest(mode, information = "/") {
  let output = BORED_API;
  switch (mode) {
    case 0: // random
      break;
    case 1: // key
      output += "?key=" + information[0];
      break;
    case 2: // type
      output += "?type=" + information[0];
      break;
    case 3: // participants
      output += "?participants=" + information[0];
      break;
    case 4: // price
      output += "?price=" + information[0];
      break;
    case 5: // price range
      output += "minprice=" + information[0] + "&maxprice=" + information[1];
      break;
    case 6: // accessibility
      output += "?accessibility=" + information[0];
      break;
    case 7: // min/max accessibility
      output +=
        "?minaccessibility=" +
        information[0] +
        "&maxaccessibility" +
        information[1];
      break;
    default:
      // random
      break;
  }

  return output;
}

/**
 * Returns an activity with given childClassName classes and information provided by json object activity
 * @param {*} childClassName  is the document element classes name to attribute
 * @param {} activity         is the json activity object
 *
 * @return {} return the element that has been newly created
 */
function generateActivityHtml(
  childClassName = "item activity",
  parentElement,
  activity
) {
  let element = document.createElement("div");
  element.className = childClassName;

  let activityPicture = document.createElement("img");
  element.append(activityPicture);

  let activityName = document.createElement("h1");
  activityName.className = "activityName";
  activityName.append(activity.activity);
  element.append(activityName);

  let activityType = document.createElement("p");
  activityType.className = "activityType";
  activityType.append(activity.type);
  element.append(activityType);

  let activityParticipants = document.createElement("p");
  activityParticipants.className = "activityParticipants";
  activityParticipants.append(activity.participants);
  element.append(activityParticipants);

  let activityPrice = document.createElement("p");
  activityPrice.className = "activityPrice";
  activityPrice.append(activity.price);
  element.append(activityPrice);

  let activityAccess = document.createElement("p");
  activityAccess.className = "activityAccess";
  activityAccess.append(activity.accessibility);
  element.append(activityAccess);

  parentElement.append(element);
}

/**
 *
 * @param {*} mode
 * @param {*} information
 */
function generateNewActivity(mode = 0, information = "/") {
  let req = createRequest(mode, information);
  let main_el = document.querySelector("main");

  fetch(req)
    .then((res) => res.json())
    .then((res) => generateActivityHtml("item activity", main_el, res));
}

generateNewActivity();
