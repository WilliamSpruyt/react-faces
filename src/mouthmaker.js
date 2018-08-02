export default function mouthMaker(width, height) {
  let wide = Math.random() < 0.2 ? true : false;
  let ends = Math.random() * 10 - 5;
  let verticalpos = Math.random() * 20 - 10;
  let mood = Math.random() * 40 - 20;
  let y = 140 - verticalpos;
  let x = 88 + ends;
  let y2 = (y - 84) * (y - 84);
  let x2 = (x - 64) * (x - 64);
  let a2 = width * width;
  let b2 = height * height;

  if (x2 / a2 + y2 / b2 > 1) {
    ends = 0;
    verticalpos = 10;
    x = 88;
    y = 130;
  }

  var awake =
    " M " +
    (40 - ends) +
    " " +
    y +
    "  Q 64 " +
    (140 + mood) +
    " " +
    x +
    " " +
    (140 - verticalpos);
  awake += wide ? "  Q 64 " + (140 - mood) + " " + (40 - ends) + " " + y : "";
  var asleep =
    " M " +
    (40 - ends) +
    " " +
    y +
    "  Q 64 " +
    140 +
    " " +
    x +
    " " +
    (140 - verticalpos);

  var path = { awake: awake, asleep: asleep };

  return path;
}
