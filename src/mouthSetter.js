export default function mouthSetter(mouthWidth, mouthMood, mouthCurl) {
  let wide = Math.random() < 0.2 ? true : false;
  let ends = mouthWidth;
  let verticalpos = mouthCurl;
  let mood = mouthMood;
  let y = 140 - verticalpos;
  let x = 88 + ends;

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
