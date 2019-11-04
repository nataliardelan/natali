import { Schema, model } from "mongoose";

const accountingSchema = new Schema({
    fullName: String,
    position: String,
    salary: Number,
    childrenCount: Number,
    expiriense:Number 
})

const accounting = model("accounting", accountingSchema);

export default accounting;