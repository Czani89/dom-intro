// get a reference to the sms or call radio buttons
let billItemTypeWithSettings = document.querySelector(
  ".billItemTypeWithSettings"
);

// get refences to all the settings fields
let callCostSetting = document.querySelector(".callCostSetting");
let smsCostSetting = document.querySelector(".smsCostSetting");
let warningLevelSetting = document.querySelector(".warningLevelSetting");
let criticalLevelSetting = document.querySelector(".criticalLevelSetting");

let callTotalSettings = document.querySelector(".callTotalSettings");
let smsTotalSettings = document.querySelector(".smsTotalSettings");
let totalSettings = document.querySelector(".totalSettings");

//get a reference to the add button
let settingsAddBtn = document.querySelector(".settingsAddBtn");
//get a reference to the 'Update settings' button
let updateSettings = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings

let smsCostSettingInput = 0;
let warningLevelSettingInput = 0;
let callCostSettingInput = 0;
let criticalLevelSettingInput = 0;
// create a variables that will keep track of all three totals.

let callTotalSettingsOutput = 0;
let smsTotalSettingsOutput = 0;
let totalSettingsOutput = 0;

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", function () {
  smsCostSettingInput = Number(smsCostSetting.value);
  callCostSettingInput = Number(callCostSetting.value);
  warningLevelSettingInput = Number(warningLevelSetting.value);
  criticalLevelSettingInput = Number(criticalLevelSetting.value);

  classes();
});
//add an event listener for when the add button is pressed

settingsAddBtn.addEventListener("click", function () {
  //in the event listener get the value from the billItemTypeRadio radio buttons
  const billChecked = document.querySelector(
    "input[name = 'billItemTypeWithSettings']:checked"
  ).value;

  if (totalSettingsOutput < criticalLevelSettingInput) {
    // * add the appropriate value to the call / sms total
    if (billChecked === "call") {
      callTotalSettingsOutput += callCostSettingInput;
    } else if (billChecked === "sms") {
      smsTotalSettingsOutput += smsCostSettingInput;
    }
    // console.log(callTotalSettingsOutput);
  }

  callTotalSettings.innerHTML = callTotalSettingsOutput.toFixed(2);
  smsTotalSettings.innerHTML = smsTotalSettingsOutput.toFixed(2);
  // * add the appropriate value to the overall total
  totalSettingsOutput = smsTotalSettingsOutput + callTotalSettingsOutput;
  // * display the latest total on the screen.
  totalSettings.innerHTML = totalSettingsOutput.toFixed(2);

  classes();
});

const classes = function () {
  if (totalSettingsOutput >= criticalLevelSettingInput) {
    totalSettings.classList.remove("warning");
    totalSettings.classList.add("danger");
  } else if (totalSettingsOutput >= warningLevelSettingInput) {
    totalSettings.classList.remove("danger");
    totalSettings.classList.add("warning");
  } else {
    totalSettings.classList.remove("warning");
    totalSettings.classList.remove("danger");
  }
};

// * add nothing for invalid values that is not 'call' or 'sms'.

// * check the value thresholds and display the total value in the right color.
