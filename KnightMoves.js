import { Coords } from "./Coords.js";
import process from "process";

const args = process.arvg;

const KnightMoves = function (sArr, dArr) {
  let path = [];
  let found = false;
  let depth = 1;
  let points = null;

  const checkNextMoves = function (arr) {
    arr = Coords.getCoords(arr[0], arr[1]);
    let a = false;
    for (let val of arr) {
      if (val) {
        if (val[0] == dArr[0]) {
          if (val[1] == dArr[1]) a = true;
        }
      }
    }
    return a;
  };

  const findPath = function () {
    const checkLanded = function (arr, count) {
      if (checkNextMoves(arr)) {
        path.push(arr);
        return true;
      }
      if (count == depth) return false;
      points = Coords.getCoords(arr[0], arr[1]);
      points.forEach((point) => {
        if (!found) {
          if (point) {
            if (checkLanded(point, count + 1)) found = true;
          }
        }
      });
      if (found) path.push(arr);
    };
    if (checkNextMoves(sArr)) {
      return [sArr];
    }
    while (found == false) {
      checkLanded(sArr, 0);
      depth++;
    }
    return path;
  };

  const prepareAnswer = function (arr) {
    arr.reverse();
    let format = [...arr, dArr];
    let string = "";
    for (let val of format) {
      string = `${string} \n ${val}`;
    }
    return string;
  };
  let answer = prepareAnswer(findPath());
  console.log(
    `The Knight made it in ${depth} move(s)!, the sequence was ${answer}`,
  );
};

const coord1 = process.argv[2].split(",");
const coord2 = process.argv[3].split(",");

KnightMoves(
  [Number(coord1[0]), Number(coord1[1])],
  [Number(coord2[0]), Number(coord2[1])],
);

export default KnightMoves;
