// get a reference to the sms or call radio buttons

//get a reference to the add button
let checkedRadioBtn = document.querySelector(".radioBillAddBtn");

let radioCallsTotalElememt = document.querySelector(".callTotalTwo");
let radioSmsTotalElement = document.querySelector(".smsTotalTwo");
let radioTotalCostElement = document.querySelector(".totalTwo");

//create a variable that will keep track of the total bill
let setBill = radioBill();
//add an event listener for when the add button is pressed
function radioBillTotal() {
  let radioBillType = document.querySelector(
    "input[name='billItemType']:checked"
  );
  if (radioBillType) {
    setBill.setTextCall(radioBillType.value);
  }
  //update the totals that is displayed on the screen.
  radioCallsTotalElememt.innerHTML = setBill.radCallsTotal().toFixed(2);
  radioSmsTotalElement.innerHTML = setBill.radSmsTotal().toFixed(2);

  radioTotalCostElement.innerHTML = setBill.radTotal().toFixed(2);

  radioTotalCostElement.classList.add(setBill.setClass());
}

checkedRadioBtn.addEventListener("click", radioBillTotal);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
