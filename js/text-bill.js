let textElement = document.querySelector(".billTypeText");

let addToBillBtnElement = document.querySelector(".addToBillBtn");

let callsTotalElememt = document.querySelector(".callTotalOne");
let smsTotalElement = document.querySelector(".smsTotalOne");
let totalCostElement = document.querySelector(".totalOne");

var textB = textBill();
function textBillTotal() {
  var billTypeEntered = textElement.value.trim();
  textB.setCall(billTypeEntered);

  callsTotalElememt.innerHTML = textB.callsTotal().toFixed(2);
  smsTotalElement.innerHTML = textB.smsTotal().toFixed(2);
  totalCostElement.innerHTML = textB.total().toFixed(2);
  totalCostElement.classList.add(textB.setTextClass());
}

addToBillBtnElement.addEventListener("click", textBillTotal);
