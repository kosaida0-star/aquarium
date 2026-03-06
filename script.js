let t = 0;

function setup() {
  createCanvas(600, 900);
  background(1);
  strokeWeight(1);
}

function draw() {
  background(0, 8);
  for (let y = 0; y < 400; y += 1) {
    for (let x = 0; x < 400; x += 1) {
      if (random() < 0.0007) organism(x, y);
    }
  }
  t += 3;
}

function organism(x, y) {
  let k = 4 * cos(x / 2) * cos(y / 4);
  let e = y / 10 - 10;

  let d = pow(mag(k, e), 2) / 80 + 9;

  let angleTerm = atan2(k, e);
  let q = 67 - 1.5 * sin(angleTerm * e);

  let wave = k * (3 + 9 / d * sin(d * d - t * 3));

  let c = d / 3 + e / 333 - t / 70;

  let xCoord = (q + wave) * 1.8 * sin(c) + 300;
  let yCoord = (q + d * 3.2) * cos(c) + 250;

  let r = 8000;
  let g = 40 + d * 10;
  let b = 10 + d * 10;

  stroke(r, g, b, 180);
  point(xCoord, yCoord);
}