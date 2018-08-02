import React, { Component } from "react";
import comps from "./complimentaries";
import mouthMaker from "./mouthmaker";
import browMaker from "./browmaker";
import mouthSetter from "./mouthSetter";
import browSetter from "./browSetter";
import staticBack from "./staticBackground";
import logo from "./logo.svg";
import "./App.css";
import Face from "./Face";
const maxFaceWidth = 55;
const maxFaceHeight = 84;
const faceNum = 50;
let count = 0;
let litBackground = "";
let darkBackground = "";
for (var i = 0; i < faceNum * 20; i++) {
  var both = staticBack();

  litBackground += both.lit;
  darkBackground += both.dark;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faceList: this.faceListGenerate(faceNum),
      darkBackGround: darkBackground,
      litBackGround: litBackground,
      lights: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  faceListGenerate(num) {
    let theList = [];
    for (let i = 0; i < num; i++) {
      let faceWidthVar = Math.random() * -20;
      let faceheightVar = Math.random() * -20;
      let compsCols = comps(0);
      theList.push({
        width: ["5%", "10%", "15%"][Math.floor(Math.random() * 3)],
        height: ["25%", "10%", "15%", "20%"][0],
        label: i,
        bosseye: Math.random() > 0.2 ? 1 : -1,
        glanceX: Math.random() * 10 - 5,
        glanceY: Math.random() * 6 - 3,
        cols: compsCols.awake,
        greyCols: compsCols.asleep,
        mouth: mouthMaker(
          maxFaceWidth + faceWidthVar,
          maxFaceHeight + faceheightVar
        ),
        nose: 3 + Math.random() * 3,
        brow: browMaker(),
        faceFat: maxFaceWidth + faceWidthVar,
        faceHeight: maxFaceHeight + faceheightVar,
        eyeSquiff: Math.random() * 10 - 5,
        eyeHeight: 0.5 + Math.random() * 1.5,
        eyeMotionX: Math.random() - 0.5,
        eyeMotionY: Math.random() - 0.5,
        lights: true,
        awake: true
      });
    }
    return theList;
  }

  eagleEyes(num, tempFaceList) {
    if (tempFaceList[num].glanceX >= 5.0) tempFaceList[num].eyeMotionX *= -1;
    else if (tempFaceList[num].glanceX <= -5.0)
      tempFaceList[num].eyeMotionX *= -1;

    tempFaceList[num].glanceX += tempFaceList[num].eyeMotionX;

    if (tempFaceList[num].glanceY >= tempFaceList[num].eyeHeight)
      tempFaceList[num].eyeMotionY *= -1;
    else if (tempFaceList[num].glanceY <= tempFaceList[num].eyeHeight * -1)
      tempFaceList[num].eyeMotionY *= -1;

    tempFaceList[num].glanceY += tempFaceList[num].eyeMotionY;

    //Math.sin(Date.now() * 5);
    this.setState({ faceList: tempFaceList });
  }
  lightsOut(tempFaceList) {
    tempFaceList.forEach(element => {
      element.lights = !element.lights;
    });
    this.setState(
      { lights: !this.state.lights, theList: tempFaceList },
      console.log(this.state.lights ? "on" : "off")
    );
  }
  vocate(
    mouthWidth,
    mouthMood,
    mouthCurl,
    endMouthWidth,
    endMouthMood,
    endMouthCurl,
    numFrames,
    faceNum,
    tempFaceList
  ) {
    let widthInc = endMouthWidth / numFrames;
    let moodInc = endMouthMood / numFrames;
    let curlInc = endMouthCurl / numFrames;

    if (mouthWidth < endMouthWidth) {
      mouthWidth += widthInc;
      mouthMood += moodInc;
      mouthCurl += curlInc;
      tempFaceList[faceNum].mouth = mouthSetter(
        mouthWidth,
        mouthMood,
        mouthCurl
      );
      if (Math.abs(mouthMood) / 10 > 1)
        tempFaceList[faceNum].eyeHeight = Math.abs(mouthMood) / 10;

      tempFaceList[faceNum].brow = browSetter(
        Math.random() > 0.5 ? true : false,
        tempFaceList[faceNum].brow.thickness,
        mouthMood / 2,
        mouthCurl / 2,
        mouthCurl / 2,
        mouthMood / 2
      );

      this.setState({ theList: tempFaceList });
    }
  }

  componentDidMount() {
    var phon = setInterval(() => {
      if (count > faceNum - 1) count = 0;

      this.eagleEyes(Math.floor(Math.random() * faceNum), this.state.faceList);
      this.vocate(
        Math.random() * 10 - 5,
        Math.random() * 40 - 20,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 40 - 20,
        Math.random() * 10 - 5,
        1000,

        Math.floor(Math.random() * faceNum),
        this.state.faceList.slice()
      );
    }, 0);
  }
  handleClick(event) {
    let tempFaceList = this.state.faceList.slice();
    tempFaceList[event.target.id].awake = !tempFaceList[event.target.id].awake;
    this.setState({ theList: tempFaceList });
  }

  render() {
    return (
      <div className="App">
        {this.state.lights ? (
          <div>
            <div
              className="wallpaper"
              style={{ zIndex: "-100" }}
              dangerouslySetInnerHTML={{ __html: this.state.litBackGround }}
            />{" "}
            <svg
              className="switch"
              onClick={() => {
                this.lightsOut(this.state.faceList.slice());
              }}
            >
              <defs id="defs4622">
                <filter
                  style={{ colorInterpolationFilters: "sRGB" }}
                  id="filter5386"
                  x="-0.036"
                  width="1.072"
                  y="-0.036"
                  height="1.072"
                >
                  <feGaussianBlur stdDeviation="1.5" id="feGaussianBlur5388" />
                </filter>
                <filter
                  style={{ colorInterpolationFilters: "sRGB" }}
                  id="filter5398"
                  x="-0.0477"
                  width="1.0954"
                  y="-0.028909091"
                  height="1.0578182"
                >
                  <feGaussianBlur
                    stdDeviation="0.3975"
                    id="feGaussianBlur5400"
                  />
                </filter>
                <filter
                  style={{ colorInterpolationFilters: "sRGB" }}
                  id="filter5422"
                  x="-0.0954"
                  width="1.1908"
                  y="-0.057818182"
                  height="1.1156364"
                >
                  <feGaussianBlur
                    stdDeviation="0.795"
                    id="feGaussianBlur5424"
                  />
                </filter>
              </defs>

              <g id="layer1" transform="translate(-82.757887,-10.097171)">
                <rect
                  style={{
                    fill: "#fffce6",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 0.79374999,
                    strokeLinejoin: "round",
                    strokeMiterlimit: 4,

                    strokeOpacity: 1,
                    filter: "url(#filter5386)"
                  }}
                  id="rect5173"
                  width="100"
                  height="100"
                  x="84"
                  y="10"
                />
                <rect
                  style={{
                    fill: "#d0d2d6",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 0.79374999,
                    strokeLinejoin: "round",
                    strokeMiterlimit: 4,

                    strokeDashoffset: 0,
                    strokeOpacity: 1,
                    filter: "url(#filter5422)"
                  }}
                  id="rect5198"
                  width="20"
                  height="33"
                  x="124"
                  y="46"
                />
                <rect
                  style={{
                    fill: "#fffff1",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 0.79374999,
                    strokeLinejoin: "round",
                    strokeMiterlimit: 4,

                    strokeDashoffset: 0,
                    strokeOpacity: 1,
                    filter: "url(#filter5422)"
                  }}
                  id="rect5198-9"
                  width="20"
                  height="33"
                  x="123.15476"
                  y="44.494041"
                />
              </g>
            </svg>
          </div>
        ) : (
          <div>
            <div
              className="wallpaper"
              style={{ zIndex: "-100" }}
              dangerouslySetInnerHTML={{ __html: this.state.darkBackGround }}
            />{" "}
            <svg
              className="switch"
              onClick={() => {
                this.lightsOut(this.state.faceList.slice());
              }}
            >
              <defs id="defs4622">
                <filter
                  style={{ colorInterpolationFilters: "sRGB" }}
                  id="filter5386"
                  x="-0.036"
                  width="1.072"
                  y="-0.036"
                  height="1.072"
                >
                  <feGaussianBlur stdDeviation="1.5" id="feGaussianBlur5388" />
                </filter>
                <filter
                  style={{ colorInterpolationFilters: "sRGB" }}
                  id="filter5398"
                  x="-0.0477"
                  width="1.0954"
                  y="-0.028909091"
                  height="1.0578182"
                >
                  <feGaussianBlur
                    stdDeviation="0.3975"
                    id="feGaussianBlur5400"
                  />
                </filter>
                <filter
                  style={{ colorInterpolationFilters: "sRGB" }}
                  id="filter5422"
                  x="-0.0954"
                  width="1.1908"
                  y="-0.057818182"
                  height="1.1156364"
                >
                  <feGaussianBlur
                    stdDeviation="0.795"
                    id="feGaussianBlur5424"
                  />
                </filter>
              </defs>

              <g id="layer1" transform="translate(-82.757887,-10.097171)">
                <rect
                  style={{
                    fill: "#fffce6",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 0.79374999,
                    strokeLinejoin: "round",
                    strokeMiterlimit: 4,

                    strokeOpacity: 1,
                    filter: "url(#filter5386)"
                  }}
                  id="rect5173"
                  width="100"
                  height="100"
                  x="83.154762"
                  y="10.494046"
                />
                <rect
                  style={{
                    fill: "#fffff1",
                    fillOpacity: 1,
                    stroke: "#000000",
                    strokeWidth: 0.79374999,
                    strokeLinejoin: "round",
                    strokeMiterlimit: 4,

                    strokeDashoffset: 0,
                    strokeOpacity: 1,
                    filter: "url(#filter5422)"
                  }}
                  id="rect5198"
                  width="20"
                  height="33"
                  x="125.15476"
                  y="47.494041"
                />
              </g>
            </svg>
          </div>
        )}

        {this.state.faceList.map(ele => {
          return (
            <div>
              <Face
                className="face"
                width={ele.width}
                height={ele.height}
                key={ele.label}
                label={ele.label}
                cols={ele.cols}
                greyCols={ele.greyCols}
                faceFat={ele.faceFat}
                faceHeight={ele.faceHeight}
                eyeHeight={ele.eyeHeight}
                eyeSquiff={ele.eyeSquiff}
                mouthPath={ele.mouth}
                nose={ele.nose}
                bosseye={ele.bosseye}
                glanceX={ele.glanceX}
                glanceY={ele.glanceY}
                brow={ele.brow}
                awake={ele.awake}
                handleClick={this.handleClick}
                lights={ele.lights}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
