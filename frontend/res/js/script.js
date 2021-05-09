const btnSearchBar = {
  btnSearchInput: 0,
  btnSearchAccessibility: 1,
  btnSearchAccessibilityRange: 2,
  btnSearchPrice: 3,
  btnSearchPriceRange: 4,
  btnSearchType: 5,
  btnSearchParticipants: 6,
};

const navbarForms = ["searchKeyForm", "searchRangeForm", "search2RangeForm"];

function formSearchHelper(elementPos) {
  for (let i = 0; i < navbarForms.length; i++) {
    if (i != elementPos) {
      try {
        let element2Hide = document.getElementById(navbarForms[i]);
        console.log("this", document.getElementById(navbarForms[i]));
        element2Hide[0].style.display = "none";
        for (let i = 0; i < element2Hide.length; i++) {
          element2Hide[i].style.display = "none";
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  let element2Open = document.getElementById(navbarForms[elementPos]);
  for (let i = 0; i < element2Open.length; i++) {
    element2Open.style.display = "flex";
    element2Open[i].style.display = "flex";
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
    case 5: // TODO btnSearchType -> List TODO
      formSearchHelper(2);
      break;
    case 6: // btnSearchParticipants -> 1 range
      formSearchHelper(1);
      break;
    default:
      formSearchHelper(0);
      break;
  }
}

function btnHandler(btnElement) {
  console.log("btnHandler working btn pressed -> ", btnElement.id);
  if (btnSearchBar[btnElement.id] != undefined) {
    console.log("Calling formSearchHandler");
    console.log("-> case number: ", btnSearchBar[btnElement.id]);
    formSearchHandler(btnElement);
  }
}

/**
 * Return the values of ranges found in parent element of given button
 * @param {*} btnElement
 * @returns
 */
function getValueOfRanges(btnElement) {
  let parentElementId = btnElement.parentElement.id;
  let ranges = f.getElementsByClassName(parentElementId);
  let res = [];

  for (let i = 0; i < ranges.length; i++) {
    res.push(ranges[i].value);
  }

  return res;
}
