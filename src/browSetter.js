export default function browSetter(
  sym,
  thickness,
  moodL,
  moodR,
  heightR,
  heightL
) {
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
  //console.log(sym, thickness, moodL, moodR, heightR, heightL);
  return { thickness: thickness, right: right, left: left };
}
