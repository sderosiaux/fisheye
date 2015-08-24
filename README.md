# fisheye

Easily create a fisheye effect anywhere you need it.

[Demo](http://chtefi.github.io/react-motion-fun/demo2.html)

## Parameters

You just need to provide few things:
- a origin `{x,y}` that is generally the mouse position you need to pass
- a list of items with `{x,y}`

You can provide different parameters for the fisheye effect but there are already
set by default so it's not mandatory :
- `distortion`
- `radius`

The function will return a list of items `{x,y,scale}` according to the fisheye
parameters.

How you use those values is up to you, but generally, you already have a function
to draw your items with `{x,y}` that you can just reuse.

## Example

```javascript
import fisheye from './index.js';

const items = [
  { x: 10, y: 20 },
  { x: 20, y: 15 },
];

// draw(items);

const f = fisheye();
// const f = fisheye(4, 300); // more distortion, bigger radius

const mousePointer = { x: 15, y: 15 };
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
```
