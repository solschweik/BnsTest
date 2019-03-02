var fs = require('fs');
var VALS = getRange(1, 9).map(function (v) { return v + ''; });
function getRange(start, end) {
    var res = [];
    for (var i = start; i < end; i++) {
        res.push(i);
    }
    return res;
}
function checkLine(l) {
    if (!l) {
        return VALS;
    }
    var err = [];
    VALS.forEach(function (c) {
        if (l.indexOf(c) <= -1) {
            err.push(c);
        }
    });
    return err && err.length ? err : null;
}
function checkVerticalLine(theArr, verticalNdx) {
    var vline = theArr.map(function (l) { return (l + '').split('')[verticalNdx]; });
    return checkLine(vline);
}
if (process.argv.length < 3) {
    console.error("Please, provide file name!");
    process.exit(-1);
}
var fileName = process.argv[2];
if (!fs.existsSync(fileName)) {
    console.error("File " + fileName + " does not exist!");
    process.exit(-2);
}
var s = fs.readFileSync(fileName).toString();
var arr = s.split(/\r?\n/);
// Check if last line is a simple empty line
if (arr.length === 10 && !arr[9]) {
    arr = arr.slice(0, 9);
}
if (arr.length !== 9) {
    console.error("File should have exactly 9 rows!");
    process.exit(-3);
}
var errFound = false;
arr.forEach(function (v, ndx) {
    v = v.trim();
    if (v.length !== 9) {
        console.error("ERROR: line " + (ndx + 1) + " should have exactly 9 numbers from 1-9. It has " + v.length + " instead!");
        errFound = true;
    }
});
if (errFound) {
    process.exit(-4);
}
errFound = false;
arr.forEach(function (l, ndx) {
    var herr = checkLine((l + '').split(''));
    var verr = checkVerticalLine(arr, ndx);
    errFound = !!(herr || verr);
    if (herr) {
        console.error("Horizontal line " + (ndx + 1) + " does not contain following number" + (herr.length > 1 ? 's' : '') + " " + herr);
    }
    if (verr) {
        console.error("Vertical line " + (ndx + 1) + " does not contain following number" + (verr.length > 1 ? 's' : '') + " " + verr);
    }
});
if (!errFound) {
    console.log("Valid file!");
}
