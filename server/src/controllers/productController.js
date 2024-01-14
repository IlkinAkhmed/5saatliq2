import { Products } from "../models/productModel.js"

export const getAllProducts = async (req, res) => {
    try {
        const products = await Products.find({})
        res.status(200).send(products)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const getProductById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Products.findById(id)
        res.status(200).send(product)

    } catch (error) {
        res.status(500).send(error.message)
    }
}

export const postProduct = async (req, res) => {
    try {
        const product = new Products(req.body)
        await product.save()
        res.status(200).send('Product created successfully!!')
    } catch (error) {
        res.status(500).send(error.message)
    }
}
export const deleteProduct = async (req, res) => {
    const { id } = req.params
    try {
        await Products.findByIdAndDelete(id)
        res.status(200).send('Product deleted successfully')

    } catch (error) {
        res.status(500).send(error.message)
    }
}