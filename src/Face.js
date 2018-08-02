import React, { Component } from "react";

import "./App.css";

export default class Ellipse extends React.Component {
  render() {
    return (
      <svg
        version="1.1"
        id={this.props.id}
        xmlns="http://www.w3.org/2000/svg"
        width={this.props.width}
        height={this.props.height}
        enableBackground="new 0 0 128 168"
        viewBox="0 0 128 168"
      >
        <ellipse
          id={this.props.label}
          fill={
            this.props.lights
              ? this.props.awake
                ? this.props.cols.A
                : this.props.greyCols.A
              : "rgb(0,0,0,0)"
          }
          cx={64 - this.props.faceFat}
          cy="92"
          rx="10"
          ry="20"
          onClick={e => this.props.handleClick(e)}
        />
        <ellipse
          id={this.props.label}
          fill={
            this.props.lights
              ? this.props.awake
                ? this.props.cols.A
                : this.props.greyCols.A
              : "rgb(0,0,0,0)"
          }
          cx={64 + this.props.faceFat}
          cy="92"
          rx="10"
          ry="20"
          onClick={e => this.props.handleClick(e)}
        />
        <ellipse
          onClick={e => this.props.handleClick(e)}
          id={this.props.label}
          fill={
            this.props.lights
              ? this.props.awake
                ? this.props.cols.A
                : this.props.greyCols.A
              : "rgb(0,0,0,0)"
          }
          cx="64"
          cy="84"
          rx={this.props.faceFat}
          ry={this.props.faceHeight}
          onClick={e => this.props.handleClick(e)}
        />

        <ellipse
          fill="white"
          stroke={this.props.awake ? this.props.colsA : this.props.greyCols.C}
          strokeWidth="2"
          id={this.props.label}
          cx={64 - (this.props.faceFat * 13) / 32 + this.props.eyeSquiff}
          cy="84"
          rx="12"
          ry={this.props.awake ? 6 * this.props.eyeHeight : 1}
          onClick={e => this.props.handleClick(e)}
        />
        <ellipse
          fill="white"
          stroke={this.props.awake ? this.props.colsA : this.props.greyCols.C}
          strokeWidth="2"
          id={this.props.label}
          cx={64 + (this.props.faceFat * 13) / 32 - this.props.eyeSquiff}
          cy="84"
          rx="12"
          ry={this.props.awake ? 6 * this.props.eyeHeight : 1}
          onClick={e => this.props.handleClick(e)}
        />
        <ellipse
          fill={this.props.cols.C}
          id={this.props.label}
          cx={
            64 -
            (this.props.faceFat * 13) / 32 +
            this.props.eyeSquiff +
            this.props.glanceX
          }
          cy={84 + this.props.glanceY}
          rx="4"
          ry={4 * this.props.awake}
          onClick={e => this.props.handleClick(e)}
        />
        <ellipse
          fill={this.props.cols.C}
          id={this.props.label}
          cx={
            64 +
            (this.props.faceFat * 13) / 32 -
            this.props.eyeSquiff +
            this.props.glanceX * this.props.bosseye
          }
          cy={84 + this.props.glanceY * this.props.awake}
          rx="4"
          ry={4 * this.props.awake}
          onClick={e => this.props.handleClick(e)}
        />
        <ellipse
          fill="black"
          id={this.props.label}
          cx={
            64 -
            (this.props.faceFat * 13) / 32 +
            this.props.eyeSquiff +
            this.props.glanceX
          }
          cy={84 + this.props.glanceY}
          rx="3"
          ry={3 * this.props.awake}
          onClick={e => this.props.handleClick(e)}
        />
        <ellipse
          fill="black"
          id={this.props.label}
          cx={
            64 +
            (this.props.faceFat * 13) / 32 -
            this.props.eyeSquiff +
            this.props.glanceX * this.props.bosseye
          }
          cy={84 + this.props.glanceY}
          rx="3"
          ry={3 * this.props.awake}
          onClick={e => this.props.handleClick(e)}
        />
        <ellipse
          fill={
            this.props.lights
              ? this.props.awake
                ? this.props.cols.C
                : this.props.greyCols.C
              : "rgb(0,0,0,0)"
          }
          id={this.props.label}
          cx="56"
          cy="108"
          rx={this.props.nose}
          ry={this.props.nose}
          onClick={e => this.props.handleClick(e)}
        />
        <ellipse
          fill={
            this.props.lights
              ? this.props.awake
                ? this.props.cols.C
                : this.props.greyCols.C
              : "rgb(0,0,0,0)"
          }
          id={this.props.label}
          cx="64"
          cy="100"
          rx={this.props.nose}
          ry={this.props.nose * 2.5}
          onClick={e => this.props.handleClick(e)}
        />
        <ellipse
          fill={
            this.props.lights
              ? this.props.awake
                ? this.props.cols.C
                : this.props.greyCols.C
              : "rgb(0,0,0,0)"
          }
          id={this.props.label}
          cx="72"
          cy="108"
          rx={this.props.nose}
          ry={this.props.nose}
          onClick={e => this.props.handleClick(e)}
        />

        <path
          stroke={
            this.props.lights
              ? this.props.awake
                ? this.props.cols.C
                : this.props.greyCols.C
              : "rgb(0,0,0,0)"
          }
          fill={
            this.props.lights
              ? this.props.awake
                ? this.props.cols.C
                : this.props.greyCols.C
              : "rgb(0,0,0,0)"
          }
          id={this.props.label}
          strokeWidth="1"
          d={
            this.props.awake
              ? this.props.mouthPath.awake
              : this.props.mouthPath.asleep
          }
          onClick={e => this.props.handleClick(e)}
        />

        <path
          stroke={
            this.props.lights
              ? this.props.awake
                ? this.props.cols.C
                : this.props.greyCols.C
              : "rgb(0,0,0,0)"
          }
          fill="none"
          id={this.props.label}
          strokeWidth={this.props.brow.thickness}
          d={this.props.brow.right}
          onClick={e => this.props.handleClick(e)}
        />
        <path
          stroke={
            this.props.lights
              ? this.props.awake
                ? this.props.cols.C
                : this.props.greyCols.C
              : "rgb(0,0,0,0)"
          }
          fill="none"
          id={this.props.label}
          strokeWidth={this.props.brow.thickness}
          d={this.props.brow.left}
          onClick={e => this.props.handleClick(e)}
        />

        <rect
          fill="white"
          id={this.props.label}
          x={64 - (this.props.faceFat * 13) / 32 + this.props.eyeSquiff}
          y={84 + this.props.glanceY}
          width="2"
          height={2 * this.props.awake}
          onClick={e => this.props.handleClick(e)}
        />
        <rect
          fill="white"
          id={this.props.label}
          x={64 + (this.props.faceFat * 13) / 32 - this.props.eyeSquiff}
          y={84 + this.props.glanceY}
          width="2"
          height={2 * this.props.awake}
          onClick={e => this.props.handleClick(e)}
        />
      </svg>
    );
  }
}
