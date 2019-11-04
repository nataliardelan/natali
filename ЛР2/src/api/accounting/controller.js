const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = "accounting_db";

const accountingController = {
    get: function(req, res) {
        let X = req.query.X;
        let Y = req.query.Y;
        const client = new MongoClient(url);
        client.connect(function(error, result) {
            if (error) res.send(error)
            const event = result.db(dbName).collection("accounting");
            if (X && Y) {
            event.find({"position": X}).toArray(function(error, result) {
                let arr = result.filter((elem) => {
                    return (!Y || elem.childrenCount <= parseInt(Y));
                })
                if (error) res.send(error);
                else res.send(arr);
                client.close();
                    });  
                }
                 });
                 

    },
    post: (req, res) => {
        let newItem = req.body;
        const mongoClient = new MongoClient(url);
        mongoClient.connect(function (err, result) {
            if (err) res.status(500).send(err);

            const accounting = result.db(dbName).collection("accounting");
            accounting.insertOne(newItem, function (err, result) {
                if (err) 
                    res.status(500).send(err);
                else
                    res.send(newItem);

                mongoClient.close();
            });
        });
    },

   
}

module.exports = {
	accountingController
}