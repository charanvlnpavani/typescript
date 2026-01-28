"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var direction;
(function (direction) {
    direction["UP"] = "top";
    direction["DOWN"] = "bottom";
    direction["LEFT"] = "left";
    direction["RIGHT"] = "right";
})(direction || (direction = {}));
console.log(direction.UP); // Output: top
console.log(direction.DOWN); // Output: bottom
console.log(direction.LEFT); // Output: left
console.log(direction.RIGHT); // Output: right
