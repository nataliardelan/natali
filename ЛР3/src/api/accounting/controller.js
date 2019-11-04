import { MongoClient, ObjectID } from 'mongodb';
import accounting from "./model";
import mongoose from "mongoose";

const url = 'mongodb://localhost:27017';
const dbName = 'taskDB';
mongoose.connect (url+'/'+dbName);

const accountingControler = {
    get: function (request, response) {
        const X=request.query.X;
        const Y=request.query.Y;
        accounting.find({"position":X})
        .then(inf=>{
            let arr=inf.filter((elem)=>{
                return (!Y||elem.childrenCount <= Y)
            })
                response.send(arr);
        })
        .catch(
            error=>{
                response.status(500).send(error);
            }
        );
    },
    post: function(request, response) {
        const newItem = new accounting(request.body);
        newItem.save()
        .then(inf=>{
            response.send(inf);    
        }).catch(
            error=>{
                response.status(500).send(error);
            });
    },
}


export default accountingControler;