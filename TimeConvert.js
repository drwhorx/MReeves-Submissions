var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function ask() {
    rl.question(">>Enter Date in 12hr format: ", function (answer) {
        var copy = answer.toLowerCase()
        var splits = copy.split(":")
        var formatted = splits[1].indexOf("pm") > -1 ? (parseInt(splits[0]) % 12) + 12 : splits[0] % 12
        copy = copy.replace(splits[0], formatted);
        copy = copy.replace("pm", "")
        copy = copy.replace("am", "")
        console.log(copy)
        ask()
    });
}
ask()