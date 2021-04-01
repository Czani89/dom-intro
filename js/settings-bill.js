// get a reference to the sms or call radio buttons
let billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings")

// get refences to all the settings fields
let smsCostSetting = document.querySelector(".smsCostSetting")

let warningLevelSetting = document.querySelector(".warningLevelSetting")

let criticalLevelSetting = document.querySelector(".criticalLevelSetting")

let smsCostSetting = document.querySelector(".smsCostSetting")

//get a reference to the add button
let settingsAddBtn = document.querySelector(".settingsAddBtn")
//get a reference to the 'Update settings' button
let updateSettings = document.querySelector(".updateSettings")
// create a variables that will keep track of all the settings
let smsCostSettingInput = 0;
let warningLevelSettingInput = 0;
let criticalLevelSettingInput = 0;
let criticalLevelSettingInput = 0;
// create a variables that will keep track of all three totals.
let callTotalSettings = 0;
let smsTotalSettings = 0;
let totalSettings = 0;

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", function){

}
//add an event listener for when the add button is pressed
settingsAddBtn.addEventListener("click", function){
    let billItemTypeWithSettings = document.querySelector("input[name = 'billItemTypeWithSettings']: checked").value
    if (radioBillType === "call") {
        callTotalSettings += callCostSetting;
      } else if (radioBillType === "sms") {
        smsTotalSettings += smsCostSetting;
      }
      totalSettings = smsTotalSettings + callTotalSettings;

      

     
}
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
