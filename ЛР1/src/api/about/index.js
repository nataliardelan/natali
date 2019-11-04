const express = require("express");
const aboutRouter = express.Router();

aboutRouter.get("/", function(request, response) {
    response.send({
        author: "Natali Ardelan",
        Group: "SA 2",
        Variant: 1,
        Production_date: "12.10.2019" 
    });
});

module.exports = aboutRouter;