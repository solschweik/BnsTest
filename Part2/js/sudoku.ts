const fs = require('fs');

const VALS = getRange(1, 9).map(v => v + '');

function getRange(start: number, end: number): number[] {
    const res = [];
    for (let i = start; i < end; i++) {
        res.push(i);
    }
    return res;
}

function checkLine(l: string[]): string[] {
    if (!l) {
        return VALS;
    }

    const err: string[] = [];
    VALS.forEach(c => {
        if (l.indexOf(c) <= -1) {
            err.push(c);
        }
    });

    return err && err.length ? err : null;
}

function checkVerticalLine(theArr: any[], verticalNdx: number): string[] {
    const vline = theArr.map(l => (l + '').split('')[verticalNdx]);
    return checkLine(vline);
}

if (process.argv.length < 3) {
    console.error(`Please, provide file name!`);
    process.exit(-1);
}
const fileName = process.argv[2];
if (!fs.existsSync(fileName)) {
    console.error(`File ${fileName} does not exist!`);
    process.exit(-2);
}

const s = fs.readFileSync(fileName).toString();
let arr = s.split(/\r?\n/);

// Check if last line is a simple empty line
if ( arr.length === 10 && !arr[9]) {
    arr = arr.slice(0, 9);
}
if (arr.length !== 9) {
    console.error(`File should have exactly 9 rows!`);
    process.exit(-3);
}
let errFound = false;
arr.forEach((v, ndx) => {
   v = v.trim();
   if (v.length !== 9) {
       console.error(`ERROR: line ${ndx + 1} should have exactly 9 numbers from 1-9. It has ${v.length} instead!`);
       errFound = true;
   }
});

if (errFound) {
    process.exit(-4);
}

errFound = false;
arr.forEach((l, ndx) => {
   const herr: string[] = checkLine((l + '').split(''));
   const verr: string[] = checkVerticalLine(arr, ndx);
   errFound = !!(herr || verr);
   if (herr) {
       console.error(`Horizontal line ${ndx + 1} does not contain following number${herr.length > 1 ? 's' : ''} ${herr}`);
   }
   if (verr) {
       console.error(`Vertical line ${ndx + 1} does not contain following number${verr.length > 1 ? 's' : ''} ${verr}`);
   }
});

if (!errFound) {
    console.log(`Valid file!`);
}
