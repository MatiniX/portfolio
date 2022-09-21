import { addPoints, multiplyPoint, type Point } from "$lib/types/Point";
import { range } from "./math-extensions";

export const generatePoints = (radius: number, width: number, height: number, numIterations: number) => {
    const cellSize = radius / Math.SQRT2;

    const grid = new Array(Math.ceil(height / cellSize))
      .fill(0)
      .map(() => new Array(Math.ceil(width / cellSize)).fill(0));

    const points = new Array<Point>;
    const spawnPoints = new Array<Point>;

    spawnPoints.push({x: width / 2, y: height / 2});

    while (spawnPoints.length) {
      const spawnIndex = Math.floor(range(0, spawnPoints.length)); 
      const spawnCentre = spawnPoints[spawnIndex];

      let candidateAccepted = false;

      for (let i = 0; i < numIterations; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dir: Point = { x: Math.sin(angle), y: Math.cos(angle) };
        const candidate = addPoints(spawnCentre, multiplyPoint(dir, range(radius, radius * 2))); 
        if (isValid(candidate, width, height, radius, cellSize, points, grid)) {
          points.push(candidate);
          spawnPoints.push(candidate);
          grid[Math.floor(candidate.y / cellSize)][Math.floor(candidate.x / cellSize)] = points.length;
          candidateAccepted = true;
          break;
        }

        if (!candidateAccepted) {
          spawnPoints.splice(spawnIndex, 1);
        }
      }
    }

    return points;
  };

  const isValid = (candidate: Point, regionWidth: number, regionHeight: number, radius: number, cellSize: number, points: Array<Point>, grid: any[][]) => {
    if (candidate.x >= 0 && candidate.x < regionWidth && candidate.y >= 0 && candidate.y < regionHeight) {
      const cellX = Math.floor(candidate.x / cellSize);
      const cellY = Math.floor(candidate.y / cellSize);
      const searchStartX = Math.max(0, cellX - 2);
      const searchEndX = Math.min(cellX + 2, grid[0].length - 1);
      const searchStartY = Math.max(0, cellY - 2);
      const searchEndY = Math.min(cellY + 2, grid.length - 1);

      for (let x = searchStartX; x <= searchEndX; x++) {
        for (let y = searchStartY; y <= searchEndY; y++) {
          const pointIndex = grid[y][x] - 1;
          if (pointIndex != -1) {
            const diff: Point = { x: candidate.x - points[pointIndex].x, y: candidate.y - points[pointIndex].y };  
            const dstSqr = diff.x * diff.x + diff.y * diff.y;
            if (dstSqr < radius * radius) {
              return false;
            }
          }
        }
      }
      return true;
    }
    return false;
  }