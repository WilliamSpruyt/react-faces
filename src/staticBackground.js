import comps from "./complimentaries";
export default function faceMaker() {
  let colors = comps(255);
  let awake = colors.awake;
  let dark = colors.Black;
  let eyewidthSizer = Math.random() + 0.2;
  let eyeSpacer = Math.random();
  let irisSpacer = Math.random();
  let burnsLength = Math.random();
  let noseSize = Math.random() + 0.1;
  let faceFat = Math.random();
  let faceLength = Math.random() * 0.8;
  let mouthWidth = Math.random() * 30 - 15;
  let mouthMood = Math.random() * 40 - 20;
  let mouthCurl = Math.random() * 20 - 10;
  let brow = {
    browSym: Math.random() < 0.5 ? true : false,
    thickness: Math.random() * 5,
    heightR: Math.random() * 30 - 15,
    widthR: Math.random() * 20 - 10,
    moodR: Math.random() * 30 - 15,
    widthL: 0,
    heightL: 0,
    moodL: 0
  };
  brow.widthL = brow.browSym ? brow.widthR : Math.random() * 20 - 10;
  brow.heightL = brow.browSym ? brow.heightR : Math.random() * 20 - 10;
  brow.moodL = brow.browSym ? brow.moodR : Math.random() * 10 - 5;

  return {
    lit:
      `<svg
     svg xmlns='http://www.w3.org/2000/svg'
    width="4%"
    height="10%"
    
    viewBox="0 0 128 168"
     >
    
   
   <g
       
      transform="translate(-31.750003,-30.904762)">
      <rect
      
      style="fill:` +
      awake.B +
      `;stroke:#241c1c;strokeWidth:0; "
      id="rect5457"
      width="300"
      height="300"
      x="0"
      y="0" />
    <!--right ear-->
    
     <ellipse
        style="fill:` +
      awake.A +
      `;stroke:#241c1c;strokeWidth:0; "
        id="path5347"
        cx="42.711311"
        cy="120"
        rx="10.961308"
        ry="20.032738" />
      <!--left ear-->
     <ellipse
        style="fill:` +
      awake.A +
      `;stroke:#241c1c;strokeWidth:0; "
        id="path5347-3"
        cx="145.14285"
        cy="120"
        rx="10.961308"
        ry="20.032738" />
       <!--face-->
     <ellipse
     
        style="fill:` +
      awake.A +
      `;stroke:#241c1c;strokeWidth:0; 
        id="path5366"
        cx="94.872017"
        cy="115.94939"
        rx="` +
      (40 + faceFat * 15) +
      `"
        ry="` +
      (80 + faceLength * 15) +
      `" />
      <!--brow-->
      <path 
      d="M` +
      (50 - brow.widthR) +
      ` ` +
      (110 + brow.moodR + brow.heightR) +
      ` C 60 100, 80 100, ` +
      (90 + brow.widthR) +
      ` ` +
      (110 + brow.heightR) +
      `" stroke=` +
      awake.C +
      ` strokeWidth="` +
      brow.thickness +
      `" fill="none" />
      
       
      
      
      <path d="M` +
      (100 - brow.widthL) +
      ` ` +
      (110 + brow.heightL) +
      `  C 110 100, 140 100, ` +
      (140 + brow.widthL) +
      ` ` +
      (110 + brow.moodL + brow.heightL) +
      ` 
      " stroke=` +
      awake.C +
      ` strokeWidth="` +
      brow.thickness +
      `" fill="none" />
  <!--right eye-->
     <ellipse
        style="fill:#ffffff;stroke:#241c1c;strokeWidth:0; "
        id="path5368"
        cx="` +
      (70 - 10 * eyeSpacer) +
      `"
        cy="120"
        rx="13.607142"
        ry="` +
      10 * eyewidthSizer +
      `" />
      <!--left eye-->
     <ellipse
        style="fill:#ffffff;stroke:#241c1c;strokeWidth:0 ;"
        id="path5368-8"
        cx="` +
      (120 + 10 * eyeSpacer) +
      `"
        cy="120"
        rx="13.607142"
        ry="` +
      10 * eyewidthSizer +
      `" />
      <!--nose-->
     <ellipse
        style=fill:` +
      awake.B +
      `;stroke:#241c1c;strokeWidth:0; "
        id="path5387"
        cx="88.068459"
        cy="149.58928"
        rx="` +
      10 * noseSize +
      `"
        ry="` +
      5 * noseSize +
      `" />
     <ellipse
        style=fill:` +
      awake.B +
      `;stroke:#241c1c;strokeWidth:0; "
        id="path5387-2"
        cx="102.05357"
        cy="149.58928"
        rx="` +
      10 * noseSize +
      `"
           ry="` +
      5 * noseSize +
      `" />
     <ellipse
        style=fill:` +
      awake.B +
      `;stroke:#241c1c;strokeWidth:0; "
        id="path5404"
        cx="94.872017"
        cy="135.98213"
        rx="` +
      10 * noseSize +
      `"
           ry="` +
      (10 + noseSize * 10) +
      `" />
      <!--right iris-->
     <ellipse
     
        style=fill:` +
      awake.C +
      `;stroke:pink;strokeWidth:0; "
        id="path5406"
        cx="` +
      (70 - 10 * irisSpacer) +
      `"
        cy="120"
        rx="4.9136906"
        ry="` +
      10 * eyewidthSizer +
      `" />
      <!--left iris-->
     <ellipse
        style=fill:` +
      awake.C +
      `;stroke:#241c1c;strokeWidth:0; "
        id="path5406-5"
        cx="` +
      (120 + 10 * irisSpacer) +
      `"
        cy="120"
        rx="4.9136906"
        ry="` +
      10 * eyewidthSizer +
      `" />
     
     
     
      <!--mouth-->
     <path
        style=` +
      awake.B +
      `;stroke:` +
      awake.B +
      `;strokeWidth:1; "
        d="M` +
      (70 + mouthWidth) +
      ` 168 C ` +
      (90 - mouthCurl) +
      ` ` +
      (180 - mouthMood) +
      `, ` +
      (100 + mouthCurl) +
      ` ` +
      (180 - mouthMood) +
      `, ` +
      (120 - mouthWidth) +
      `  168" stroke="black" strokeWidth="0" fill="black" 
        d="m 123.9762,172.64583 a 30.238094,9.4494047 0 0 1 -29.578718,9.44716 30.238094,9.4494047 0 0 1 -30.868714,-9.03515 l 30.209338,-0.41201 z" />
     
   </g>
  </svg>`,
    dark:
      `<svg
  svg xmlns='http://www.w3.org/2000/svg'
 width="4%"
 height="10%"
 
 viewBox="0 0 128 168"
  >
 

<g
    
   transform="translate(-31.750003,-30.904762)">
   <rect
   
   style="fill:` +
      dark +
      `;stroke:#241c1c;strokeWidth:0; "
   id="rect5457"
   width="300"
   height="300"
   x="0"
   y="0" />
 <!--right ear-->
 
  <ellipse
     style="fill:` +
      dark +
      `;stroke:#241c1c;strokeWidth:0; "
     id="path5347"
     cx="42.711311"
     cy="120"
     rx="10.961308"
     ry="20.032738" />
   <!--left ear-->
  <ellipse
     style="fill:` +
      dark +
      `;stroke:#241c1c;strokeWidth:0; "
     id="path5347-3"
     cx="145.14285"
     cy="120"
     rx="10.961308"
     ry="20.032738" />
    <!--face-->
  <ellipse
  
     style="fill:` +
      dark +
      `;stroke:#241c1c;strokeWidth:0; 
     id="path5366"
     cx="94.872017"
     cy="115.94939"
     rx="` +
      (40 + faceFat * 15) +
      `"
     ry="` +
      (80 + faceLength * 15) +
      `" />
   <!--brow-->
   <path 
   d="M` +
      (50 - brow.widthR) +
      ` ` +
      (110 + brow.moodR + brow.heightR) +
      ` C 60 100, 80 100, ` +
      (90 + brow.widthR) +
      ` ` +
      (110 + brow.heightR) +
      `" stroke=` +
      colors.C +
      ` strokeWidth="` +
      brow.thickness +
      `" fill="none" />
   
    
   
   
   <path d="M` +
      (100 - brow.widthL) +
      ` ` +
      (110 + brow.heightL) +
      `  C 110 100, 140 100, ` +
      (140 + brow.widthL) +
      ` ` +
      (110 + brow.moodL + brow.heightL) +
      ` 
   " stroke=` +
      colors.C +
      ` strokeWidth="` +
      brow.thickness +
      `" fill="none" />
<!--right eye-->
  <ellipse
     style="fill:#ffffff;stroke:#241c1c;strokeWidth:0; "
     id="path5368"
     cx="` +
      (70 - 10 * eyeSpacer) +
      `"
     cy="120"
     rx="13.607142"
     ry="` +
      10 * eyewidthSizer +
      `" />
   <!--left eye-->
  <ellipse
     style="fill:#ffffff;stroke:#241c1c;strokeWidth:0 ;"
     id="path5368-8"
     cx="` +
      (120 + 10 * eyeSpacer) +
      `"
     cy="120"
     rx="13.607142"
     ry="` +
      10 * eyewidthSizer +
      `" />
   <!--nose-->
  <ellipse
     style=fill:` +
      dark +
      `;stroke:#241c1c;strokeWidth:0; "
     id="path5387"
     cx="88.068459"
     cy="149.58928"
     rx="` +
      10 * noseSize +
      `"
     ry="` +
      5 * noseSize +
      `" />
  <ellipse
     style=fill:` +
      dark +
      `;stroke:#241c1c;strokeWidth:0; "
     id="path5387-2"
     cx="102.05357"
     cy="149.58928"
     rx="` +
      10 * noseSize +
      `"
        ry="` +
      5 * noseSize +
      `" />
  <ellipse
     style=fill:` +
      dark +
      `;stroke:#241c1c;strokeWidth:0; "
     id="path5404"
     cx="94.872017"
     cy="135.98213"
     rx="` +
      10 * noseSize +
      `"
        ry="` +
      (10 + noseSize * 10) +
      `" />
   <!--right iris-->
  <ellipse
  
     style=fill:` +
      colors.C +
      `;stroke:pink;strokeWidth:0; "
     id="path5406"
     cx="` +
      (70 - 10 * irisSpacer) +
      `"
     cy="120"
     rx="4.9136906"
     ry="` +
      10 * eyewidthSizer +
      `" />
   <!--left iris-->
  <ellipse
     style=fill:` +
      colors.C +
      `;stroke:#241c1c;strokeWidth:0; "
     id="path5406-5"
     cx="` +
      (120 + 10 * irisSpacer) +
      `"
     cy="120"
     rx="4.9136906"
     ry="` +
      10 * eyewidthSizer +
      `" />
  
  
  
   <!--mouth-->
  <path
     style=` +
      dark +
      `;stroke:` +
      dark +
      `;strokeWidth:1; "
     d="M` +
      (70 + mouthWidth) +
      ` 168 C ` +
      (90 - mouthCurl) +
      ` ` +
      (180 - mouthMood) +
      `, ` +
      (100 + mouthCurl) +
      ` ` +
      (180 - mouthMood) +
      `, ` +
      (120 - mouthWidth) +
      `  168" stroke="black" strokeWidth="0" fill="black" 
     d="m 123.9762,172.64583 a 30.238094,9.4494047 0 0 1 -29.578718,9.44716 30.238094,9.4494047 0 0 1 -30.868714,-9.03515 l 30.209338,-0.41201 z" />
  
</g>
</svg>`
  };
}
