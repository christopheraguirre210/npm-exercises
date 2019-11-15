const $ = require('jquery');

const howdy = require('./say-hello.js');

const sayHello = () => "Hello";

howdy.sayHi();


$('body').css('background-color', 'pink').html(`<h1>${howdy.sayHi()}</h1>`);