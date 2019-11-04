const express = require("express");
const task2Router = express.Router();

task2Router.get("/", function(request, response) {
    let bookkeeping = [{name: "Семочко Микола Іванович", position: "головнийБухгалтер", salary: 17600, childrensCount: 2, expirience: 22},
                       {name: "Кохан Марія Петрівна", position: "бухгалтер", salary: 13200, childrensCount: 1, expirience: 14},
                       {name: "Сухан Іван Іванович", position: "економіст", salary: 15350, childrensCount: 2, expirience: 12},
                       {name: "Лакатош Анна Василівна", position: "бухгалтер", salary: 14800, childrensCount: 4, expirience: 18},];
    let pos = request.query.position;
    let chilCount = request.query.childrensCount;

    let arr = bookkeeping.filter((elem) => {
        return (!pos || pos == elem.position) && (!chilCount || elem.childrensCount <= chilCount);
    });

    response.send(arr);
});

module.exports = task2Router;