/**
 * Create a factory to initialize a fisheye transformation.
 * It returns a function A that take a origin {x, y} that itself, return a
 * function B you can use to iterate through a list of items {x, y}.
 * 
 * The items must have at least 2 properties { x, y }.
 * The function B returns a item with 3 properties { x, y, scale } according tp
 * the given origin and the parameter of the factory (`distortion` and `radius`).
 * 
 * @param  {object} origin     {x,y}
 * @param  {number} distortion default: 2
 * @param  {number} radius     default: 200
 * @return {function}          f(origin = {x, y}) => f(item = {x, y})
 */
export default function fisheye(distortion = 2, radius = 200) {
  const e = Math.exp(distortion)
  let k0 = e / (e - 1) * radius;
  let k1 = distortion / radius;

  return origin => item => {
    const dx = item.x - origin.x;
    const dy = item.y - origin.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // too far away ? don't apply anything
    if (!distance || distance >= radius) {
      return {
        x: item.x,
        y: item.y,
        scale: distance >= radius ? 1 : 10,
      };
    }

    const k = k0 * (1 - Math.exp(-distance * k1)) / distance * .75 + .25;
    return {
      x: origin.x + dx * k,
      y: origin.y + dy * k,
      scale: Math.min(k, 10),
    };
  }
}
