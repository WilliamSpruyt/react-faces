export default function complimentaries(opac) {
  var red1 = Math.floor(Math.random() * 256);
  var red2 = Math.floor(Math.random() * (256 - red1));
  var red3 = 256 - red2 - red1;
  var blu1 = Math.floor(Math.random() * 256);
  var blu2 = Math.floor(Math.random() * (256 - blu1));
  var blu3 = 256 - blu2 - blu1;
  var gre1 = Math.floor(Math.random() * 256);
  var gre2 = Math.floor(Math.random() * (256 - gre1));
  var gre3 = 256 - gre2 - gre1;

  return {
    awake: {
      A: "rgb(" + red1 + "," + blu1 + "," + gre1 + "," + 255 + ")",
      B: "rgb(" + red2 + "," + blu2 + "," + gre2 + "," + opac + ")",
      C: "rgb(" + red3 + "," + blu3 + "," + gre3 + "," + 255 + ")"
    },
    asleep: {
      A: "rgb(" + red1 / 2 + "," + blu1 / 2 + "," + gre1 / 2 + "," + 255 + ")",
      B: "rgb(" + red2 / 2 + "," + blu2 / 2 + "," + gre2 / 2 + "," + opac + ")",
      C: "rgb(" + red3 / 2 + "," + blu3 / 2 + "," + gre3 / 2 + "," + 255 + ")"
    },
    Black: "rgb(0,0,0,255)"
  };
}
