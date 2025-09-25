enum Direction {
    Up = 0,
    Down = 1,
    Left = 2,
    Right = 3
}; 

const num = 3;
const dir:Direction = num;

let haut:Direction = Direction.Up;
let bas:Direction = Direction.Down;
let left:Direction = Direction.Left;
let right:Direction = Direction.Right;

console.log(dir === Direction.Right, haut, bas, left, right);