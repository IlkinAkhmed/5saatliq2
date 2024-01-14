import express from "express"
import { deleteProduct, getAllProducts, getProductById, postProduct } from "../controllers/productController.js"
const router = express.Router()

router.post('/products', postProduct)
router.get('/products', getAllProducts)
router.get('/products/:id', getProductById)
router.delete('/products/:id', deleteProduct)

export default router