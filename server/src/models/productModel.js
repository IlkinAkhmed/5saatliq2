import mongoose from "mongoose"
const { Schema } = mongoose

const ProductSchema = new Schema({
    image: { type: String },
    description: { type: String },
    title: { type: String },
    price: { type: Number },
}, { timestamps: true })

export const Products = mongoose.model('5saatliqtest2', ProductSchema)