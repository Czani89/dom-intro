let billItemTypeWithSettings = document.querySelector(
  ".billItemTypeWithSettings"
);

let callCostSetting = document.querySelector(".callCostSetting");
let smsCostSetting = document.querySelector(".smsCostSetting");
let warningLevelSetting = document.querySelector(".warningLevelSetting");
let criticalLevelSetting = document.querySelector(".criticalLevelSetting");

let callTotalSettings = document.querySelector(".callTotalSettings");
let smsTotalSettings = document.querySelector(".smsTotalSettings");
let totalSettings = document.querySelector(".totalSettings");

let settingsAddBtn = document.querySelector(".settingsAddBtn");
//get a reference to the 'Update settings' button
let updateSettings = document.querySelector(".updateSettings");

//instatiate your instance
let settingBill = setBilling();

updateSettings.addEventListener("click", function () {
  settingBill.setCall(Number(callCostSetting.value));
  settingBill.callSet();
  settingBill.setSms(Number(smsCostSetting.value));
  settingBill.smsSet();
  settingBill.setWarning(Number(warningLevelSetting.value));
  settingBill.warningSet();
  settingBill.setCritical(Number(criticalLevelSetting.value));
  settingBill.criticalSet();

  classed();
});

settingsAddBtn.addEventListener("click", function () {
  const billChecked = document.querySelector(
    "input[name = 'billItemTypeWithSettings']:checked"
  );

  if (billChecked) {
    settingBill.callBillType(billChecked.value);
  }

  callTotalSettings.innerHTML = settingBill.callsTotals().toFixed(2);
  smsTotalSettings.innerHTML = settingBill.smssTotals().toFixed(2);

  totalSettings.innerHTML = settingBill.phoneBillTotal().toFixed(2);
  classed();
});

function classed() {
  totalSettings.classList.remove("warning");
  totalSettings.classList.remove("danger");
  // alert("koko");
  totalSettings.classList.add(settingBill.warnings());
}
