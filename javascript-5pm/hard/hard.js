
let tom = {mass: 8, height: 9};
let jerry = {mass: 45, height: 10};

let tomBMI = tom.mass / (tom.height * 0.0254) ** 2;
let jerryBMI = jerry.mass / (jerry.height * 0.0254) ** 2;

let isTomHigherBMI = tomBMI > jerryBMI
