import { Coords } from "./Coords.js";

const KnightMoves = function (sArr, dArr) {
  const getAdjList = function (arr) {
    let adjList = [];
    for (let val of arr)
      if (val) {
        if (!Array.isArray(adjList[val[0]])) {
          adjList[val[0]] = [val[1]];
        } else adjList[val[0]].push(val[1]);
      }

    return adjList;
  };

  let landingSquares = getAdjList(Coords.getCoords(dArr[0], dArr[1]));

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
  let path = [];
  let found = false;
  let depth = 1;
  let points = null;

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
    `The Knight made it in ${depth} move(s)!, the sequence was\n ${answer}`
  );

  if (checkNextMoves(sArr)) {
    return true;
  } else return findPath(sArr);
};

KnightMoves([3, 4], [7, 7]);
