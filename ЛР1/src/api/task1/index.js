const express = require("express");
const task1Router = express.Router();

task1Router.get("/", function(request, response) {
    let a = request.query.a;
    // response.send("1/a = " + 1/a);
    // response.send("sin(a) = " + Math.sin(a));
    if (a < 1) 
        response.send("Значення а має бути більшим або равним 1!!!");
    else {
        if (1/a > Math.sin(a)) 
            response.send("1/a більше ніж sin(a)");
        else if (1/a < Math.sin(a))
            response.send("sin(a) більше ніж 1/a");
        else 
        response.send("sin(a) = 1/a");
    }
});

module.exports = task1Router;