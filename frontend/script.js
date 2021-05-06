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
 * Creates an activity and add it to given parentElement
 *
 * Wrapper for createRequest, generateActivityHtml
 *
 * @param {*} mode          is the request to make to the api @see createRequest
 * @param {*} information   is the information to be passed to api, use string array if more than one information
 * @param {*} parentElement is the css selector to add the new activity
 */
function generateNewActivity(
  mode = 0,
  information = "/",
  parentElement = "main"
) {
  let req = createRequest(mode, information);
  let main_el = document.querySelector(parentElement);

  fetch(req)
    .then((res) => res.json())
    .then((res) => generateActivityHtml("item activity", main_el, res));
}

for (let i = 0; i < 10; i++) {
  generateNewActivity();
}
