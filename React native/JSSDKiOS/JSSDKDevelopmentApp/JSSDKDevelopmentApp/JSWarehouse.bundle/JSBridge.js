//const teamMembers = ["Amber", "Ben", "Carol"];
const amber = {name: "Amber", age: 18, isAdult: true};
//const storage = Storage();
//
//function getVersion() {
//    return 1.0;
//}
//
function getUser () {
    return amber;
}
//
//function getMembers () {
//    return teamMembers;
//}

//function setValue (value) {
//    storage.setValueForKey('from_ios_device', value);
//}
//
//function getValue () {
//    storage.getValueForKey('from_ios_device');
//}

function echo (input) {
    let console = JSConsole()
    return input;
}

function ensureAppID() {
    requirejs(["testLib"], function(testLib) {
        let console = JSConsole()
        console.log('dddd', 'testLib loaded');
        console.log('dddd', testLib.ensureAppID());
   });
}

