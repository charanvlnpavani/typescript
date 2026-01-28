var direction;
(function (direction) {
    direction[direction["UP"] = 0] = "UP";
    direction[direction["DOWN"] = 1] = "DOWN";
    direction[direction["LEFT"] = 2] = "LEFT";
    direction[direction["RIGHT"] = 3] = "RIGHT";
})(direction || (direction = {}));
console.log(direction.UP); // Output: 0
console.log(direction.DOWN); // Output: 1
console.log(direction.LEFT); // Output: 2
console.log(direction.RIGHT); // Output: 3
