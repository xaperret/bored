// To do the right action with formSearch/formSearchHelper
const btnSearchBar = {
  btnSearchInput: 0,
  btnSearchAccessibility: 1,
  btnSearchAccessibilityRange: 2,
  btnSearchPrice: 3,
  btnSearchPriceRange: 4,
  btnSearchType: 5,
  btnSearchParticipants: 6,
};

// Represents the different option to use the right mode depending on the request by the user
const btn2Api = {
  btnSearchInput: 0, // useless, 0 is random
  btnSearchAccessibility: 6,
  btnSearchAccessibilityRange: 7,
  btnSearchPrice: 4,
  btnSearchPriceRange: 5,
  btnSearchType: 2,
  btnSearchParticipants: 3,
};

var currentCategory = "";

// The id of the different form contained in the navbar
const navbarForms = [
  "searchNumber",
  "searchRangeForm",
  "search2RangeForm",
  "searchTypeForm",
];

/**
 * Hide form that are not needed and display the form requested by the user
 * @param {*} elementPos
 */
function formSearchHelper(elementPos) {
  for (let i = 0; i < navbarForms.length; i++) {
    if (i != elementPos) {
      try {
        let element2Hide = document.getElementById(navbarForms[i]);
        element2Hide.style.display = "none";
      } catch (e) {
        console.log(e);
      }
    }
  }
  let element2Open = document.getElementById(navbarForms[elementPos]);
  for (let i = 0; i < element2Open.length; i++) {
    element2Open.style.display = "flex";
  }
}

/**
 * Change the form found in navbar to correspond to given btnElement
 * @param {*} btnElement
 */
function formSearchHandler(btnElement) {
  console.log("Change of form, because button ", btnElement.id, " was pressed");
  switch (btnSearchBar[btnElement.id]) {
    case 0: // btnSearchInput -> text input
      console.log("btnSearchInput -> text input");
      //generateNewActivity(1,);
      formSearchHelper(0);
      break;
    case 1: // btnSearchAccess -> 1 range
      console.log("btnSearchAccess -> 1 range");
      formSearchHelper(1);
      break;
    case 2: // btnSearchAccessR -> 2 range
      formSearchHelper(2);
      break;
    case 3: // btnSearchPrice -> 1 range
      formSearchHelper(1);
      break;
    case 4: // btnSearchPriceR -> 2 range
      formSearchHelper(2);
      break;
    case 5: // btnSearchType -> List
      formSearchHelper(3);
      break;
    case 6: // btnSearchParticipants -> 1 range
      formSearchHelper(0);
      break;
    default:
      formSearchHelper(0);
      break;
  }
}

/**
 * Delete all activities found in main
 */
function clearActivities() {
  var main = document.querySelector("main");
  main.removeChild(main.children);
}

/**
 * Help call the right function using global 'dictionary' btnSearchBar
 * @param {*} btnElement
 */
function btnHandler(btnElement) {
  currentCategory = btnElement;
  console.log("btnHandler working btn pressed -> ", btnElement.id);
  if (btnSearchBar[btnElement.id] != undefined) {
    console.log("Calling formSearchHandler");
    console.log("-> case number: ", btnSearchBar[btnElement.id]);
    formSearchHandler(btnElement);
  }
}

/**
 * Create activity using values found in quantity id input tag
 */
function createActivityFromSearchNumber() {
  let num = document.getElementById("quantity");
  let values = [];

  values.push(num.value);
  console.log("Search category is ->", currentCategory);
  let mode = btn2Api[currentCategory.id];

  console.log("Generating new activity with mode -> ", mode);
  console.log("Values given are -> ", values);
  generateNewActivity(mode, values);
}

/**
 * Create activity using values found in parent form
 * @param {*} btnElement
 * @returns
 */
function createActivityFromSearch(btnElement) {
  let parentElement = btnElement.parentElement;
  let ranges = parentElement.getElementsByClassName("range");
  let valuesRange = [];

  for (let i = 0; i < ranges.length; i++) {
    valuesRange.push(ranges[i].value);
  }
  console.log("Search category is ->", currentCategory);
  let mode = btn2Api[currentCategory.id];

  console.log("Generating new activity with mode -> ", mode);
  console.log("Values given are -> ", valuesRange);
  generateNewActivity(mode, valuesRange);
}

/**
 * Create activity element and add to main by retrieving value from activity type
 * @param {*} btnElement
 */
function createActivityFromSearchType(btnElement) {
  let type = document.getElementById("activityType");

  let valuesType = [];
  valuesType.push(type.value);

  console.log("Search category is ->", currentCategory);
  let mode = btn2Api[currentCategory.id];

  console.log("Generating new activity with mode -> ", mode);
  console.log("Values given are -> ", valuesType);
  generateNewActivity(mode, valuesType);
}
