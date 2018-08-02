export default function browMaker(sym) {
  let thickness = Math.random() * 5;
  let moodL = -10 + Math.random() * 20;
  let moodR = -10 + Math.random() * 20;
  let heightR = Math.random() * 10 - 5;
  let heightL = Math.random() * 10 - 5;

  var right =
    " M 26 " +
    (72 + heightR) +
    " Q 41 " +
    (62 + moodR) +
    " 56 " +
    (72 + heightR);

  var left = sym
    ? " M 72 " +
      (72 + heightR) +
      " Q 87 " +
      (62 + moodR) +
      " 102 " +
      (72 + heightR)
    : " M 72 " +
      (72 + heightL) +
      " Q 87 " +
      (62 + moodL) +
      " 102 " +
      (72 + heightL);

  return { thickness: thickness, right: right, left: left };
}
