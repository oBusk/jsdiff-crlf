const Diff = require("diff");
const fs = require("fs");

const lfText = fs.readFileSync("./lf.txt", "utf8");
const crlfText = fs.readFileSync("./crlf.txt", "utf8");

// const twoFilesPatch = Diff.createTwoFilesPatch(
//   "lf.txt",
//   "crlf.txt",
//   lfText,
//   crlfText,
//   null,
//   null,
//   {
//     ignoreWhitespace: true,
//   }
// );

// process.stdout.write(twoFilesPatch);

const diff = Diff.diffTrimmedLines(lfText, crlfText);

console.log(diff);

// diff.forEach((part) => {
//   process.stdout.write(
//     part.added === true ? "+" : part.removed === true ? "-" : " "
//   );
//   process.stdout.write(part.value);
// });
