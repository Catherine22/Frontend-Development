const teamMembers = ["Amber", "Ben", "Carol"];
const amber = {name: "Amber", age: 18, isAdult: true};
const storage = Storage();

function getVersion() {
    return 1.0;
}

function getUser () {
    return amber;
}

function getMembers () {
    return teamMembers;
}

function echo (input) {
//    requirejs(["testLib"], function(testLib) {
//        return testLib.ensureAppID()
//    }
    
    let console = JSConsole()
    console.log('ddd', 'aaa')
    return input;
}

function setValue (value) {
    storage.setValueForKey('from_ios_device', value);
}

function getValue () {
    storage.getValueForKey('from_ios_device');
}

