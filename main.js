"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tiger_1 = require("./Tiger");
var Orange_1 = require("./Orange");
var tiger = new Tiger_1.Tiger();
var a = tiger.makeSound();
console.log(a);
var ora = new Orange_1.Orange();
console.log(ora.howToEat());
