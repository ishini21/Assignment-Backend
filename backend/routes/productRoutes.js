import express from 'express'
import {getAll,getOne,create,update,remove} from '../controllers/productController.js'
import {productValidationRules} from '../validations/productValidation.js'
import {validate} from '../middlewares/validate.js'

const productRouter = express.Router();

productRouter.get('/', getAll);
productRouter.get('/:id', getOne);
productRouter.post('/add-product',productValidationRules,validate,create);
productRouter.put('/update/:id', productValidationRules,validate,update);
productRouter.delete('/delete/:id',remove);

export default productRouter;