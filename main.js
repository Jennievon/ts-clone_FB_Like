"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var like = new like_component_1.Like(10, true);
like.onClick();
console.log("likesCount: " + like.likesCount + ", isSelected: " + like.isSelected);
