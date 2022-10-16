import { FlowFieldEffect } from "./js/FlowFieldEffect.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const canvas = $("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const app = {
  flowFieldEffect: new FlowFieldEffect(
    ctx,
    window.innerWidth,
    window.innerHeight
  ),
  
  start: function () {
    const positionX = 100;
    const positionY = 100;

    window.addEventListener(
      "onload",
      this.changeSizeEvent(null, { positionX, positionY }, event)
    );
  },

  changeSizeEvent: function (optionNull, value, event) {
    const { positionX, positionY } = value;

    this.flowFieldEffect.animate(0);
    console.log({
      ctx: ctx,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      canvasWidth: canvas.width,
      canvasHeight: canvas.height,
    });
  },
};

app.start();
