class FlowFieldEffect {
  #ctx;
  #width;
  #height;
  #angle;
  #startTime;
  constructor(ctx, width, height) {
    this.#ctx = ctx;
    this.#width = width;
    this.#height = height;
    this.#angle = 0;
    this.startTime = 0;
    this.interval = 1000 / 60;
    this.timer = 0;
    this.cellSize = 15;
    this.gradient;
    this.#createGradient();
    this.radius = 0;
    this.vr = 0.03;
  }
  #draw(x, y, gradient, angle) {
    this.#ctx.beginPath();
    this.#ctx.moveTo(x, y);
    this.#ctx.strokeStyle = gradient;
    this.#ctx.lineTo(x + Math.cos(angle) * 30, y + Math.sin(angle) * 30);
    this.#ctx.stroke();
  }

  #createGradient = function () {
    this.gradient = this.#ctx.createLinearGradient(
      0,
      0,
      this.#width,
      this.#height
    );

    this.gradient.addColorStop("0.1", "#FDFDBD");
    this.gradient.addColorStop("0.2", "#2192FF");
    this.gradient.addColorStop("0.4", "#B8E8FC");
    this.gradient.addColorStop("0.6", "#b3ffff");
    this.gradient.addColorStop("0.8", "#B1AFFF");
    this.gradient.addColorStop("0.9", "#665A48");
  };

  animate(timeStamp) {
    const deltaTime = timeStamp - this.startTime;
    this.startTime = timeStamp;

    if (this.timer > this.interval) {
      this.#ctx.clearRect(0, 0, this.#width, this.#height);
      this.timer = 0;
      this.radius += this.vr;
      for (let y = 0; y < this.#width; y += this.cellSize) {
        for (let x = 0; x < this.#height; x += this.cellSize) {
          const angle = (Math.cos(x * 0.01) + Math.sin(y * 0.01)) * this.radius;
          this.#draw(x, y, this.gradient, angle);
        }
      }
    } else {
      this.timer += deltaTime;
    }

    requestAnimationFrame(this.animate.bind(this));
  }
}

const mouse = {
  x: null,
  y: null,
};

window.addEventListener("mousemove", function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});
export { FlowFieldEffect };
