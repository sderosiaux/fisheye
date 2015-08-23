import fisheye from './index.js';

const items = [
  { x: 10, y: 20 },
  { x: 20, y: 15 },
];

// draw(items);

const f = fisheye(10, 20);

const mousePointer = {
  x: 15,
  y: 15
};

const itemsFisheyed = items.map(f(mousePointer));

// draw(itemsFisheyed);

// [
//   { x: 5.3756834868953,
//     y: 24.624316513104702,
//     scale: 1.92486330262094 },
//   { x: 24.710604651796842,
//     y: 15,
//     scale: 1.9421209303593685 }
// ]


