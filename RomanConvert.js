var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function ask() {
    rl.question(">>Enter a Roman Numeral: ", function (answer) {
        var copy = answer.toUpperCase()
        var roms = ["I", "V", "X", "L", "C", "D", "M"]
        var sum = 0;
        var start = 0;
        while (start < copy.length) {
            var select = start + 1;
            while (copy.substring(select, select + 1) == copy.substring(start, start + 1)) select++;
            var first_num = copy.substring(start, select)
            start = select;
            select++;
            while (copy.substring(select, select + 1) == copy.substring(start, start + 1) && select < copy.length) select++;
            var sec_num = copy.substring(start, select)
            var first_occur = first_num.length
            var sec_occur = sec_num.length
            var first_ind = roms.indexOf(first_num.substring(0, 1))
            var sec_ind = roms.indexOf(sec_num.substring(0, 1))
            var first_base = Math.pow(10, Math.floor(first_ind / 2)) * (first_ind % 2 == 0 ? 1 : 5);
            var sec_base = Math.pow(10, Math.floor(sec_ind / 2)) * (sec_ind % 2 == 0 ? 1 : 5);
            if (first_base < sec_base && (first_occur > 1 || sec_occur > 1)) {
                console.log("INVALID INPUT")
                break;
            } else if (first_occur > 1 || sec_occur > 3){
                console.log("INVALID INPUT")
                break;
            }
            sum += (first_base < sec_base ? sec_base - first_base : (first_base * first_occur) + (sec_base * sec_occur))
            start = select;
        }
        if (sum != 0) console.log(sum)
        ask()
    });
}
ask()