export type Point = {
  x: number;
  y: number;
};

export const addPoints = (a: Point, b: Point): Point => {
  return { x: a.x + b.x, y: a.y + b.y };
};

export const multiplyPoint = (p: Point, x: number): Point => {
  return { x: p.x * x, y: p.y * x };
};
